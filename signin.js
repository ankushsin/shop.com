var form=document.querySelector("form");
    form.addEventListener("submit",function(event){
        event.preventDefault();

        var obj={
                email:form.email.value,
          password:form.pass.value,
            password1:form.confirm.value,
        }
        // if(obj== null)
        // {
        //     alert("please create an account");
        // }

       if (obj.password == obj.password1)
        {
            window.location.href="login.html";
        }
        else {
            alert ("Password Not Match");
        }
        localStorage.setItem("userData",JSON.stringify(obj));
        
    })
