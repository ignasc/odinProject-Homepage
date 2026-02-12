# Webpack template

A generic webpack template for html, css and javascript. This is the template that I will be using for my personal projects and will update it as needed.

### Important notes

Make sure to modify the command line of `"deploy"` script to refer to correct github branch used for production. Default set is `gh-pages`.

### npm scripts

Below are the scripts that have been added to `package.json` file

`"formatTest"`: runs `prettier` check on all files and `eslint` check on all files in `src` folder (no modifications).

`"formatFix"`: runs `eslint` with `--fix` option to modify files to comply with the set formatting rules.

`"formatCheck"`: runs `prettier` with `--check` option to check if code is formated to set options.

`"formatWrite"`: runs `prettier` with `--write` option to format code to set options.

`"prebuild"`: runs `eslint` check automatically before building production version app.

`"build"`: builds production version app into `dist` folder.

`"start"`: starts a dev server with the developer version app.

`"deploy"`: this script does the following steps in order:

- checks out `gh-pages` branch,
- merges `main` branch into `gh-pages` branch,
- runs `build` script (see above of what it does),
- adds `dist` folder contents to be committed,
- commits `dist` folder contents,
- pushes the commit to remote repository,
- switches back to `main` branch.
