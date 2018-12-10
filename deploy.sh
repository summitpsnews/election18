git stash
jekyll build
now ./_site -A now-prod.json
now alias -A now-prod.json
git stash pop