import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Gridx - Personal Portfolio HTML Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead