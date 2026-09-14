import Link from "next/link";

export default function LinkIcon({ link }) {
    const Tag = link ? Link : "div"
    return <Tag href={link} className="link-icon"><div className="arrow" /></Tag>
}
