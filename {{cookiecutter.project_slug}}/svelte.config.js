/** @type {import('@sveltejs/kit').Config} */
import node from "@sveltejs/adapter-node";

const config = {
	kit: {
		adapter: node({ envPrefix: { port: process.env.PORT } }),
		vite: () => ({
			server: {
				proxy: {
					'/api': {
						target: 'http://localhost:8000',
						changeOrigin: true
					}
				}
			}
		})
	}
};

export default config;
