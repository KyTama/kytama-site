export const prerender = false;

export function GET() {
	return new Response('google-site-verification: google6f6de0ae3c4020f0.html', {
		headers: {
			'Content-Type': 'text/html; charset=utf-8'
		}
	});
}
