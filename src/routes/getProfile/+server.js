export const GET = async (token) => {
	console.log("get user")
	const resp = await fetch("https://api.spotify.com/v1/me", {
		method:"GET", 
		headers:  {
			"Authorization": `Bearer ${token}`
		}
	})

	return resp.json()
}