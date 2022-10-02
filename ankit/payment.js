totalItem = localStorage.getItem("totalItem");
subtotal = localStorage.getItem("subtotal");
document.querySelector("p").innerText +=  " "+totalItem;
document.querySelector("h3").innerText +=" "+"$"+subtotal;

let cardDetails = [
    {cardNum: "1234567", cvv: 456},
    {cardNum: "2345678", cvv: 367}
]

document.querySelector("form").addEventListener("submit",checkData)

function checkData(event){
    event.preventDefault()
    cardDetails.forEach(function(elem){
        if(elem.cardNum == document.querySelector("#cdNum").value){
            console.log(elem)
            if(elem.cvv == document.querySelector("#cvv").value){
                window.location.href="otp.html"
                
            }
            else{
                alert("wrong CVV")
            }
        }
    })
}
document.querySelector("form+button").addEventListener("click",cancel)

function cancel(){
    window.location.href = "cart.html"
}