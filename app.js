/* 1.Add Friend Feature with same button

const istatus = document.querySelector("h5");

const btn = document.querySelector("#add");

let flag = 0;

btn.addEventListener("click",() =>{
   if(flag ==0){
    istatus.innerHTML ="Friend";
    istatus.style.color = "green";
    btn.innerHTML ="Remove Friend";
    flag = 1;
   }
   else{
    istatus.innerHTML ="Stranger";
    istatus.style.color = "Red";
    btn.innerHTML ="Add Friend";
    flag = 0;
   }
})

*/