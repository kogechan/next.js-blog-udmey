import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout, { siteTitle } from "@/components/Layout";
import utilsStyle from "../styles/utils.module.css"
import Link from "next/link";
import { getPostsData } from "@/lib/post";

export async function getStaticProps() {
  const allPostsData = getPostsData()
  console.log(allPostsData)

  return {
    props: {
      allPostsData
    }
  }
}

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyle.headingMd}>
        <p>これから這い上がっていきます。見返してやります。</p>
      </section>

      <section className={`${utilsStyle.headingMd} ${utilsStyle.padding1px}`}>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={thumbnail} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`} className={utilsStyle.boldText}>
                {title}
              </Link>
              <br />
              <small className={utilsStyle.lightText}>
                {date}
              </small>
            </article>
          ))}
        </div>
      </section>


    </Layout>
  )
}

export default Home