import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Logo() {
  const { href } = useI18n();

  return (
    <Link href={href("/")} className="rv-logo" aria-label="Rhenvox">
      <Image
        src="/images/rhenvox-wordmark.png"
        alt="Rhenvox"
        width={960}
        height={299}
        priority
        sizes="180px"
        className="rv-logo-img"
      />
    </Link>
  );
}
