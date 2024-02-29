import * as api from '$lib/api.js';
export async function load({ locals }) {
	if ((locals.user)) {
		return { user: (locals.user) }
	}
}

