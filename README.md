#Three Hearts Farm

This is a blank project starter with the following technologies linked up: [Node.js](https://nodejs.org/), [React](http://facebook.github.io/react/), [React Router](http://rackt.github.io/react-router/), [Gulp](http://gulpjs.com/), [WebdriverIO](http://webdriver.io/)(for testing), [Material-UI](http://material-ui.com/#/), [Reflux](https://github.com/reflux/refluxjs), and  [Firebase](https://www.firebase.com/), [Docker](https://www.docker.com/).

To run just:
```bash
npm install
gulp
```

To run tests:
```bash
gulp test
```

##Folder Structure

```
config/
  config.js
dist/
  assets
    images/
    main.js
    index.html
    style.css
src/
  components/
    svgIcons/
  pages/
    static/
  sass/
  stores/
  utils/
    staticAssets/
    styles/
      components/
        svgIcons/
      pages/
        static/
      styles.jsx
    utl.jsx
  actions.jsx
  app.jsx
  main.jsx
  routes.jsx
test/
  components/
    svgIcons/
  pages/
    static/
  config.js
.gitigonre
gulpfile.js
package.json
README.md
```
####Gulpfile
The main <code>gulpfile.js</code> requires all files in the <code>/gulp-tasks</code> folder and defines the following tasks:
```bash
gulp
```
Runs build(concats jsx files in src and runs through babel), serve(runs livereload dev server), sass(concats scss files ), and watch (watches jsx and sass files for changes).
```bash
gulp production
```
Runs sass:production(concats scss files), build:production(concats, babelifys, and uglifys all jsx files in src), and serve:production(runs a basic node server).
```bash
gulp test
```
Runs run:test(runs all test files in the /test directory) and serve:test(starts a test server)
```bash
gulp create
```
Creates files from boilerplate.jsx files. Makes --component, --svgIcon, --page, --static, and --store files.  For component, svgIcon, page and static creates react boilerplate, test file, and style file.  For store creates just the store file.

####App Entry Point
```
app.jsx -> routes.jsx -> main.jsx
```
Note: Routing tree for application is in routes.jsx with all associated react-router set-up

####React Component Storage
'Pages' are stored in the <code>src/pages/</code> directory.  They are top level components made up of 'components' <code>src/components</code> and 'svgIcons' <code>src/components/svgIcons</code>.  'Static Pages' are held in <code>src/pages/static/</code> and the associated text is stored in <code>src/utils/staticAssets/</code>

####Utils folder
<code>src/utils/utl.jsx</code> holds constants, text, themes, and other assorted information like name constants and employee information

####Styles foler
<code>src/uitls/styles/styles.jsx</code> holds all style objects to modify default styles in Material-UI components.  Organized as a mirror of the component storage to reduce confusion.

####Test folder
<code>test/</code> holds all test files, one per component.  Organized in a mirror of the component storage to reduce confusion.

####Dockerfile
To create docker image on your local environment just run:
```bash
docker build -t jackzampolin/react-shell:latest https://github.com/jackzampolin/react-shell.git
```

To run the image in a container with properly forwarded ports just run:
```bash
docker run -d -p 8000:8000 --name react-shell jackzampolin/react-shell:latest
```
# brewlab
