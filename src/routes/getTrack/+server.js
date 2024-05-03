import { json } from '@sveltejs/kit'

export const GET = async ({url}) => {
	console.log("get tracks")
	const params = paramsToObject(url.searchParams.entries())
	console.log(params)
	const {auth,uid,pid} = params
	console.log("get tracks")
	// console.log({token,uid,pid})
	const resp = await fetch(`https://api.spotify.com/v1/users/${uid}/playlists/${pid}`, {
		method:"GET",
		headers:  {
			"Authorization": `Bearer ${auth}`
		},
		
	}).then(resp => resp.json())
	
	return resp
}
//move somewhere
function paramsToObject(entries) {
	const result = {}
	for(const [key, value] of entries) { // each 'entry' is a [key, value] tupple
	  result[key] = value;
	}
	return result;
  }