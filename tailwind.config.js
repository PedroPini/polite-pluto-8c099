module.exports = {
  purge: {
    content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
      options: {
        whitelist: [],
      }
  },
  theme: {
    fontFamily: {
        body: ['Roboto', 'sans-serif'],
        display: ['Rubik', 'sans-serif'],
    },
    extend: {
        colors: {
            primary: '#FF7F11',
            secondary: '#3FA7D6',
            tertiary: '#2E3532',
            error: '#FF6363',
            white: '#FFFFFF',
            lightGray: '#3FA7D6',
            gray: '#F3F3F3',
            transparent: 'transparent'
        }
    },
  },
  variants: {},
  plugins: [],
}
