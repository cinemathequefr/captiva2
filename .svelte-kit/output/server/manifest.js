export const manifest = {
	appDir: "_app",
	assets: new Set(["android-icon-144x144.png","android-icon-192x192.png","android-icon-36x36.png","android-icon-48x48.png","android-icon-72x72.png","android-icon-96x96.png","apple-icon-114x114.png","apple-icon-120x120.png","apple-icon-144x144.png","apple-icon-152x152.png","apple-icon-180x180.png","apple-icon-57x57.png","apple-icon-60x60.png","apple-icon-72x72.png","apple-icon-76x76.png","apple-icon-precomposed.png","apple-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon-96x96.png","favicon.ico","fonts/ibm-plex-mono-v6-latin-ext_latin-300.woff","fonts/ibm-plex-mono-v6-latin-ext_latin-300.woff2","fonts/ibm-plex-mono-v6-latin-ext_latin-500.woff","fonts/ibm-plex-mono-v6-latin-ext_latin-500.woff2","fonts/ibm-plex-mono-v6-latin-ext_latin-600.woff","fonts/ibm-plex-mono-v6-latin-ext_latin-600.woff2","fonts/ibm-plex-mono-v6-latin-ext_latin-700.woff","fonts/ibm-plex-mono-v6-latin-ext_latin-700.woff2","fonts/ibm-plex-mono-v6-latin-ext_latin-regular.woff","fonts/ibm-plex-mono-v6-latin-ext_latin-regular.woff2","fonts/ibm-plex-sans-v8-latin-ext_latin-300.woff","fonts/ibm-plex-sans-v8-latin-ext_latin-300.woff2","fonts/ibm-plex-sans-v8-latin-ext_latin-300italic.woff","fonts/ibm-plex-sans-v8-latin-ext_latin-300italic.woff2","fonts/ibm-plex-sans-v8-latin-ext_latin-600.woff","fonts/ibm-plex-sans-v8-latin-ext_latin-600.woff2","fonts/ibm-plex-sans-v8-latin-ext_latin-600italic.woff","fonts/ibm-plex-sans-v8-latin-ext_latin-600italic.woff2","fonts/ibm-plex-sans-v8-latin-ext_latin-italic.woff","fonts/ibm-plex-sans-v8-latin-ext_latin-italic.woff2","fonts/ibm-plex-sans-v8-latin-ext_latin-regular.woff","fonts/ibm-plex-sans-v8-latin-ext_latin-regular.woff2","fonts.css","global.css","manifest.json","ms-icon-144x144.png","ms-icon-150x150.png","ms-icon-310x310.png","ms-icon-70x70.png"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".woff":"font/woff",".woff2":"font/woff2",".css":"text/css",".json":"application/json"},
	_: {
		entry: {"file":"start-624a0598.js","js":["start-624a0598.js","chunks/index-c3a06d7b.js","chunks/index-b61d425d.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "calendrier",
				pattern: /^\/calendrier\/?$/,
				names: [],
				types: [],
				path: "/calendrier",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "films",
				pattern: /^\/films\/?$/,
				names: [],
				types: [],
				path: "/films",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				path: "/login",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
