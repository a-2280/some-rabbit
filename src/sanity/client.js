import {createClient} from 'next-sanity'

export const client = createClient({
    projectId: 'f5sweic0',
    dataset: 'production',
    apiVersion: '2026-08-28',
    useCdn: true
})
