export const getItems = async (url, token,off=0) => {
	const resp = await fetch(`${url}?offset=${off}`, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${token}`
		},
	}).then(resp => resp.json())


	//maybe a generic "get next"?
	const { limit, total, offset } = resp

	const newOffset = (limit + offset)
	let { items } = resp
	if ((total - newOffset) > 0) {
		const newItems = await getItems(url, token, newOffset)
		items = items.concat(newItems)
		// } else {
		// 	console.log(newItems)
	}
	return items
}