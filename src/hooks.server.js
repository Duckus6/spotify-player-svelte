export const handle = async ({event,resolve}) => {
	const AuthorizationToken = event.cookies.get('AuthorizationToken')
	
	console.log(AuthorizationToken)
	if (!AuthorizationToken){
		return await resolve(event)
	}
	event.locals.auth = AuthorizationToken
	return await resolve(event)
}