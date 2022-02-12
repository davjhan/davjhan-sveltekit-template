const theme = require('broth-css/dist/tailwind.theme.cjs')
module.exports = {
    content: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}',],
    theme: {
        ...theme,
    }
}