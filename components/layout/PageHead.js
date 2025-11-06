import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "NeusID - Personal Portofolio"}
                </title>
            </Head>
        </>
    )
}

export default PageHead