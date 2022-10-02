import navbar from '../components/navbar.js';


let nabvar_div = document.getElementById('navbar')
nabvar_div.innerHTML= navbar()

// import footer from '../components/footer.js';


// let footer_div = document.getElementById('footer')
// footer_div.innerHTML= footer()




var arr = [
    {
    Name:"AXIS Nutrition™ Advanced Digestive Support",
    img:'https://www.shop.com/feo-cdn/Q/S/gYyQJsTec.webp',
    price:'$52.95',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    rating:'5',
    order:'Free shipping with $99 orders',
},
{
    Name:"AXIS Nutrition™ Mental Emotional Balance",
    img:'https://www.shop.com/feo-cdn/M/B/yKQVxvGw0.webp',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    price:'$39.95',
    rating:'4.1',
    order:'Free shipping with $99 orders'
},
{
    Name:"Shopping Annuity® Brand Premium Apple Cider Vinegar + Ginger",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/Z/n/MMp93vyNc.webp',
    price:'$71.535',
    rating:'3.8',
    order:'Free shipping with $99 orders'
},
{
    Name:"AXIS Nutrition™ Advanced Digestive Support",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/A/n/V-cTSXpyY.webp',
    price:'$49.95',
    rating:'3.9',
    order:'Free shipping with $99 orders'
},
{
    Name:'AXIS Nutrition™ Advanced Digestive Support',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/1/9/lZlESoF2o.webp',
    price:'$52.95',
    rating:'4.3',
    order:'Free shipping with $99 orders'
},
{
    Name:'AXIS Nutrition™ Advanced Digestive Support',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/7/a/PtDidZj7Q.webp',
    price:'$55.35',
    rating:'4',
    order:'Free shipping with $99 orders'
},

]
console.log(arr)

localStorage.setItem('arr1', JSON.stringify(arr))
 
 let data = JSON.parse(localStorage.getItem('arr1'))
 

function display(){
    let container_1= document.getElementById('container_1')
    console.log(data)
    data.forEach((ele) =>{

        let div1 = document.createElement('div');
        div1.setAttribute('class','box')
        div1.id='divv';
        div1.onclick=() =>{
            storedata(ele)
        }
        let img=document.createElement('img')
        img.src=ele.img;
        let Name = document.createElement('h1')
        Name.innerText=ele.Name;
        let price = document.createElement('h1')
        price.innerText=ele.price;
        let rating_img=document.createElement('img')
        rating_img.src=ele.rating_img
        rating_img.setAttribute('class','rate_img')
        let rating= document.createElement('h3')
        rating.innerText = ele.rating;
        let p=document.createElement('p')
        p.innerText=ele.order

        div1.append(img,Name,price,rating_img,rating,p)
        container_1.append(div1)

    })

}
display()


function storedata(data){
    localStorage.setItem("clicked_item", JSON.stringify(data));
    window.location.href='./ankit/description.html'
   }

// -----------------slider part-----------



let scroll_btn_2 = document.getElementById('scroll_btn_2')
scroll_btn_2.addEventListener('click', function(){
    var left = document.getElementById('container_1')
     
    left.scrollBy(100007000,100000)
})
let scroll_btn_1 = document.getElementById('scroll_btn_1')
scroll_btn_1.addEventListener('click', function(){
    var right = document.getElementById('container_1')
     
    right.scrollBy(-1000080,1000000)
})




// seventhdiv----------------------------->>>>>



var arr2 = [
    {
    Name:"Motives® LALA Pop of LALA Pressed Pigment Palette",
    img:'https://www.shop.com/feo-cdn/9/N/6w7SnOjhk.webp',
    price:'$79.95',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    rating:'3.1',
    order:'Free shipping with $99 orders',
},
{
    Name:"Motives® LALA Pop of LALA Pressed Pigment Palette",
    img:'https://www.shop.com/feo-cdn/2/P/c_nL08pSU.webp',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    price:'$81.35',
    rating:'3.9',
    order:'Free shipping with $99 orders'
},
{
    Name:"Motives® 30th Anniversary Lip Collection",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/P/h/sfWYV9OoM.webp',
    price:'$39.95',
    rating:'4',
    order:'Free shipping with $99 orders'
},
{
    Name:"Motives® Essential Complexion 4-Piece Brush Set",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/J/o/q03wvC3-k.webp',
    price:'$51.25',
    rating:'3.2',
    order:'Free shipping with $99 orders'
},
{
    Name:'Motives® 30th Anniversary Lip Collection',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/v/O/MT-blwReI.webp',
    price:'$22.85',
    rating:'4.0',
    order:'Free shipping with $99 orders'
},
{
    Name:'Motives® 30th Anniversary Lip Collection',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/I/L/_eZgaY-e8.webp',
    price:'$62.95',
    rating:'4.6',
    order:'Free shipping with $99 orders'
},


]

localStorage.setItem('arr2', JSON.stringify(arr2))
 
 let data2 = JSON.parse(localStorage.getItem('arr2'))
 

function display2(){
    let container_2= document.getElementById('container_2')
    console.log(data2)
    data2.forEach((ele) =>{

        let div1 = document.createElement('div');
        div1.setAttribute('class','box')
        div1.id='divv';
        div1.onclick=() =>{
            storedata(ele)
        }

        let img=document.createElement('img')
        img.src=ele.img;
        let Name = document.createElement('h1')
        Name.innerText=ele.Name;
        let price = document.createElement('h1')
        price.innerText=ele.price;
        let rating_img=document.createElement('img')
        rating_img.src=ele.rating_img
        rating_img.setAttribute('class','rate_img')
        let rating= document.createElement('h3')
        rating.innerText = ele.rating;
        let p=document.createElement('p')
        p.innerText=ele.order

        div1.append(img,Name,price,rating_img,rating,p)
        container_2.append(div1)

    })

}
display2()


let scroll_btn_21 = document.getElementById('scroll_btn_21')
scroll_btn_21.addEventListener('click', function(){
   let left = document.getElementById('container_2')
     
    left.scrollBy(100007000,100000)
})
let scroll_btn_11 = document.getElementById('scroll_btn_11')
scroll_btn_11.addEventListener('click', function(){
    let right = document.getElementById('container_2')
     
    right.scrollBy(-1000080,1000000)
})


var arr3 = [
    {
    Name:"SELENA – Pave Cuban Link Chain",
    img:'https://www.shop.com/feo-cdn/Z/0/frkGwoR9Q.webp',
    price:'$44.95',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    rating:'4.3',
    order:'Free shipping with $99 orders',
},
{
    Name:"ELOISE – Classic Ear Cuff",
    img:'https://img.shop.com/Image/280000/282000/282022/products/1943471817.jpg?plain&size=1600x1600',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    price:'$50.35',
    rating:'4.1',
    order:'Free shipping with $99 orders'
},
{
    Name:"SEBASTIAN – Slider Hoops",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/280000/282000/282022/products/1943471807.jpg?plain&size=1600x1600',
    price:'$77.95',
    rating:'5',
    order:'Free shipping with $99 orders'
},
{
    Name:"HARPER – Ultra Wide Herringbone",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/0/_/VprE2fTGM.webp',
    price:'$63.91',
    rating:'3',
    order:'Free shipping with $99 orders'
},
{
    Name:'DAWSON – Dome Ring',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/p/A/S3xqvwH-w.webp',
    price:'$46.35',
    rating:'4.4',
    order:'Free shipping with $99 orders'
},
{
    Name:'SELENA – Pave Cuban Link Bracelet',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/280000/282000/282022/products/1943471988.jpg?plain&size=1600x1600',
    price:'$79.95',
    rating:'5',
    order:'Free shipping with $99 orders'
},
{
    Name:'VIVIAN – Pave Ear Cuff',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/Y/V/GNuS2-E3A.webp',
    price:'$59.95',
    rating:'4',
    order:'Free shipping with $99 orders'
},{
    Name:'DAPHNE – Freshwater Pearl Drop Huggie Earrings',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/D/k/y-YWZxRbY.webp',
    price:'$49.73',
    rating:'4.6',
    order:'Free shipping with $99 orders'
},{
    Name:'EMERSON – Emerald Cut Rope Loop Earrings',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/280000/282000/282022/products/1943471762.jpg?plain&size=1600x1600',
    price:'$26.45',
    rating:'4.2',
    order:'Free shipping with $99 orders'
},{
    Name:'JAMES – Thin Hammered Ring Trio',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/280000/282000/282022/products/1943471705.jpg?plain&size=1600x1600',
    price:'$59.95',
    rating:'5',
    order:'Free shipping with $99 orders'
},


]

localStorage.setItem('arr3', JSON.stringify(arr3))
 
 let data3 = JSON.parse(localStorage.getItem('arr3'))
 

function display3(){
    let container_3= document.getElementById('container_3')
    console.log(data2)
    data3.forEach((ele) =>{

        let div1 = document.createElement('div');
        div1.setAttribute('class','box')
        div1.id='divv';
        div1.onclick=() =>{
            storedata(ele)
        }

        let img=document.createElement('img')
        img.src=ele.img;
        let Name = document.createElement('h1')
        Name.innerText=ele.Name;
        let price = document.createElement('h1')
        price.innerText=ele.price;
        let rating_img=document.createElement('img')
        rating_img.src=ele.rating_img
        rating_img.setAttribute('class','rate_img')
        let rating= document.createElement('h3')
        rating.innerText = ele.rating;
        let p=document.createElement('p')
        p.innerText=ele.order

        div1.append(img,Name,price,rating_img,rating,p)
        container_3.append(div1)

    })

}
display3()


let scroll_btn_23 = document.getElementById('scroll_btn_23')
scroll_btn_23.addEventListener('click', function(){
   let left = document.getElementById('container_3')
     
    left.scrollBy(700,0)
})
let scroll_btn_12 = document.getElementById('scroll_btn_12')
scroll_btn_12.addEventListener('click', function(){
    let right = document.getElementById('container_3')
     
    right.scrollBy(-700,0)
})




var arr4 = [
    {
    Name:"DNA Miracles Isotonix® Multivitamin",
    img:'https://www.shop.com/feo-cdn/r/8/khZouRrxs.webp',
    price:'$49.95',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    rating:'4.1',
    order:'Free shipping with $99 orders',
},
{
    Name:"DNA Miracles Isotonix® Immune",
    img:'https://img.shop.com/Image/250000/250100/250199/products/1332818472.jpg?plain&size=1600x1600',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    price:'$51.25',
    rating:'4.4',
    order:'Free shipping with $99 orders'
},
{
    Name:"DNA Miracles OPC-3® Chews",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/Z/K/W8b5TLOH8.webp',
    price:'$44.95',
    rating:'3.0',
    order:'Free shipping with $99 orders'
},
{
    Name:"DNA Miracles® Essential Omega 3",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/Q/O/QsMx678To.webp',
    price:'$72.95',
    rating:'3.5',
    order:'Free shipping with $99 orders'
},
{
    Name:'DNA Miracles® Chewable Probiotics',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/250000/250100/250199/products/1065616466.jpg?plain&size=1600x1600',
    price:'$54.95',
    rating:'4.4',
    order:'Free shipping with $99 orders'
},
{
    Name:'DNA Miracles® Chewable Multivitamin',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/A/u/6pPbdttKI.webp',
    price:'$59.95',
    rating:'5',
    order:'Free shipping with $99 orders'
},
{
    Name:'DNA Miracles Isotonix® Digestive Enzymes',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/250000/250100/250199/products/1021314379.jpg?plain&size=1600x1600',
    price:'$67.35',
    rating:'4.5',
    order:'Free shipping with $99 orders'
}
   

]

localStorage.setItem('arr4', JSON.stringify(arr4))
 
 let data4 = JSON.parse(localStorage.getItem('arr4'))
 

function display4(){
    let container_4= document.getElementById('container_4')
    
    data4.forEach((ele) =>{

        let div1 = document.createElement('div');
        div1.setAttribute('class','box')
        div1.id='divv';
        div1.onclick=() =>{
            storedata(ele)
        }

        let img=document.createElement('img')
        img.src=ele.img;
        let Name = document.createElement('h1')
        Name.innerText=ele.Name;
        let price = document.createElement('h1')
        price.innerText=ele.price;
        let rating_img=document.createElement('img')
        rating_img.src=ele.rating_img
        rating_img.setAttribute('class','rate_img')
        let rating= document.createElement('h3')
        rating.innerText = ele.rating;
        let p=document.createElement('p')
        p.innerText=ele.order

        div1.append(img,Name,price,rating_img,rating,p)
        container_4.append(div1)

    })

}
display4()




let scroll_btn_24 = document.getElementById('scroll_btn_24')
scroll_btn_24.addEventListener('click', function(){
   let left = document.getElementById('container_4')
     
    left.scrollBy(700,0)
})
let scroll_btn_13 = document.getElementById('scroll_btn_13')
scroll_btn_13.addEventListener('click', function(){
    let right = document.getElementById('container_4')
     
    right.scrollBy(-700,0)
})





var arr5 = [
    {
    Name:"Smart Blonde Outdoor Decor Happy Fall Novelty Metal Arrow Sign A-182",
    img:'https://www.shop.com/feo-cdn/5/4/o6KxJw2XU.webp',
    price:'$52.91',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    rating:'4.2',
    order:'Free shipping with $99 orders',
},
{
    Name:"9.25 Spooky Ghost Trio Halloween Decoration",
    img:'https://img.shop.com/Image/240000/248000/248061/products/1945230842.jpg?plain&size=2000x2000',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    price:'$52.05',
    rating:'4.0',
    order:'Free shipping with $99 orders'
},
{
    Name:"Set of 12 Crackled and Glittered Fall Pumpkin, Gourd, Berry, Pine Cone Decoration Set",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/-/g/aUSLil4Hc.webp',
    price:'$78.95',
    rating:'4.0',
    order:'Free shipping with $99 orders'
},
{
    Name:"Costway 12 Ft Halloween Inflatable Ghost Yard Decoration w/ Built-in LED Lights",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/280000/284400/284458/products/1912508831.jpg?plain&size=2000x2000',
    price:'$44.95',
    rating:'3.6',
    order:'Free shipping with $99 orders'
}

]

localStorage.setItem('arr5', JSON.stringify(arr5))
 
 let data5 = JSON.parse(localStorage.getItem('arr5'))
 

function display5(){
    let container_5= document.getElementById('container_5')
    
    data5.forEach((ele) =>{

        let div1 = document.createElement('div');
        div1.setAttribute('class','box')
        div1.id='divv';
        div1.onclick=() =>{
            storedata(ele)
        }

        let img=document.createElement('img')
        img.src=ele.img;
        let Name = document.createElement('h1')
        Name.innerText=ele.Name;
        let price = document.createElement('h1')
        price.innerText=ele.price;
        let rating_img=document.createElement('img')
        rating_img.src=ele.rating_img
        rating_img.setAttribute('class','rate_img')
        let rating= document.createElement('h3')
        rating.innerText = ele.rating;
        let p=document.createElement('p')
        p.innerText=ele.order

        div1.append(img,Name,price,rating_img,rating,p)
        container_5.append(div1)

    })

}
display5()




let scroll_btn_25 = document.getElementById('scroll_btn_25')
scroll_btn_25.addEventListener('click', function(){
   let left = document.getElementById('container_5')
     
    left.scrollBy(700,0)
})
let scroll_btn_14 = document.getElementById('scroll_btn_14')
scroll_btn_14.addEventListener('click', function(){
    let right = document.getElementById('container_5')
     
    right.scrollBy(-700,0)
})



var arr6 = [
    {
    Name:"Isotonix® Vitamin D with K2",
    img:'https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?plain&size=1600x1600',
    price:'79.95',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    rating:'4.5',
    order:'Free shipping with $99 orders',
},
{
    Name:"Heart Health™ Essential Omega III Fish Oil with Vitamin E",
    img:'https://img.shop.com/Image/210000/214100/214199/products/561800368.jpg?plain&size=1600x1600',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    price:'$45.98',
    rating:'3.5',
    order:'Free shipping with $99 orders'
},
{
    Name:"Isotonix® Multivitamin Without Iron",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/210000/214100/214196/products/1604659974.jpg?plain&size=1600x1600',
    price:'$74.89',
    rating:'3.9',
    order:'Free shipping with $99 orders'
},
{
    Name:"Isotonix® Activated B Complex",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/210000/214100/214196/products/604981550.jpg?plain&size=1600x1600',
    price:'$73.22',
    rating:'4.1',
    order:'Free shipping with $99 orders'
},
{
    Name:'Isotonix® Vitamin D with K2',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?plain&size=1600x1600',
    price:'$45.34',
    rating:'4.5',
    order:'Free shipping with $99 orders'
},
{
    Name:'Probiotics-10',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/4/s/QBt9Iym3I.webp',
    price:'$52.65',
    rating:'3',
    order:'Free shipping with $99 orders'
},
{
    Name:'NutriClean® Advanced Fiber Powder with Stevia',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/240000/243300/243382/products/978316780.jpg?plain&size=1600x1600',
    price:'$69.95',
    rating:'4',
    order:'Free shipping with $99 orders'
},{
    Name:'Heart Health™ Advanced Co-Q10 (Cardiovascular & Immune Support)',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/210000/214100/214199/products/561800367.jpg?plain&size=1600x1600',
    price:'$58.95',
    rating:'5',
    order:'Free shipping with $99 orders'
},{
    Name:'Isotonix® Magnesium',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/210000/214100/214196/products/792868342.jpg?plain&size=1600x1600',
    price:'$39.95',
    rating:'5',
    order:'Free shipping with $99 orders'
},{
    Name:'Isotonix® Vitamin D with K2',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/F/2/9ZFjFm8gA.webp',
    price:'$59.15',
    rating:'4.2',
    order:'Free shipping with $99 orders'
},


]

localStorage.setItem('arr6', JSON.stringify(arr6))
 
 let data6 = JSON.parse(localStorage.getItem('arr6'))
 

function display6(){
    let container_6= document.getElementById('container_6')
    console.log(data2)
    data6.forEach((ele) =>{

        let div1 = document.createElement('div');
        div1.setAttribute('class','box')
        div1.id='divv';
        div1.onclick=() =>{
            storedata(ele)
        }

        let img=document.createElement('img')
        img.src=ele.img;
        let Name = document.createElement('h1')
        Name.innerText=ele.Name;
        let price = document.createElement('h1')
        price.innerText=ele.price;
        let rating_img=document.createElement('img')
        rating_img.src=ele.rating_img
        rating_img.setAttribute('class','rate_img')
        let rating= document.createElement('h3')
        rating.innerText = ele.rating;
        let p=document.createElement('p')
        p.innerText=ele.order

        div1.append(img,Name,price,rating_img,rating,p)
        container_6.append(div1)

    })

}
display6()


let scroll_btn_26 = document.getElementById('scroll_btn_26')
scroll_btn_26.addEventListener('click', function(){
   let left = document.getElementById('container_6')
     
    left.scrollBy(700,0)
})
let scroll_btn_15= document.getElementById('scroll_btn_15')
scroll_btn_15.addEventListener('click', function(){
    let right = document.getElementById('container_6')
     
    right.scrollBy(-700,0)
})



var arr7 = [
    {
    Name:"Isotonix OPC-3®",
    img:'https://img.shop.com/Image/210000/214100/214196/products/561800349.jpg?plain&size=1600x1600',
    price:'71.95',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    rating:'4.5',
    order:'Free shipping with $99 orders',
},
{
    Name:"Isotonix® Daily Essentials Packets",
    img:'https://img.shop.com/Image/210000/214100/214196/products/935461732.jpg?plain&size=1600x1600',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    price:'$45.98',
    rating:'3.5',
    order:'Free shipping with $99 orders'
},
{
    Name:"Ultimate Aloe™",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/240000/243300/243396/products/603891601.jpg?plain&size=1600x1600',
    price:'$64.89',
    rating:'3.9',
    order:'Free shipping with $99 orders'
},
{
    Name:"Isotonix® Digestive Enzymes with Probiotics (Packets)",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/210000/214100/214196/products/561800354.jpg?plain&size=1600x1600',
    price:'$83.22',
    rating:'4.1',
    order:'Free shipping with $99 orders'
},
{
    Name:"Isotonix® Digestive Enzymes with Probiotics",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/210000/214100/214196/products/1301699648.jpg?plain&size=1600x1600',
    price:'$72.22',
    rating:'4.1',
    order:'Free shipping with $99 orders'
},


]

localStorage.setItem('arr7', JSON.stringify(arr7))
 
 let data7 = JSON.parse(localStorage.getItem('arr7'))
 

function display7(){
    let container_7= document.getElementById('container_7')
    // console.log(data2)
    data7.forEach((ele) =>{

        let div1 = document.createElement('div');
        div1.setAttribute('class','box')
        div1.id='divv';
        div1.onclick=() =>{
            storedata(ele)
        }

        let img=document.createElement('img')
        img.src=ele.img;
        let Name = document.createElement('h1')
        Name.innerText=ele.Name;
        let price = document.createElement('h1')
        price.innerText=ele.price;
        let rating_img=document.createElement('img')
        rating_img.src=ele.rating_img
        rating_img.setAttribute('class','rate_img')
        let rating= document.createElement('h3')
        rating.innerText = ele.rating;
        let p=document.createElement('p')
        p.innerText=ele.order

        div1.append(img,Name,price,rating_img,rating,p)
        container_7.append(div1)

    })

}
display7()

var arr8 = [
    {
    Name:"Isotonix OPC-3®",
    img:'https://img.shop.com/Image/210000/214100/214196/products/561800349.jpg?plain&size=1600x1600',
    price:'$52.95 - $70.23',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    rating:'5',
    order:'Free shipping with $99 orders',
},
{
    Name:"DNA Miracles Isotonix® Immune",
    img:'https://img.shop.com/Image/250000/250100/250199/products/1332818472.jpg?plain&size=1600x1600',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    price:'$39.95',
    rating:'4.1',
    order:'Free shipping with $99 orders'
},
{
    Name:"ClearShield® Maximum Protection and Hydration",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/210000/214200/214267/products/559010729.jpg?plain&size=1600x1600',
    price:'$71.535',
    rating:'3.8',
    order:'Free shipping with $99 orders'
},
{
    Name:"Isotonix® Vitamin C",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/210000/214100/214196/products/561800360.jpg?plain&size=1600x1600',
    price:'$78.95',
    rating:'3.9',
    order:'Free shipping with $99 orders'
},
{
    Name:'Snap™ All-Purpose Natural Concentrate',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/240000/243300/243390/products/559053516.jpg?plain&size=1600x1600',
    price:'$52.95',
    rating:'4.3',
    order:'Free shipping with $99 orders'
},
{
    Name:'AXIS Nutrition™ Advanced Digestive Support',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://www.shop.com/feo-cdn/7/a/PtDidZj7Q.webp',
    price:'$55.35',
    rating:'4',
    order:'Free shipping with $99 orders'
},
{
    Name:"DNA Miracles Isotonix® Immune",
    img:'https://img.shop.com/Image/250000/250100/250199/products/1332818472.jpg?plain&size=1600x1600',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    price:'$39.95',
    rating:'4.1',
    order:'Free shipping with $99 orders'
},
{
    Name:"ClearShield® Maximum Protection and Hydration",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/210000/214200/214267/products/559010729.jpg?plain&size=1600x1600',
    price:'$71.535',
    rating:'3.8',
    order:'Free shipping with $99 orders'
},
{
    Name:"Isotonix® Vitamin C",
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    img:'https://img.shop.com/Image/210000/214100/214196/products/561800360.jpg?plain&size=1600x1600',
    price:'$78.95',
    rating:'3.9',
    order:'Free shipping with $99 orders'
},
{
    Name:"Isotonix OPC-3®",
    img:'https://img.shop.com/Image/210000/214100/214196/products/561800349.jpg?plain&size=1600x1600',
    price:'$52.95 - $70.23',
    rating_img:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png',
    rating:'5',
    order:'Free shipping with $99 orders',
},

]


localStorage.setItem('arr8', JSON.stringify(arr8))
 
 let data8 = JSON.parse(localStorage.getItem('arr8'))
 

function display8(){
    let container_8= document.getElementById('container_8')
    // console.log(data)
    data8.forEach((ele) =>{

        let div1 = document.createElement('div');
        div1.setAttribute('class','box')
        div1.id='divv';
        div1.onclick=() =>{
            storedata(ele)
        }
        let img=document.createElement('img')
        img.src=ele.img;
        let Name = document.createElement('h1')
        Name.innerText=ele.Name;
        let price = document.createElement('h1')
        price.innerText=ele.price;
        let rating_img=document.createElement('img')
        rating_img.src=ele.rating_img
        rating_img.setAttribute('class','rate_img')
        let rating= document.createElement('h3')
        rating.innerText = ele.rating;
        let p=document.createElement('p')
        p.innerText=ele.order

        div1.append(img,Name,price,rating_img,rating,p)
        container_8.append(div1)

    })

}
display8()



// -----------------slider part-----------



let scroll_btn_27 = document.getElementById('scroll_btn_27')
scroll_btn_27.addEventListener('click', function(){
    var left = document.getElementById('container_8')
     
    left.scrollBy(800,400)
})
let scroll_btn_16 = document.getElementById('scroll_btn_16')
scroll_btn_16.addEventListener('click', function(){
    var right = document.getElementById('container_8')
     
    right.scrollBy(-1000,400)
})






let search_bt = document.getElementById('search_btn')


 search_bt.onclick=(()=>{
    console.log("gaga")
    let searchbar = document.getElementById('searchbar').value;
    console.log(searchbar)
   localStorage.setItem('search_item', JSON.stringify(searchbar))
   window.location.href='./search.html'

 })
