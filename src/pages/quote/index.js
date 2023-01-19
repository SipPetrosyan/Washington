import Head from "next/head";
import QuoteBanner from "@/components/Quote/QuoteBanner";

export default function Quote() {

    return (
        <>
            <Head>
                <title>Get Quote</title>
                <meta name="description" content="Get Quote"/>
            </Head>
            <main>
                <QuoteBanner />
            </main>
        </>
    )
}