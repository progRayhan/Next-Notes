import '../styles/globals.css'
import '../styles/Tailwind.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
  </div>
}

export default MyApp
