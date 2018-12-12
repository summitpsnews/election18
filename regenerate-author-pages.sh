rm authors/*
grep -Pazohr "^(?<=authors:\n)(- .*?\n)+" _posts --exclude=2018-09-27-markdown-demo.md | sort | uniq | sed '/^$/d; s/- //g' | while read name
do
    slug=$(echo "$name" | iconv -t ascii//TRANSLIT | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z)
    cp author-page-template.html authors/$slug.html
    sed -i -e "s/AUTHOR NAME/$name/" authors/$slug.html
done