import {PortableText} from '@portabletext/react'

export default function Hero({heading}) {
    return (
        <div className='h2 max-400px ma mt-140px mb-180px fade--in m-p20' data-sal>
            <PortableText value={heading} />
        </div>
    )
}
