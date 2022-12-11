module.exports = {
	plugins: [
		require("prettier-plugin-svelte"),
		require("prettier-plugin-tailwindcss"), // Must come last
	],
	tailwindConfig: "./tailwind.config.cjs",
};
