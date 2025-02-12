import Head from "next/head"
import styles from "./layout.module.css"
import utilsStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "Shin code";
export const siteTitle = "Next.js blog"

const Layout = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img src="/images/profile.png" className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`} />
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <img src="/images/profile.png" className={`${utilsStyles.borderCircle}`} />
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <Link href="/">←ホームへ戻る</Link>
            )}
        </div>
    )
}

export default Layout