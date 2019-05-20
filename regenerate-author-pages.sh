rm authors/*
grep -Pazohr "^(?<=authors:\n)(- .*?\n)+" . --exclude=_site --exclude=2018-09-27-markdown-demo.md | sort | uniq | sed '/^$/d; s/- //g' | while read name
do
    slug=$(echo "$name" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)
    sed -e "s/AUTHOR NAME/$name/" author-page-template.html > authors/$slug.html
done