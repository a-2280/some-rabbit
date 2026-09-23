import Image from "next/image"
import Link from "next/link"
import Spacer from "./spacer"
import LinkIcon from "./linkIcon"
import ProjectHeadline from "./projectHeadline"

export default function ProjectGrid({ projects }) {
    return (
        <div className='flex justify-center'>
            <div className='p40 grid column-60 w-100 max-1400 m-flex m-flex-col m-p20 m-gap-40'>
                {projects.map((project, index) => {
                    const Media = project.link ? Link : "div"
                    return (
                        <div key={index}>
                            <div className='project-card flex flex-col gap-15'>
                                <Media href={project.link} className='project-media hover--zoom pos-rel ratio-16-10 radius-10 overflow'>
                                    <Image className='bg-image' src={project.posterUrl} alt='' fill />
                                </Media>
                                <div className='project-info flex space-between  gap-25'>
                                    <div className='project-text flex flex-col difference invert fade--in' data-sal>
                                        <ProjectHeadline className='start' title={project.title} collaborator={project.collaborator} link={project.link} comingSoon={project.comingSoon} />
                                        <p>{project.description}</p>
                                    </div>
                                    <LinkIcon link={project.link} />
                                </div>
                            </div>
                            <Spacer className="m-hide" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
