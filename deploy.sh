git stash
jekyll build
now ./_site -A now-prod.json
now alias -A now-prod.json
now rm summitpsnewsmagazine --safe --yes
git stash pop