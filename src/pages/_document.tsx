import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" className='scroll-smooth'>
            <Head>
                <base target="_blank"></base>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>            
        </Html>
    )
}