import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			fallback: '404.html',
			precompress: false,
			strict: false
		}),
		paths: {
			base: '/pokedex-det-r3'
		}
	}
};
