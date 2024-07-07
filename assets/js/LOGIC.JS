
let SEARCH = document.querySelector(".search");
let SEARCH_BOX = document.querySelector(".search_box");
let CROSS = document.querySelector(".cross");
let INPUT =document.querySelector(".input");

SEARCH.addEventListener("click", ()=>{ 

    SEARCH_BOX.classList.add("search_active");

    if(SEARCH_BOX.classList.contains("search_active")){
        INPUT.classList.add("input_active");
    }else{
        INPUT.classList.remove("input_active");
    }

    SEARCH_BOX.classList.remove("cross_active");
});

CROSS.addEventListener("click", ()=>{
    SEARCH_BOX.classList.remove("search_active");

    if(SEARCH_BOX.classList.contains("search_active")){
        INPUT.classList.add("input_active");
    }else{
        INPUT.classList.remove("input_active");
    }

    SEARCH_BOX.classList.add("cross_active");
});