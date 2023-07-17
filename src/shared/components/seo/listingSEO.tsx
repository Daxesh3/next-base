import React from 'react';

import { ISEO, IMetaData } from 'shared/interface';
import NextSeo from './nextSEO';

const Seo = ({ description, title, canonicalUrl }: ISEO): JSX.Element => {
	const getMetaTitleDescription = (): IMetaData[] => {
		return [
			{
				name: 'title',
				content: title
			},
			{
				name: 'og:title',
				content: title
			},
			{
				name: 'description',
				content: description
			},
			{
				property: 'og:description',
				content: description
			},
			{
				name: 'og:site_name',
				content: 'next-base'
			},
			{
				name: 'author',
				content: 'next-base'
			}
		];
	};
	return (
		<NextSeo
			title={title}
			description={description}
			canonical={canonicalUrl}
			metaData={getMetaTitleDescription()}
		/>
	);
};

export default Seo;
