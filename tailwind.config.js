/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './resources/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    './resources/**/*.blade.php'
  ],
  theme: {
    extend: {
      colors: {
        'gray-primary': '#e5e5e5',
        'gray-second': '#f5f6f8',
        'metalic-primary': '#30405a',
        'metalic-second': '#1f2d47',
        'orange-primary': '#fe6602'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
};

