/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
  
	daisyui: {
    themes: ["emerald"],
  },

	plugins: [
	require("@tailwindcss/typography"),
	require("daisyui")]
};

module.exports = config;
