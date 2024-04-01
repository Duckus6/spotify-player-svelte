export const GET = async ({url}) => {
	console.log("get tracks")
	const params = paramsToObject(url.searchParams.entries())
	console.log(params)
	const {auth,uid,pid} = params
	console.log("get tracks")
	// console.log({token,uid,pid})
	const resp = await fetch(`https://api.spotify.com/v1/users/${uid}/playlists/${pid}/tracks?offset=${0}&limit=10`, {
		method:"GET",
		headers:  {
			"Authorization": `Bearer ${auth}`
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
//move somewhere
function paramsToObject(entries) {
	const result = {}
	for(const [key, value] of entries) { // each 'entry' is a [key, value] tupple
	  result[key] = value;
	}
	return result;
  }