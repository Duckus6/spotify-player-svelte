import { redirect } from '@sveltejs/kit';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private'


const generateRandomString = (length) => {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};
//fetch('/api/posts')
export const GET = async () => {
	const scope = "streaming user-read-email user-read-private playlist-read-private playlist-read-collaborative";
	const state = generateRandomString(16);
	console.log("redirect")
	const auth_query_parameters = new URLSearchParams({
	  response_type: "code",
	  client_id: SPOTIFY_CLIENT_ID,
	  scope: scope,
	  redirect_uri: `http://localhost:5173/callback`,
	  state: state
	});
	throw redirect(301, `https://accounts.spotify.com/authorize/?${auth_query_parameters.toString()}`)


}