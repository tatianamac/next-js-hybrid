import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
	allPostsData
}: {
	allPostsData: {
		date: string
		title: string
		id: string
	}[]
}) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					A collection of words scribbled on speeding trains, in drafty hotel rooms, atop dimly-lit bars, on
					dewy park tables, in cacophonous coffee shops, with borrowed pens, on dying phones, on idle breaths.
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href="/posts/[id]" as={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}
