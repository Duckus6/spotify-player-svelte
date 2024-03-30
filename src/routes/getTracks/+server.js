export const GET = async ({request, searchParams}) => {
	const {token,uid,pid} = searchParams
	console.log("get tracks")
	console.log({token,uid,pid})
	const resp = await fetch(`https://api.spotify.com/v1/users/${uid}/playlists/${pid}/tracks?offset=${off}&limit=10`, {
		method:"GET",
		headers:  {
			"Authorization": `Bearer ${token}`
		},
		
	}).then(resp => resp.json())
	
	console.log(resp)
	//maybe a generic "get next"?
	const {limit,total,offset} = resp

	const newOffset = (limit+offset)
	let {items} = resp
	//not implementing untiul some sort of cache shit
	if (false) {
	// if ((total-newOffset) >0) {
		console.log(newOffset)
		const newItems = await GET(token,id,newOffset)
		console.log(items.length, newItems.length)
		items = items.concat(newItems)
	// } else {
	}
	return items
}