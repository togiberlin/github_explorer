# GitHub Explorer
I spent couple evenings learning VueJS and decided to put my skills to a test.
This project allows you to browse GitHub and bookmarks repos and share them via e-mail.

## Before You Start
Before you start, it is highly recommended to set up a personal
[GitHub OAuth2 access token](https://docs.github.com/en/free-pro-team@latest/rest/overview/other-authentication-methods#basic-authentication),
so that GitHub does not [rate limit](https://docs.github.com/en/free-pro-team@latest/rest/reference/rate-limit) HTTPS requests. Copy and paste your GitHub access token to `./config.json`.
For an example template, see `./config.example.json`. Without access token, the app might not work as expected!

## Detailed Information
For more background infos about this project, please check the [wiki](https://github.com/togiberlin/github_explorer/wiki).

## Getting Started
```bash
npm install
```

### Running Client and Server
```bash
npm run start # check your browser at http://localhost:8080
```

### Compiles and minifies for production
```bash
npm run build
```

### Run your unit tests
```bash
npm run test:unit         # runs Jest
```

### Run your end-to-end tests
```bash
npm run test:e2e          # starts Cypress.io and backend server
npm run test:e2e:headless # command line only
```

### Lints and fixes files
```bash
npm run lint              # uses ESLint with the AirBnB style guide
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
