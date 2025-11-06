import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "NeusID - Personal Portofolio"}
                </title>
                <link rel='icon' href='/assets/images/NID.svg'/>
            </Head>
        </>
    )
}

export default PageHead