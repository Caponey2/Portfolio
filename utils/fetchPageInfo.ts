import { PageInfo } from '../typings';

// export const getStaticPaths = async () => {
// 	const res = await fetch(
// 		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
// 	);
// 	const data = await res.json();

// 	const paths = data.map((page: { id: { toString: () => any } }) => {
// 		return {
// 			params: { id: page.id.toString() },
// 		};
// 	});
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };

export const fetchPageInfo = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
	);

	const data = await res.json();
	const pageInfo: PageInfo = data.pageInfo;

	console.log('fetching', pageInfo);

	return pageInfo;
};
