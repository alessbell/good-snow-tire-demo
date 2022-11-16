#!/usr/bin/env bash
# Original script: https://github.com/apollo-elements/apollo-elements/blob/main/scripts/release.sh

if [ -f .changeset/pre.json ]; then
  npx changeset pre exit
  npx changeset version
  git add .
  git commit -m "Exit prerelease mode and version packages"
  npm run build
  npx changeset publish
  git push --follow-tags
else
  echo "Not in prerelease mode"
  npm run build
  npx changeset publish
fi