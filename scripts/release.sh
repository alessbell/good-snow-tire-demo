#!/usr/bin/env bash
# Original script: https://github.com/apollo-elements/apollo-elements/blob/main/scripts/release.sh

if [ -f .changeset/pre.json ]; then
  npx changeset pre exit
else
  echo "Not in prerelease mode"
fi

npm run build
npx changeset publish