import Head from 'next/head'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
					integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
					crossOrigin="anonymous"
				/>
				<link rel="stylesheet" href="/static/css/index.css" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
