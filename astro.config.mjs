// @ts-check

import node from '@astrojs/node';
import { defineConfig } from 'astro/config';

// const { SITE_BASE } = import.meta.process.env.NODE_ENV, process.cwd(), '')
const SITE_BASE = "/astro-store";

// https://astro.build/config
export default defineConfig({
	// prefetch: true,
	output: 'server',

	site: 'https://hintzmann.github.io',
	base: SITE_BASE || '',

	adapter: node({
		mode: 'standalone',
	}),

	image: {
		domains: ["localhost"],
		remotePatterns: [{ protocol: "https" }]
	},

	build: {
		inlineStylesheets: 'always'
	}
});