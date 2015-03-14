
Grunt
-----

Grunt has become an essential tool for demanding projects. Look through the Gruntfile.coffee for ideas for your own project.

Notable highlights:

- Gruntfile written in coffeescript
- Preprocessors such as coffeescript, sass /w compass, imagemin
- Package.json separates out development and product dependencies


Bower
-----

Bower has been something I've played around for a while. While its great at syncing down the latest resource packages such as bootstrap, fontawesome, it downloads the entire repository. One of the grunt automation I used often is  It auto-inserts the css and script tags in the layout file. The bloated files bower downloads conflicts /w sails-linker. For those who prefers to manually update the css/js links, bower is still a very useful package manager for you.

Git
---

This is essential to any collaborative project for both version control and deployment.

Notable highlights:
- putting .gitkeep in any empty folders, otherwise git won't sync them. This is important for the cache folder that Volt requires
- gitattributes Auto detect text files and perform LF normalization. This is important if you have both mac and window teammates working on the same project
- do not sync sourcemap files

NPM commands 
---

- sudo npm update 
- sudo npm install -g bower
- sudo npm install -g grunt
- npm init      // to create package.json
- npm install   // declare package.jsonand run this to download all dependancy 
- bower init    // to create bower.json
- npm install -g grunt-cli 
- npm install grunt-contrib-cssmin --save -dev
- npm install grunt-contrib-uglify --save -dev
- npm install grunt-contrib-watch --save -dev
