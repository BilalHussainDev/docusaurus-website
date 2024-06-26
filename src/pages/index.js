import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Logo from "@site/static/img/react-logo.svg";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className={clsx("hero", styles.heroBanner)}>
			<div className="container">
				<div className="text--center">
					<Logo className={styles.logo} role="img" />
				</div>

				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>

				<p className={clsx("hero__subtitle", styles.heroSubtitle)}>
					<Translate>
						The library for web and native user interfaces
					</Translate>
				</p>

				<div className={styles.buttons}>
					<Link
						className="button button--primary button--lg"
						to="/docs/category/quick-start"
					>
						<Translate>Learn React</Translate>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	return (
		<Layout description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
			<HomepageHeader />

			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
