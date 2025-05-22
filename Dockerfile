# Stage 1: Bağımlılıkları Kurma
# Bun'ı destekleyen güncel bir Node.js Alpine imajı kullanın.
# Node.js 20 ve üzeri, çoğu Bun sürümüyle iyi çalışır.
FROM oven/bun:latest AS deps

WORKDIR /app

# Package.json ve lock dosyalarını kopyalayın
# Bun'ın kendi lock dosyası bun.lock'tur.
COPY package.json bun.lock ./

# Bağımlılıkları Bun ile kurun
# --frozen-lockfile, lock dosyasının paket.json ile tutarlı olmasını sağlar.
RUN bun install --frozen-lockfile

# Stage 2: Uygulamayı Oluşturma
FROM oven/bun:latest AS builder

WORKDIR /app

# Bağımlılıkları deps stage'inden kopyalayın
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

# Kaynak kodunu kopyalayın
COPY . .

# .env dosyalarını kopyalayın (yalnızca build sırasında gerekiyorsa)
# NOT: Üretim ortamında hassas verileri bu şekilde kopyalamak yerine
# Docker Secret'ları veya çevre değişkenlerini kullanmanız önerilir.
COPY .env .
COPY .env.local .

# Next.js telemetry'yi build sırasında devre dışı bırakmak isterseniz:
# ENV NEXT_TELEMETRY_DISABLED 1

# Uygulamayı Bun ile derleyin
RUN bun run build

# Stage 3: Üretim İmajı
FROM oven/bun:latest AS runner

WORKDIR /app

ENV NODE_ENV=production
# Next.js telemetry'yi runtime sırasında devre dışı bırakmak isterseniz:
# ENV NEXT_TELEMETRY_DISABLED 1

# next.js uygulamasını çalıştırmak için standart bir kullanıcı oluşturun
# Güvenlik için root olmayan bir kullanıcı kullanmak önemlidir.
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Public klasörünü kopyalayın ve doğru izinleri verin
COPY --from=builder /app/public ./public
# Favicon dizini için özel olarak izinleri ayarla
RUN mkdir -p ./public/images/favicon && \
    chown -R nextjs:nodejs ./public && \
    chmod -R 755 ./public

# Otomatik çıktı izleme (output file tracing) ile optimize edilmiş kopyalama
# Bu, sadece uygulamanın çalışması için gereken dosyaları kopyalar.
# next.config.js dosyanızda `output: 'standalone'` ayarının etkin olduğundan emin olun.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# .next klasörüne doğru izinleri verin
RUN chown -R nextjs:nodejs ./.next

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Next.js standalone output'u doğrudan çalıştırın
CMD ["node", "server.js"]