import Hero from './hero'
import FeaturedProject from './featuredProject'
import ProjectGrid from './projectGrid'

const blockTypes = {hero: Hero, featuredProject: FeaturedProject, projectGrid: ProjectGrid}

export default function Blocks({blocks = []}) {
    return blocks.map(block => {
        const Block = blockTypes[block._type]
        return Block ? <Block key={block._key} {...block} /> : null
    })
}
