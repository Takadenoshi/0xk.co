import redirects from './redirects.json';
import { home, error } from './template.js';

const cache = caches.default;

const contentHTML = { "Content-Type": "text/html" };
const cache30min = { "Cache-Control": "public, max-age=1800" };
const cache1month = { "Cache-Control": "public, max-age=2592000" };

function respondHTML(request, body, status = 200, headers) {
	const response = new Response(body, { status, headers: { ...contentHTML, ...headers } });
	cache.put(request, response.clone());
	return response;
}

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname.slice(1);
		if (path == "") {
			return respondHTML(request, home, 200, cache1month);
		}
		const target = redirects[path];
		if (target) {
			const response = new Response(null, {
				status: 307,
				headers: {
					Location: target,
					...cache1month,
				}
			});
			cache.put(request, response.clone());
			return response;
		}
		return respondHTML(request, error, 404, cache30min);
	},
};
