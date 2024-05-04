# Mimic Logic Solver

This is a Vite 5 + React 18 single page web application designed to be used as a
solver for the game Mimic Logic. This version of the application is currently
hosted on https://mimiclogicsolver.com/.

## Development

### Requirements

- Node v20+

### Instructions

To install this application locally, clone the repository and in the repository
run `npm install` in the root directory.

To develop and see changes locally, run `npm run dev`. This will launch a local
dev server with hot reloading and will allow viewing the application locally as
well as immediately updating with any changes made locally to the application.

To run tests, run `npm run test`. Tests currently include linting using ESLint,
and a limited set of unit tests using [Vitest](https://vitest.dev/). To run
these test suites separately the following commands can be used:

- `npm run test:lint` to run linting
- `npm run test:unit` to run the Vitest unit test suites

To create a production build of the application, run `npm run build`. The output
will be placed in `./dist`.

To preview the production build locally, run `npm run preview`. **Warning**: The
you _must_ run `npm run build` prior to running this command, or the preview
will not function.
