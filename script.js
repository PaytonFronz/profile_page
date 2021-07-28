// connection request accept or deny

function hide2(element) {
    var accept2 = document.querySelector(".accept2");
    accept2.classList.add("hide");
    var philspic = document.querySelector(".philspic");
    philspic.classList.add("hide");
    var philname = document.querySelector(".philname");
    philname.classList.add("hide");
    var deny2 = document.querySelector(".deny2");
    deny2.classList.add("hide");
}

function hide1(element) {
    var accept1 = document.querySelector(".accept1");
    accept1.classList.add("hide");
    var toddspic = document.querySelector(".toddspic");
    toddspic.classList.add("hide");
    var toddname = document.querySelector(".toddname");
    toddname.classList.add("hide");
    var deny1 = document.querySelector(".deny1");
    deny1.classList.add("hide");
}

// edit profile
    function changeName(element){
        var newName = document.querySelector("#name");
        newName.innerHTML = "Darth Vader";
    }
