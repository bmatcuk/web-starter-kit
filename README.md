# web-starter-kit
A simple starting-point application utilizing the newest versions of webpack,
babel, react, and a whole lot more.

* **Isomorphic:** Render pages on the server and in the client. Fully static
  content can be pre-rendered into files to increase server-side performance.
* **Hot Reload:** Increase development productivity with hot reload.
* **Newest Libraries:** Using the newest versions of webpack, babel, react, and
  more

## Getting Started
Here are some pointers if you want to use this project as the starting point
for a project of your own. The first thing you'll want to do is fetch the
project:

```bash
git clone git@github.com:bmatcuk/web-starter-kit.git my-project
cd my-project
```

## Command Line
Start hot reloading development server using browsersync with:

```bash
npm run start:dev
```

Run a build for production:

```bash
npm run build
```

Run a production server (using express)... you'll need to build first:

```bash
npm start
```

## Making Changes
All of the files you'll want to change are in the `src` directory. The `lib`
directory contains some utility code for building and running an express
server.

## Configuration
All of the configuration options can be found in the `config.json` file in the
root of the project.

* **publicPath**: If your site will be hosted in a subdirectory (such as
  `http://example.com/subdirectory`) then you'll want to set the publicPath to
  the subdirectory (`/subdirectory` in this example). If your site will be
  hosted at the root (like `http://example.com/`) then you should set publicPath
  to `/`.
* **staticPaths**: Static paths to crawl (see [#building-static-files](Building
  Static Files) below. If you are going to host under a subdirectory (see
  publicPath), your staticPaths will include this subdirectory.

## Building Static Files
By default, when you run `npm run build`, the build will attempt to pre-render
any files that can be pre-rendered. It does this by starting up an express
server and visiting every URL mentioned in the `staticPaths` variable in
`config.json`. For each file rendered this way, the script parses the HTML to
find new relative paths to crawl. Any path ending in a `/` will be created as a
subdirectory with an `index.html` file. Any path that does not contain a file
extension will automatically append a `.html`.
