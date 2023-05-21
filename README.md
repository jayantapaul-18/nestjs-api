## Description

This is API project develop with [Nest](https://github.com/nestjs/nest) framework/TypeScript.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Development

```bash
pre-commit run --all-files
cz c
git commit -m 'feat: new api'
git push origin main --force

```

## Update NPM Packages

```bash
npm i -g npm-check-updates
ncu -u
npm install
```

## Release - standard-version

`Run the below command to create a new release CHANGELOGS`

```bash
npm install --save-dev standard-version
npm install --save-dev commitizen
npx commitizen init cz-conventional-changelog --save-dev --save-exact
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/config-conventional @commitlint/cli
# Install Husky - Husky improves commits and more
npm install husky --save-dev
# Activate hooks
npx husky install
# Add hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
# run
npm run commit
npm run release
git push --follow-tags origin main && npm publish
```

`To Bypass hooks`

```bash
We can bypass pre-commit and commit-msg hooks using Git -n/--no-verify option:

git commit -m "my no commit" --no-verify
```

# Request & Response

```bash

curl --location 'http://localhost:3003/health
```

## Docker Build

```bash
❯ docker build -t nestjs-api .
```

## Code Structure

```
tree -L 1
.
├── CHANGELOG.md
├── CODEOWNERS
├── Dockerfile
├── README.md
├── REQUEST.http
├── commitlint.config.js
├── coverage
├── dist
├── nest-cli.json
├── node_modules
├── package-lock.json
├── package.json
├── prepare.js
├── src
├── test
├── tsconfig.build.json
└── tsconfig.json
```

## License

Nest is [MIT licensed](LICENSE).
