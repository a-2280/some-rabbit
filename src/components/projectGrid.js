import Image from "next/image"
import Link from "next/link"
import Spacer from "./spacer"
import LinkIcon from "./linkIcon"

export default function ProjectGrid({ projects }) {
    return (
        <div className='flex justify-center'>
            <div className='p40 grid w-100 max-1400'>
                {projects.map((project, index) => {
                    const linkText = project.link?.replace(/^https?:\/\//, "").replace(/\/$/, "")

                    return (
                        <div key={index}>
                            <div className="flex flex-col gap-15">
                                <div className='pos-rel ratio-16-10 radius-10 overflow'>
                                    <Image className='bg-image' src={project.posterUrl} alt='' fill />
                                </div>
                                <div className='project-info flex space-between  gap-25'>
                                    <div className='project-text flex flex-col difference invert'>
                                        <div className='project-headline start'>
                                            <div className='project-credit flex gap-5'>
                                                <p className='h4'>{project.title}</p>
                                                <p>with {project.collaborator}</p>
                                            </div>
                                            <div className='project-url h4'>{project.comingSoon ? <p>Coming Soon!</p> : <Link href={project.link}>{linkText}</Link>}</div>
                                        </div>
                                        <p>{project.description}</p>
                                    </div>
                                    <LinkIcon link={project.link} />
                                </div>
                            </div>
                            <Spacer />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
