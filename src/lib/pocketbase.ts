import PocketBase from 'pocketbase'
import { writable } from 'svelte/store'
import { browser } from '$app/environment'

export const POCKETBASE_URL = import.meta.env.VITE_POCKETBASE_URL || 'http://127.0.0.1:8090'

export const pb = new PocketBase(POCKETBASE_URL)

if (browser) {
	pb.authStore.loadFromCookie(document.cookie)
}

export const currentUser = writable(pb.authStore.record)

pb.authStore.onChange((_token, model) => {
	currentUser.set(model)
	if (browser) {
		document.cookie = pb.authStore.exportToCookie({
			httpOnly: false,
			sameSite: 'lax',
			secure: location.protocol === 'https:'
		})
	}
})
