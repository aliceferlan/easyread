export default async function Page({ params }: { params: { bookId: string } }) {
	const getParam = await params;
	if (getParam.bookId === "") {
		return <h1>bookId: empty</h1>;
	} else {
		return <h1>bookId: {getParam.bookId}</h1>;
	}
}
