#!/usr/bin/env bash
# Original script: https://github.com/apollo-elements/apollo-elements/blob/main/scripts/prerelease.sh

# TODO: change next to beta
[ ! -f .changeset/pre.json ] \
  && npx changeset pre enter next \
  || echo 'Already in pre mode'

npx changeset version

if [[ $(git diff --stat) != '' ]]; then
  git add .
  git commit -m "chore: version prerelease packages"
else
  echo 'Branch is clean, nothing to commit'
fi