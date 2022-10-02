
// import navbar from '../components/navbar.js';


// let nabvar_div = document.getElementById('navbar')
// nabvar_div.innerHTML= navbar()

   
    let register = document.getElementById('register');
    register.addEventListener('click', function(ele){
        ele.preventDefault();
        let email = document.getElementById('email').value;
        let pas = document.getElementById('password').value;
        let pas2 = document.getElementById('password2').value;
        let name = document.getElementById('name').value;
    if(pas == "") {  
        alert( "**Fill the password please!");  
        return false;  
     }  
     else if(pas!=pas2){
        alert('enter Right Password')
        return false;
    }
      
    //minimum password length validation  
     else if(pas.length < 8) {  
       alert("**Password length must be atleast 8 characters");  
        return false;  
     }  
     
   //maximum length of password validation  
     else if(pas.length > 15) {  
        alert("**Password length must not exceed 15 characters");  
        return false;  
     } else {  
        var obj={
            email:email,
            password:pas,
            name:name
        }
        localStorage.setItem('userDetails',JSON.stringify(obj))
        alert('Register Sucssesfull')
        window.location.href='login.html'
    }

    })
    let userDetails= JSON.parse(localStorage.getItem('userDetails'))||[]
let n = document.getElementById('n')
n.innerText=userDetails.name || 'Sign In';
    

    
// import footer from '../components/footer.js';

// let v = document.getElementById('footer')

// v.innerHTML=footer();