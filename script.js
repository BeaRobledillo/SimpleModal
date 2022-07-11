const modal = document.getElementsByClassName("modal");


function handleClick(e) {

    if (e.target.id === "open") {
        modal[0].classList.remove("hidden");
    }

    if (e.target.id === "close") {
        modal[0].classList.add("hidden");
    }

    if (e.target.id === "outer-modal") {
        modal[0].classList.add("hidden");
    }

}

document.addEventListener("click", handleClick);