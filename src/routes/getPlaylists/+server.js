export const GET = async (token,id,offset=0) => {
	console.log("get playlists")
	console.log(token,id)
	const resp = await fetch(`https://api.spotify.com/v1/users/${id}/playlists?offset=${offset}&limit=10`, {
		method:"GET",
		headers:  {
			"Authorization": `Bearer ${token}`
		},
		
	}).then(resp => resp.json())
	console.log(resp)
	if (!!resp.next) {
		GET(token,id,resp.offset)
	}

	return resp
}