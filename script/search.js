




console.log('haha')
const container_div=document.getElementById("container");
const searchItems = async ()=> {
    try{
        //  const qurey=document.getElementById("query").value;

        const res =await fetch(`https://fakestoreapi.com/products`)

        const data=await res.json();
//    console.log(data)
        actual_data=data;

       console.log(actual_data)
        appendData(actual_data)  

    }
    catch(error){
        console.log("error",error)
    }

};
searchItems()
  

const appendData=(data)=> {
    const container_div=document.getElementById("container");
    container_div.innerHTML=null;
    data.forEach((ele)=>{
        let div = document.createElement('div')
        div.addEventListener('click',()=>{
            localStorage.setItem('clicked_item',JSON.stringify(ele))
            window.location.href='./ankit/description.html'
        })

        let img = document.createElement('img');
        img.src=ele.image;
        
        let price = document.createElement('h1')
        price.innerText=`$${ele.price}`

        let name = document.createElement('h3')
        name.innerText=ele.title;

        let rate= document.createElement('h2')
        rate.innerText=ele.rating.rate;

        let img2=document.createElement('img')
        img2.src='https://tse4.mm.bing.net/th?id=OIP.UcTbpp-tN3rpTrbBkOuP-QHaHa&pid=Api&P=0'

        let p = document.createElement('p')
        p.innerText='Free shipping with $50.00 orders';


        let button = document.createElement('button')
        button.innerText='Chose options';

        div.append(img,name,price,img2,rate,p,button);
        container_div.append(div)
    })

}