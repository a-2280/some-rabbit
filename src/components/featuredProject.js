import Image from "next/image"
import LinkIcon from "./linkIcon"
import Link from "next/link"
import Spacer from "./spacer"

export default function FeaturedProject({ videoUrl, posterUrl, title, collaborator, description, link, comingSoon }) {
    const linkText = link?.replace(/^https?:\/\//, "").replace(/\/$/, "")

    return (
        <>
            <div className='flex flex-col align-center gap-40'>
                <div className='bg-grey pos-rel ratio-16-10 max-900 radius-12 overflow'>
                    <Image className='bg-image' src={posterUrl} alt='Featured project' fill />
                    <video className='bg-image' src={videoUrl} poster={posterUrl} autoPlay muted loop playsInline />
                </div>
                <div className='project-info flex flex-col align-center gap-25'>
                    <div className='project-text flex flex-col align-center difference invert'>
                        <div className='project-headline'>
                            <div className='project-credit flex gap-5'>
                                <p className='h4'>{title}</p>
                                <p>with {collaborator}</p>
                            </div>
                            <div className='project-url h4'>{comingSoon ? <p>Coming Soon!</p> : <Link href={link}>{linkText}</Link>}</div>
                        </div>
                        <p>{description}</p>
                    </div>
                    <LinkIcon link={link} />
                </div>
            </div>
            <Spacer />
        </>
    )
}
