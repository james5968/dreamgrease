export default {
	/*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
	mode: 'spa',
	router: {
		base: '/'
	},
	/*
  ** Nuxt target
  ** See https://nuxtjs.org/apinpm run deploy
  /configuration-target
  */

	/*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
  ** Global CSS
  */
	css: [],
	/*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
	plugins: [
		'@/plugins/tilt.js'
	],
	/*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
	components: true,
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [],
	/*
  ** Nuxt.js modules
  */
	modules: [],
	/*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
	build: {
		publicPath: 'public/',
		/*
        ** You can extend webpack config here
        */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
					options: {
						fix: true
					}
				});
			}
		}
	}
};
