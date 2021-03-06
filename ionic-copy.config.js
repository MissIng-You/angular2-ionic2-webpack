
// https://www.npmjs.com/package/fs-extra

module.exports = {
  include: [
    {
      src: 'src/mobile/assets/',
      dest: 'www/assets/'
    },
    {
      src: 'src/mobile/index.html',
      dest: 'www/index.html'
    },
    {
      src: 'node_modules/ionic-angular/polyfills/polyfills.js',
      dest: 'www/build/polyfills.js'
    },
    {
      src: 'node_modules/ionicons/dist/fonts/',
      dest: 'www/assets/fonts/'
    },
  ]
};
