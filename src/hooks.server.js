import { GET } from './routes/getProfile/+server'
import { GET as GETPLAYLISTS } from './routes/getPlaylists/+server'
const getUser = async (token) => {
	console.log(token)
	return await GET(token)
}
const getPlaylists = async (token, id) => {
	return await GETPLAYLISTS(token, id)
}
export const handle = async ({ event, resolve }) => {
	const AuthorizationToken = event.cookies.get('AuthorizationToken')
	
	if (!AuthorizationToken) {
	
		return await resolve(event)
	}


	console.log(AuthorizationToken, 321321)
	if (!event.locals.auth && !!AuthorizationToken) { event.locals.auth = AuthorizationToken }

	if (event.locals.auth) {
		const user = await getUser(event.locals.auth)
		console.log(user, 132)
		event.locals.user = user
	} if (event.locals.user) {
		const playlists = await getPlaylists(event.locals.auth, event.locals.user.id)
		event.locals.playlists = playlists
	}


	return await resolve(event)
}