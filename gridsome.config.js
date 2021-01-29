module.exports = {
  siteName: 'Sarmat | Front-end Developer',
  siteUrl: '',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/**/*.md',
        typeName: 'Portfolio'
      }
    }
  ]
};
