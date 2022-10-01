document.querySelector("form").addEventListener("submit",otp)

function otp(){
    event.preventDefault()
    if(document.querySelector("#otp").value =="12345"){
        alert("Your Payment is successful")
       let a = document.createElement("a")
        a.setAttribute("href","cart.html")
        let h1 = document.createElement("h1");
        h1.innerText = "Shop More with SHOP.COM";
        a.append(h1);
        document.querySelector("body").append(a);
    }
    else{
        alert("Wrong otp")
    }
}