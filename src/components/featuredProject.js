import LinkIcon from "./linkIcon"
import Spacer from "./spacer"
import ProjectHeadline from "./projectHeadline"
import FeaturedMedia from "./featuredMedia"

export default function FeaturedProject({ videoUrl, posterUrl, title, collaborator, description, link, comingSoon }) {
    return (
        <>
            <div className='flex flex-col align-center gap-40 pos-rel p20'>
                <FeaturedMedia videoUrl={videoUrl} posterUrl={posterUrl} link={link} />
                <div className='project-info flex flex-col align-center gap-25'>
                    <div className='project-text flex flex-col align-center difference invert fade--in' data-sal>
                        <ProjectHeadline title={title} collaborator={collaborator} link={link} comingSoon={comingSoon} />
                        <p>{description}</p>
                    </div>
                    <LinkIcon link={link} />
                </div>
            </div>
            <Spacer />
        </>
    )
}
