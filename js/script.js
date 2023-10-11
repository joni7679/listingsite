
var mainCall = document.querySelector("#calldiv");

mainCall.onclick = function call() {
    var firstlink = document.querySelector(".first-link");
    var check = 0;
    // console.log("hi")
    if( check == 0 ){
        firstlink.style.opacity = "1";
        check=1;
    }
    else{
        firstlink.style.opacity = "0";
        check=0;

    }
}

