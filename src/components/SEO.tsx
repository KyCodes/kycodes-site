import React from 'react'

interface SEOProps {
    title: string;
}

export default function SEO(props: SEOProps) {
  return (
    <>
        <title>KyCodes | {props.title}</title>
        <meta name="description" content='KyCodes uses modern tech to create beautiful experiences. Accessibility measures assure that none are excluded from the visions of others. Efficient code and a focus on user experience keeps users satisfied time and time again!' />
        <meta name="twitter:card" content='summary' />
        <meta name="twitter:title" content={`KyCodes | ${props.title}`} />
        <meta name="twitter:url" content='https://ky.codes' />
        <meta name="twitter:description" content='KyCodes uses modern tech to create beautiful experiences. Accessibility measures assure that none are excluded from the visions of others. Efficient code and a focus on user experience keeps users satisfied time and time again!' />
        <meta name="twitter:image" content='https://ky.codes/static/eff0c9d1380a1deb67aa60fe6f8dbeac/a4c1d/kycodes-full.webp' />
        <meta name="twitter:creator" content='@KylerFullerton' />
    </>
  )
}
