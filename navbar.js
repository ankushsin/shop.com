document.getElementById("nav_sidebutton").addEventListener("click",function(){
    document.querySelector(".bg_modal").style.display = 'flex';
});

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".bg_modal").style.display = 'none';
})
document.getElementById("navsign-in").addEventListener("click",function(){
    document.querySelector("#nav_signin_right").style.display = 'flex';
});
document.querySelector(".close_signin").addEventListener("click",function(){
    document.querySelector("#nav_signin_right").style.display = 'none';
})