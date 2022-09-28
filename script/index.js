var arr = [
    {
    Name:"AXIS Nutrition™ Advanced Digestive Support",
    img:'https://www.shop.com/feo-cdn/Q/S/gYyQJsTec.webp',
    price:'$59.95',
    rating:'5',
    order:'Free shipping with $99 orders',
},
{
    Name:"AXIS Nutrition™ Mental Emotional Balance",
    img:'https://www.shop.com/feo-cdn/M/B/yKQVxvGw0.webp',
    price:'$59.95',
    rating:'4',
    order:'Free shipping with $99 orders'
},
{
    Name:"Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger",
    img:'https://www.shop.com/feo-cdn/Z/n/MMp93vyNc.webp',
    price:'$59.95',
    rating:'5',
    order:'Free shipping with $99 orders'
},
{
    Name:"AXIS Nutrition™ Advanced Digestive Support",
    img:'https://www.shop.com/feo-cdn/A/n/V-cTSXpyY.webp',
    price:'$59.95',
    rating:'3',
    order:'Free shipping with $99 orders'
},
{
    Name:'AXIS Nutrition™ Advanced Digestive Support',
    img:'https://www.shop.com/feo-cdn/1/9/lZlESoF2o.webp',
    price:'$59.95',
    rating:'5',
    order:'Free shipping with $99 orders'
},
{
    Name:'AXIS Nutrition™ Advanced Digestive Support',
    img:'https://www.shop.com/feo-cdn/7/a/PtDidZj7Q.webp',
    price:'$59.95',
    rating:'4',
    order:'Free shipping with $99 orders'
},

]


localStorage.setItem('arr1', JSON.stringify(arr))
 
 let data = JSON.parse(localStorage.getItem('arr1'))
 

function display(){
    let container_1= document.getElementById('container_1')
    console.log(data)
    data.forEach((ele) =>{

        let div1 = document.createElement('div');
        div1.setAttribute('class','box')

        let img=document.createElement('img')
        img.src=ele.img;
        let Name = document.createElement('h1')
        Name.innerText=ele.Name;
        let price = document.createElement('h1')
        price.innerText=ele.price;
        let rating= document.createElement('h3')
        rating.innerText = ele.rating;
        let p=document.createElement('p')
        p.innerText=ele.order

        div1.append(img,Name,price,rating,p)
        container_1.append(div1)

    })

}
display()
