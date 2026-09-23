import Link from "next/link"

export default function ProjectHeadline({ title, collaborator, link, comingSoon, className = "" }) {
    const linkText = link?.replace(/^https?:\/\//, "").replace(/\/$/, "")

    return (
        <div className={`project-headline ${className}`}>
            <div className='project-credit flex gap-5'>
                <p className='h4'>{title}</p>
                <p>with {collaborator}</p>
            </div>
            <div className='project-url h4'>{comingSoon ? <p>Coming Soon</p> : <Link href={link}>{linkText}</Link>}</div>
        </div>
    )
}
