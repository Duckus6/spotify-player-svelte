import { getItems } from "../api/getItems"

export const GET = async (token,id) => {
	console.log("get playlists")
	console.log(token,id)
	const url = `https://api.spotify.com/v1/users/${id}/playlists`
	
	const items = getItems(url,token)
	return items
}