import Head from "next/head"

export const AppHead = ({metadata}) => {
  console.log("Metadata: ", metadata)
    return <Head>
        <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="subject" content={metadata.subject} />
      <meta name="copyright" content={metadata.copyright} />
      <meta name="language" content={metadata.language} />
      <meta name="robots" content={metadata.robots} />
      <meta name="theme-color" content={metadata.themeColor} />
      <link rel="icon" type="image/png" href={metadata.icon} />
    </Head>
}

export default AppHead