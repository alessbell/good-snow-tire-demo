#!/usr/bin/env bash

[ ! -f .changeset/pre.json ] \
  && npx changeset pre enter beta \
  || echo 'Already in pre mode'

# run a versioning script which calls `npm i` to also update lockfile
npm run ci:version
git add .
git commit -m "chore: version prerelease packages"
