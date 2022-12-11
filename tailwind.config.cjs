module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			animation: {
				tilt: "tilt 10s infinite linear",
			},
			keyframes: {
				tilt: {
					"0%, 50%, 100%": { transform: "rotate(0deg)" },
					"25%": { transform: "rotate(5deg)" },
					"75%": { transform: "rotate(-5deg)" },
				},
			},
			fontFamily: {
				sans: [
					"-apple-system",
					"BlinkMacSystemFont",
					"Inter var",
					"ui-sans-serif",
					"system-ui",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"sans-serif",
				],
				//mono: ["JetBrainsMono"],
			},
			boxShadow: {
				glow: "0 0 20px #29d, 0 0 10px #29d",
			},
		},
	},
	plugins: [],
};
