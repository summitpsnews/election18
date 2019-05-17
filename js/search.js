document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search(li);
    }
});

// Declare variables
var input, filter, li, a, i;
input = document.getElementById('input');
li = document.getElementsByTagName('li');

function search() {
    filter = input.value.toUpperCase();
    // alert("Hello! I am an alert box!!");
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        }
        else {
            li[i].style.display = "none";
        }
    }
}
