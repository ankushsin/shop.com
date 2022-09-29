


var form=document.querySelector("form");
var userdata=JSON.parse(localStorage.getItem("userData"));



form.addEventListener("submit",function(event){
    event.preventDefault();
     
    var data={
       
       email:form.email.value,
       password:form.pass.value,
   }

   if(userdata==null)
   {
       alert("please create an account");
       window.location.href="signin.html"

   }
   else if(userdata.email==data.email && userdata.password==data.password)
   {
       alert("login succesfull");
       localStorage.setItem("signin",JSON.stringify(userdata));
       window.location.href="navbar.html"
   }
   else{
       alert("user does not exist please signup first")
       window.location.href="signin.html"
   }
 
});