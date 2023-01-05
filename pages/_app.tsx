import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../components';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
