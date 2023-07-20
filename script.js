var collapse = document.getElementsByClassName("collapsible");
var i; 

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var collapsible__content = this.nextElementSibling;
        if (collapsible__content.style.display === "block") {
            collapsible__content.style.display = "none";
        } else {
            collapsible__content.style.display = "block";
        }
    });
}