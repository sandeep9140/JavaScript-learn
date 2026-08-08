let gallery = document.getElementById("gallery");

let modal = document.getElementById("modal");

let modalContent = document.getElementById("modal-content");

let modalImg = document.getElementById("modal-img");

let closeBtn = document.getElementById("closeBtn");


// Image par mouse le jaane par
gallery.addEventListener("mouseover", function (event) {

    if (event.target.classList.contains("gallery-img")) {

        modal.style.display = "flex";

        modalImg.src = event.target.src;

    }

});


// Cross button par click
closeBtn.addEventListener("click", function () {

    modal.style.display = "none";

});


// Modal ke bahar click
modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});


// Modal ke andar click hone par
modalContent.addEventListener("click", function (event) {

    event.stopPropagation();

});