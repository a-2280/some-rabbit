import {PortableText} from '@portabletext/react'

export default function Hero({heading}) {
    return (
        <div className='h1 max-400px ma mt-140px mb-180px'>
            <PortableText value={heading} />
        </div>
    )
}
