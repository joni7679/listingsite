
let ctalinksBox = document.querySelector(".ctalinks-box");
let subCtaBox = document.querySelector(".sub-ctalinks-box");
let subCtaLink = document.querySelector(".sub-ctalink");
let btnstatus = false;
ctalinksBox.addEventListener("click", function() {

    if (btnstatus === false) {
        subCtaBox.style.display = "block";
        subCtaBox.style.opacity = "1";
        subCtaLink.style.transition="0.2s linear";
        btnstatus = true;

    }
    else {
        subCtaBox.style.display = "none";
        subCtaBox.style.opacity = "0";
        subCtaLink.style.transition="0.2s linear";
        btnstatus = false;

    }

})




