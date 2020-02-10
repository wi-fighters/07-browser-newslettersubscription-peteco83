(() => {

    const newsletter = document.querySelector(".container");

    newsletter.style.display = "none";

    document.addEventListener("mousemove", function (e) {
        console.log(e.clientY);
        if (e.clientY > 10) {
            newsletter.style.display = "flex";
        } else {
            newsletter.style.display = "none";
        }
    })

})();