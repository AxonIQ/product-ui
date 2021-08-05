# @initializr package

This is the frontend for the AxonIQ initializr. 

## Installation
```pnpm install```

Make sure you have `pnpm` installed globally (you can check out how to do it [here](https://pnpm.io/installation).

## Running the dev build
```pnpm dev```

Running this command will start the application on `localhost:5000` (or a random port if port `5000` is busy).
The API used, will be the one deployed at `https://start.dev.axoniq.net/`.

## Running the local dev build

```pnpm dev:local```

If you have the initializr backend running locally, and want to do some frontend development, you should run this command.
The API used will be the one running on your local machine, on `'http://localhost:8080/'`.

## Creating the build

Every push to the `master` branch will generate an artifact with the initializr build. This build is downloaded and unpacked during the maven deploy.
If you want to manually generate a build in the `public` folder, just run:
```pnpm build```
