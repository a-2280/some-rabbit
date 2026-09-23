import Hero from './hero'
import FeaturedProject from './featuredProject'
import ProjectGrid from './projectGrid'
import Capabilities from './capabilities'
import Booking from './booking'

const blockTypes = {hero: Hero, featuredProject: FeaturedProject, projectGrid: ProjectGrid, capabilities: Capabilities, booking: Booking}

export default function Blocks({blocks = []}) {
    return blocks.map(block => {
        const Block = blockTypes[block._type]
        return Block ? <Block key={block._key} {...block} /> : null
    })
}
