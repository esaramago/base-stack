import PocketBase from 'pocketbase'
import type { Handle } from '@sveltejs/kit'

const POCKETBASE_URL =
	process.env.POCKETBASE_INTERNAL_URL ||
	process.env.VITE_POCKETBASE_URL ||
	'http://127.0.0.1:8090'

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(POCKETBASE_URL)

	// Load auth state from request cookie
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

	try {
		// Refresh token if valid
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh()
		}
	} catch {
		// Clear auth state on error
		event.locals.pb.authStore.clear()
	}

	event.locals.user = event.locals.pb.authStore.record

	const response = await resolve(event)

	// Append auth cookie in response without overwriting other set-cookie headers
	response.headers.append(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({
			httpOnly: false,
			sameSite: 'lax',
			secure: process.env.NODE_ENV === 'production'
		})
	)

	return response
}
