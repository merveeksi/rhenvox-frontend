import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Logo() {
  const { href } = useI18n();

  return (
    <Link href={href("/")} className="rv-logo" aria-label="Rhenvox">
      <Image
        src="/images/rhenvox-header.png"
        alt=""
        width={795}
        height={160}
        priority
        sizes="220px"
        className="rv-logo-img rv-logo-for-dark"
      />
      <Image
        src="/images/rhenvox-header-ink.png"
        alt=""
        width={795}
        height={160}
        priority
        sizes="220px"
        className="rv-logo-img rv-logo-for-light"
      />
    </Link>
  );
}
