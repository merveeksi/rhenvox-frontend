import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Logo() {
  const { href } = useI18n();

  return (
    <Link href={href("/")} className="rv-logo" aria-label="Rhenvox">
      <Image
        src="/images/rhenvox-name.png"
        alt=""
        width={640}
        height={157}
        priority
        sizes="220px"
        className="rv-logo-img rv-logo-for-dark"
      />
      <Image
        src="/images/rhenvox-name-ink.png"
        alt=""
        width={640}
        height={157}
        priority
        sizes="220px"
        className="rv-logo-img rv-logo-for-light"
      />
    </Link>
  );
}
