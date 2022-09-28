





            let shop=document.getElementById("shop");
            let bag=JSON.parse(localStorage.getItem("localdata"))||[]; 

            

            let getdata=()=>{
                return (shop.innerHTML=data.map((elem)=>{

                    

                    let {id,name,image,desc,price}=elem;
                    
                    
                    let search=bag.find((x)=>x.id===id)||[];
                    // console.log("search:",search) 

                return    `
                
                <div id=product-id-${id} class="item">
                         <img width="220" src="${image}" alt="">
                        <div class="details">
                            <h3>${name}</h3>
                            <p>${desc}</p>
                            <div class="price-quantity">
                                <h2>$ ${price}</h2>
                            <div class="buttons">
                                <i onclick="decreament(${id})" class="bi bi-dash-lg"></i>
                                <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                                <i onclick="increament(${id})" class="bi bi-plus-lg"></i>
                            </div>
                </div>
            </div>
        </div>
                `
                }).join(" ")) 
            }
getdata();


let increament=(id,image,name,price)=>{
    let selectedItem=id
    // console.log("id:",selectedItem) 

    let search=bag.find((x)=> x.id===selectedItem);
    console.log("search:",search)
    if(search===undefined){
        bag.push({
            id:selectedItem,
            item:1,
        })
        
    }else{
        search.item++;
    }
    localStorage.setItem("localdata",JSON.stringify(bag));
   
    // console.log("bag:",bag)
    update(selectedItem);

};

let decreament=(id)=>{
    let selectedItem=id
    // console.log("id:",selectedItem) 

    let search=bag.find((x)=> x.id===selectedItem);
    if(search===undefined){
        return;
    }
    else if(search.item===0){
        alert("No more Item related to this")
    }else{
        search.item--;
    }
    
    update(selectedItem);
    bag=bag.filter((x)=>x.item!==0);  //to remove 0 item elements from local storage
    // console.log("bag:",bag)
    
    localStorage.setItem("localdata",JSON.stringify(bag));
    
};

let update=(id)=>{
    let search=bag.find((x)=> x.id===id);
    // console.log("search:",search.item)
    document.getElementById(id).innerHTML=search.item;
    calculation();
};

let calculation=()=>{
    let cart_amount=document.getElementById("cart_amount");
    let m=bag.map((x)=>x.item).reduce((x,y)=>x+y,0)
    cart_amount.innerHTML=m;
}

calculation();