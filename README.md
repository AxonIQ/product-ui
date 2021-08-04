# product-ui
A monorepo for the UI of AxonIQ products, built with [Svelte](https://svelte.dev/)

## Installation
This monorepo is made using `pnpm` workspaces. Please install `pnpm` globally first, and then run `pnpm install`, to install all the dependencies for the sub-packages.

You can read up on `pnpm` and how to install it [here](https://pnpm.io/installation).

## Packages:

### [@core](https://github.com/AxonIQ/product-ui/tree/master/packages/core)
This is a package containing core components, which is the basis for all our other packages. Changing anything in this package should trigger a re-build in all the other packages.

### [@initializr](https://github.com/AxonIQ/product-ui/tree/master/packages/initializr)
The frontend code for the initializr app.

### [@style-guide](https://github.com/AxonIQ/product-ui/tree/master/packages/style-guide)
The component style-guide. This is just a wrapper to demo the [@core](https://github.com/AxonIQ/product-ui/tree/master/packages/core) components. It deploys to netlify, so a change in implementation can be shared with the design team for further clarification.
