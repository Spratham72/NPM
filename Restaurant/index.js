var inquirer = require('inquirer');

var details={};
var orderItem=[];
var o={};
var price={
            "Margherita Pizza":250,
            "Double Cheese Margherita":300,
            "Farm House":350,
            "Peppy Paneer":380,
            "Mexican Green Wave":375,
            "Deluxe Veggie":420,
            "Veg Extravaganza":380,
            "CHEESE N CORN":210
          }
var qty={
            "Margherita Pizza":0,
            "Double Cheese Margherita":0,
            "Farm House":0,
            "Peppy Paneer":0,
            "Mexican Green Wave":0,
            "Deluxe Veggie":0,
            "Veg Extravaganza":0,
            "CHEESE N CORN":0
          }
var delivery=()=>{
  inquirer
  .prompt([
    {
        name:"Address",
        message:"Enter your address",
        type:'input',
    },
  
  ])
  .then((answers)=>{
    details.address=answers.Address;
    console.log(details)
    pickup();
  })
}
var pickup=()=>{
  inquirer
  .prompt([
    {
      
        name: 'phone',
        message: 'Enter your phone number',
        type: 'number',
      
    },

  ])
  .then((answers)=>{
    details.phone=answers.phone;
    console.log(details)
    confirm();
   
  })
}
var confirm=()=>{
  inquirer
  .prompt([
    {
      
        name: 'confirm',
        message: 'Confirm Your Details',
        type: 'confirm',
      
    },

  ])
  .then((answers)=>{
    if(answers.confirm){
      order();
    }
    else{
      details={};
      start();
    }
  })
}

var order=()=>{
  inquirer
  .prompt([
    {
      
      name: 'order',
      message: 'Select the pizza to order!',
      type: 'list',
      choices:["Margherita Pizza" ,"Double Cheese Margherita","Farm House","Peppy Paneer","Mexican Green Wave","Deluxe Veggie","Veg Extravaganza","CHEESE N CORN"]
  },
  ])
  .then((answers)=>{
    o.name=answers.order;
    o.price=price[answers.order],
    o.qty=0;
    
    quantity()
  })
}
var quantity=()=>{
  inquirer
  .prompt([
    {
      name:"qty",
      message:"Please enter the quantity",
      type:"number"
    }
  ])
  .then((answers)=>{
    o.qty=answers.qty;
    o.price*=answers.qty;
    orderItem.push(o);
    repeat();
  })
}
var repeat=()=>{
  inquirer
  .prompt([
    {
      name:"ask",
      message:"Do you want to add more pizza?",
      type:"confirm"
    }
  ])
  .then((answers)=>{
   if(answers.ask){
     o={};
     order();
   }
   else{
     let sum=0
    for(var i=0; i<orderItem.length; i++){
      console.log(orderItem[i]);
      sum+=orderItem[i].price;
    }
    console.log(`Total(exclusive GST) ==>${sum}`)
    let gst=(sum*0.18)+sum;
    console.log(`Total(inclusive of all taxes) ==>${gst}`)
    confirmOrder()
   }
  })
}

var confirmOrder=()=>{
  inquirer
  .prompt([
    {
      name:"orderConfirm",
      message:"Confirm the Order?",
      type:"confirm"
    }
  ])
  .then((answers)=>{
    if (answers.orderConfirm) {
      console.log("ORDER PLACED SUCCESFFULLY!")
    } else {
      start()
    }
  })
}
var start=()=>{
inquirer
  .prompt([
    {name: 'orderType',
    message: 'Delivery/Pickup?',
    type: 'list',
    choices:["Delivery","Pickup"]},
    
  
  ])
  .then((answers) => {
    if(answers.orderType=="Delivery"){
      delivery()
    }
    else{
      pickup()
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}
start();
