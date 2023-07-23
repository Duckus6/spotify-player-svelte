import { redirect } from '@sveltejs/kit';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private'
const port = 5173

export const GET = async ({ request, url, cookies }) => {
	const code = url.searchParams.get("code") || null;
	const state = url.searchParams.get("state") || null;
	const authOptions =  {
		method:"POST",
		headers: {
			'Authorization': 'Basic ' + (Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')),
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		json:true,
		body: new URLSearchParams({
				code: code, 
				redirect_uri: `http://localhost:${port}/callback`, 
				grant_type: 'authorization_code',
			})

	}
	// console.log(authOptions)
	console.log(code,state)
	console.log(request.url)
	const resp = await fetch(`https://accounts.spotify.com/api/token?`,authOptions)
		.then(response => response.json())
	console.log(JSON.stringify(resp))
	const access_token = resp.access_token,
	refresh_token = resp.refresh_token;
	const options = {
		headers: new URLSearchParams({"Authorization": `Bearer ${access_token}`})
	}
	if (!resp.access_token) {
		throw error(404, {
			message: `INVALID TOKEN`
		})
	}
	cookies.set("AuthorizationToken", access_token, {
		httpOnly:true,
		path: "/",
		sameSite:"strict",
		maxAge:resp.expires_in,
	})
	console.log("woooo")
	console.log(cookies.get("AuthorizationToken"))
	throw redirect(302,"/")
	///https://dev.to/theether0/sveltekit-changes-session-and-cookies-enb
	///https://github.com/joysofcode/sveltekit-auth-cookies/blob/main/src/routes/%2Blayout.server.ts

}