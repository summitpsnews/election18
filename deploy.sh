git reset HEAD .
./regenerate-author-pages.sh
git add authors/*
git commit -m "Updated author pages"
git stash --include-untracked
jekyll build
now ./_site -A ../now-prod.json
now alias -A now-prod.json
now rm summitpsnewsmagazine --safe --yes
git stash pop