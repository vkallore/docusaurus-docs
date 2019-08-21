# Setup Docusaurus

## install the Docusaurus

```
npm install --global docusaurus-init
```

## Scaffold the Site

Execute the `docusaurus-init` command in your terminal.

```
docusaurus-init
```

## Publish the site

Change the `website/siteConfig.js`

```
const siteConfig = {
  ...
  url: 'https://USERNAME.github.io', // Replace USERNAME with your GitHub username.
  baseUrl: '/docusaurus-docs/', // The name of your GitHub project.
  projectName: 'docusaurus-docs',  // The name of your GitHub project. Same as above.
  organizationName: 'USERNAME' // Your GitHub username.
  ...
}
```

Build the app

```
npm run build
```

```
$ GIT_USER=<USERNAME> CURRENT_BRANCH=master npm run publish-gh-pages
```

## Versioning

### Releasing a Version

```
npm run examples versions
```

Which creates a `versions.js` file, which will be used to list down all the versions of docs in the project.

Run following command to create the version `1.0.0`. It creates the versioned files of `docs` (and `sidebars`).

```
npm run version 1.0.0
```

Currently the versioned files are frozen and changes on site won't reflect.

### Next Version

To access the changed content, add `next` in the URL like,

```
http://localhost:3000/docs/admin-panel # 1.0.0
http://localhost:3000/docs/next/admin-panel # Changed content

http://localhost:3000/docs/ # 1.0.0
http://localhost:3000/docs/next # Changed content
```
