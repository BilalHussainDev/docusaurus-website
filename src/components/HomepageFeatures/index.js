import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
	{
		title: "Feature 1",
		Svg: require("@site/static/img/feature-1.svg").default,
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</>
		),
	},
	{
		title: "Feature 2",
		Svg: require("@site/static/img/feature-2.svg").default,
		description: (
			<>
				Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur.
			</>
		),
	},
	{
		title: "Feature 3",
		Svg: require("@site/static/img/feature-3.svg").default,
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</>
		),
	},
	{
		title: "Feature 4",
		Svg: require("@site/static/img/feature-4.svg").default,
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</>
		),
	},
	{
		title: "Feature 5",
		Svg: require("@site/static/img/feature-5.svg").default,
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</>
		),
	},
	{
		title: "Feature 6",
		Svg: require("@site/static/img/feature-6.svg").default,
		description: (
			<>
				Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
