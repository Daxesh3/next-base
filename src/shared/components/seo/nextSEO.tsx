import { NextSeo } from 'next-seo';
import React from 'react';

const nextSEO = (props: any) => {
	return (
		<>
			<NextSeo
				nofollow={props?.is_no_follow}
				noindex={props?.is_no_index}
				title={props?.title}
				description={props?.description}
				twitter={{
					cardType: 'summary_large_image'
				}}
				openGraph={{
					description: props?.og_description ?? '',
					title: props?.og_title ?? '',
					locale: 'en_US',
					type: 'website',
					site_name: props?.og_site_name ?? '',
					url: props?.og_url ?? '',
					defaultImageWidth: 1200,
					defaultImageHeight: 630,
					images: [
						{
							url: props?.og_image_url,
							width: props?.og_image_width,
							height: props?.og_image_height
						}
					]
				}}
			/>
		</>
	);
};

export default nextSEO;
