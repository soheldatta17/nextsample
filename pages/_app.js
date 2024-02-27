import Bar from "./navbar"
export default function MyApp({ Component, pageProps }) {
    console.log("Loading")
    return (
        <>
            <Bar />
            <Component {...pageProps} />
        </>
    )
}
