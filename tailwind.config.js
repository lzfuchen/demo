/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx,vue}'],
  presets: [
    {
      corePlugins: {
        container: false
      }
    }
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      fontSize: {
        // 10 ~ 40 偶数递增
        ...new Array(16).fill('').reduce((obj, _, index) => ({ ...obj, [index * 2 + 10]: `${index * 2 + 10}px` }), {}),
        ...[13, 15, 25, 35].reduce((obj, item) => ({ ...obj, [item]: `${item}px` }), {})
      },
      colors: {
        primary: '#1890ff',
        warning: '#f5222d',
        error: '#f5222d'
      }
    },
    spacing: {
      // 0 ~ 50 偶数递增
      ...new Array(26).fill('').reduce((obj, _, index) => ({ ...obj, [index * 2]: `${index * 2}px` }), {}),
      // 5的整数倍  5 15 25 35 45 55 65 75 85 95
      ...new Array(10).fill('').reduce((obj, _, index) => ({ ...obj, [index * 10 + 5]: `${index * 10 + 5}px` }), {}),
      // 60 ~ 200 10的整数倍 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200
      ...new Array(15).fill('').reduce((obj, _, index) => ({ ...obj, [index * 10 + 60]: `${index * 10 + 60}px` }), {}),
      px: '1px',
      unset: 'unset'
    },
    borderRadius: {
      ...new Array(10).fill('').reduce((prev, _, index) => ({ ...prev, [index * 2]: `${index * 2}px` }), {})
    }
  },
  plugins: []
}
