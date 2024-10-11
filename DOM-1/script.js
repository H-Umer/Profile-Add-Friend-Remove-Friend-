var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0 

btn.addEventListener("click", function(){
    if (check == 0){
         istatus.innerHTML = "I am your friend"
         istatus.style.color = "yellow"
         btn.innerHTML = "Remove Friends"
         check = 1
   }else {
    istatus.innerHTML = "I am not your friend"
         istatus.style.color = "red"
         btn.innerHTML = "Add Friends"
         check = 0
   }
})

