export default async function Page({
	params,
}: {
	params: { bookId: string[] };
}) {
	const getParam = await params;
	return <h1>bookId: {getParam.bookId.join("/")}</h1>;
}
