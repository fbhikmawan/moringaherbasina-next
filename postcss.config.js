// postcss.config.js
module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    // Conditionally add PurgeCSS only for production builds
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            // Specify the paths to all of the template files in your project
            content: [
              './app/**/*.{js,jsx,ts,tsx}',
              './components/**/*.{js,jsx,ts,tsx}',
              './sections/**/*.{js,jsx,ts,tsx}',
            ],
            // Include any special characters you're using in your CSS class names
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            // Make sure CSS from external libraries is preserved
            safelist: ['your', 'specific', 'classes'],
          },
        ]
      : undefined,
  ].filter(Boolean),
};
