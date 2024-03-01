


const main = document.querySelector("#container")
const bg = ["bg4.jpg", "bg5.jpg"]

// Menu
 document.querySelector('.navbar')
const menuBtn = document.querySelector('.menu')
 const closeBtn =  document.querySelector('.close-btn')

menuBtn.addEventListener("click", ()=>{
  document.querySelector('.navbar').style.height = '100%'
  menuBtn.style.display = 'none'
  document.querySelector('.logo-img').style.width = '210px'
  document.querySelector('.logo-img').style.margin = '20px 0px'
  document.querySelector('.navbar-nav').style.display = 'flex'
  document.querySelector('.navbar-nav').style.margin = '0px'
  document.querySelector('.navbar').style.flexDirection = 'column'
  document.querySelector('.navbar').style.justifyContent = 'flex-start'
  document.querySelector('.close-btn').style.display = 'flex'
  document.querySelector('.buy-div').style.display = 'none'
  console.log("clicked")

})
 closeBtn.addEventListener("click",()=>{
  menuBtn.style.display = 'flex'
  document.querySelector('.logo-img').style.margin = ' 0px'
  document.querySelector('.navbar').style.height = 'auto'
  document.querySelector('.logo-img').style.width = '70px'
  document.querySelector('.navbar-nav').style.display = 'none'
  document.querySelector('.close-btn').style.display = 'none'
  document.querySelector('.navbar').style.flexDirection = 'row'
  document.querySelector('.navbar').style.justifyContent = 'space-between'
 })

//  Buy Cart
let ProDiv = document.querySelector(".Pro-Baap");
const Quantity= document.querySelector(".Quantity")
 let plus= parseInt(Quantity)
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
let ProDetail = [{
  id:"Pro1",
  price: "20",
  name:"White Cotton T-Shirt",
  img : "pro1.jpg",
},{
  id:"Pro2",
  price: "50",
  name:"Black Cotton T-Shirt",
  img : "pro2.jpg",
},{
  id:"Pro3",
  price: "60",
  name:"Causual Shirt",
  img : "pro3.jpg",
},{
  id:"Pro4",
  price: "90",
  name:"Denim Shirt",
  img : "bg9.jpg",
},{
  id:"Pro5",
  price: "60",
  name:"Denim Shirt",
  img : "bg2 (1).jpg",
}]
let generateShop =(img,price,name,id)=>{
  return (ProDiv.innerHTML = ProDetail.map((x)=>{
    let{id,price,name,img} =x
    return `
    <a href="${x.id}.html">
    <div class="ProOuter-div"  >

    <div class="ProInner-div" >
      <img src="${x.img}" alt="" class="pro-img">
      <a href="#" class="link"><img src="${x.img}" alt="" class="Buy-icon"></a>
       <div class="Pro-price">
         <h2 style="margin: 10px 0px;">${x.name}</h2>
           <b><p>${x.price}$</p></b>
         <div class="add-pro">
          <i onclick=increament(${x.id})  class= "fas fa-plus  plus" style="width: 20px; margin-right: 10px;" ></i>
          <p class="Quantity" id="${id}">0</p>
          <i onclick=decreament(${x.id})  class="fas fa-minus  minus" style="margin-left: 10px;"></i>
         </div>
         </div>
         </div>
             </div>
             </a>`
  }).join(""))
}

generateShop()

let basket = JSON.parse(localStorage.getItem("data")) || []

let increament =(id) =>{
  let selected = id;
let search = basket.find((x)=> x.id ===selected.id)
if(search=== undefined){
  basket.push({
    id:selected.id,
    item:1,
  })
}
else{
   search.item +=1
}
localStorage.setItem("data",JSON.stringify(basket))
 update(selected.id)
}

let decreament =(id) =>{

  let selected = id;
  let search = basket.find((x)=> x.id ===selected.id)
  
  if(search.item=== 0) return;
  else{
     search.item -=1
  }

localStorage.setItem("data",JSON.stringify(basket))

   update(selected.id)
}


let update =(id)=>{
    let search = basket.find((x)=> x.id === id)
  document.getElementById(id).innerHTML = search.item;
  let Cart = document.querySelector("#num2")
  Cart.innerHTML =  basket.map((x)=> x.item).reduce((x,y) => x+y,0)
  
 
}

let calculate = ()=>{
let Cart = document.querySelector("#num2")
Cart.innerHTML = basket.map((x)=> x.item).reduce((x,y) => x+y,0)

}

// setInterval( bg.map((e)=>{main.style.backgroundImage = URL(e)}),5000)


// const hello = bg.map((e)=>{
//   console.log(e)
// })

// hello()
document.main.style.backgroundImage="none"