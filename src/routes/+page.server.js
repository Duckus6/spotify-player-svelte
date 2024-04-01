import { goto } from "$app/navigation";
import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
	if (locals.playlists) {
		return {
			playlists: locals.playlists,
			auth: locals.auth
		}
	}
}
export const actions = {
	logout: async (event) => {
		event.cookies.delete("AuthorizationToken", {path: "/"})
		event.locals = null
		throw redirect(303,'/')
	}
}