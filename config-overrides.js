module.exports = config => {
    require('react-app-rewire-postcss')(config/*, options */)[
        plugins: loader => [
            require('postcss-preset-env')(),
            require('tailwindcss/nesting')(require('postcss-nesting')),
            require('autoprefixer'),
            require('tailwindcss')
        ]
     });
      return config;
  };