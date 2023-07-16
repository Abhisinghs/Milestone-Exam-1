//we have to make a program that calculate the discount percentage 
// and product price and discount price as given 

let list_item=[{item:"product_1",original_price:140,discount_price:105},
{item:"product_2",original_price:1000,discount_price:250},
{item:"product_3",original_price:1400,discount_price:700}]

// now we calculate the discount_percentage of the product 
// we use Arrow function to program it 

let percentage_fun=(list)=>{
    list.forEach((el)=>{
        discount_percentage=(el.discount_price/el.original_price)*100;
        product=el.item;
        arr.push( new item_object(product,discount_percentage));
    })

    return arr;

}

// create a simple function that create a object when it require 
let arr=new Array();
function item_object(item,price){
    this.item=item;
    this.discount_percentage=price;
}

// calling the function
console.log("list is " ,percentage_fun(list_item));