




let login = document.getElementById('stbtn')

login.addEventListener("click",function(event){
     event.preventDefault();
    let email= document.getElementById('login_email').value;
    let pass= document.getElementById('login_password').value;
   
  let userDetails = JSON.parse(localStorage.getItem('userDetails'))
 if(email==userDetails.email){
    if(pass==userDetails.password){
        alert(`Welcome ${userDetails.name}`)
        window.location.href='index.html'
    }else{
    alert('Put right details')
 }
 }
 
});
// import footer from '../components/footer.js';

// let v = document.getElementById('footer')

// v.innerHTML=footer();


