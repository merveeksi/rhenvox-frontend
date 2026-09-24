import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="rv-logo" aria-label="Rhenvox">
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
