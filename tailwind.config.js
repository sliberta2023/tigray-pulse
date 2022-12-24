/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/ui/tigray-pulse-app/src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js/jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
