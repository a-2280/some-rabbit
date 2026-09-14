import Blocks from '@/components/blocks'
import {sanityFetch} from '@/sanity/live'

const HOME_QUERY = `*[_id == "layout"][0].homePage->{
    name,
    content[]{
        ...,
        _type == "featuredProject" => {
            ...project->{
                title,
                collaborator,
                description,
                comingSoon,
                link,
                "videoUrl": video.asset->url,
                "posterUrl": poster.asset->url
            }
        },
        _type == "projectGrid" => {
            projects[]->{
                title,
                collaborator,
                description,
                comingSoon,
                link,
                "videoUrl": video.asset->url,
                "posterUrl": poster.asset->url
            }
        }
    }
}`

export default async function Home() {
    const {data: page} = await sanityFetch({query: HOME_QUERY})

    return (
        <div className='pth'>
            <Blocks blocks={page?.content} />
        </div>
    )
}
