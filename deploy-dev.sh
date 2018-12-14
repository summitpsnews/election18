./regenerate-author-pages.sh
jekyll build
now ./_site -A ../now-dev.json
now alias -A now-dev.json
now rm dev-summitpsnewsmagazine --safe --yes