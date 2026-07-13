import Link from "next/link";

export default function LinkIcon({ link }) {
    return <Link href={link} className="link-icon"><div className="arrow" /></Link>
}
