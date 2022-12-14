import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="description"
                    content="I can develop both the front-end and back-end of a web application. I am comfortable working with a wide range of technologies and am always willing to learn new ones.Here is a precise description of my awesome webpage."
                />
                <meta
                    name="keywords"
                    content="Naman Arora Web Developer Website Portfolio"
                />
                <link rel="icon" type="image/svg" href="/logo.svg" />

                {/* Google search console */}
                <meta
                    name="google-site-verification"
                    content="f1xJCJmDE2FV3kTuVZ5ETtGLOspPpCivXtIRv5HK30Y"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
