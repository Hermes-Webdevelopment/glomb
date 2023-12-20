import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import '../styles/fonts.css'
import "swiper/css";

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

export default MyApp
