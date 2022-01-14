const { exists } = require('laravel-mix/src/File');
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      orange: colors.orange,
      php: '#4F5D95',
      html: '#e44b23',
      css: '#563d7c',
      go: '#375eab',
      js: '#f1e05a',
      aws: '#ec912d',
      github: '#4183c4',
      docker: '#002c66',
      vagrant: '#2e71e5',
    },
    fontFamily: {
      body: [
        'Inter',
        'ヒラギノ角ゴ ProN W3',
        'HiraKakuProN-W3',
        '游ゴシック',
        'Yu Gothic',
        'メイリオ',
        'Meiryo',
        'Verdana',
        'Helvetica',
        'Arial',
        'sans-serif'
      ],
      logo: [
        'Playfair Display',
      ],
    },
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
