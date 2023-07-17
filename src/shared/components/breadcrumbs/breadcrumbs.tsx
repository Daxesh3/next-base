import React from 'react';
import Link from 'next/link';

interface IBreadCrumbsProps {
	data: Record<string, any>;
	title?: string;
	text?: string;
	linkText?: { name: string; link: string };
}

const Breadcrumbs: React.FC<IBreadCrumbsProps> = (props) => {
	const { text, title, data, linkText } = props;
	return (
		<div className='full--width col-lg-6 col-md-6 col-sm-6'>
			<p className='text--capitalize' data-testid='breadcrumb-title'>
				{props.title}
			</p>
			<ol className='breadcrumb no-margins'>
				<Link href='/' className='main-menu active mr--10 text--black'>
					<strong className='font-size--25 line-height--22 font--regular'>{text || title}</strong>
				</Link>
				<span>&#8725;</span>
				{data.map((obj: Record<string, any>) => (
					<li className='link-list ml--10' key={obj.name}>
						<Link
							href={obj.link}
							className='breadcrumb-name text--capital font-size--25 line-height--22 font--semi-bold text--capitalize'
						>
							{obj.name}
						</Link>
					</li>
				))}
				{linkText && linkText.name && (
					<a href={linkText.link} target='blank'>
						({linkText.name})
					</a>
				)}
			</ol>
		</div>
	);
};

export default Breadcrumbs;
