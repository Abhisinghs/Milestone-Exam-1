//set the prompt

let my_cart=[{name:"prdouct_1" ,price:50 ,qnt: 2 },
    {name:"prdouct_1" ,price:100 ,qnt: 1 },
    {name:"prdouct_1" ,price:25 ,qnt: 4 },
    {name:"prdouct_1" ,price:20 ,qnt: 5 }]
let total_cost=0;

//arrow function to calculate total cost
// console.log((()=>{for (const element of my_cart) {
//     total_cost+=element.price;
// }
// return total_cost})(my_cart));


// using map function 
console.log(((my_cart)=>{
    my_cart.map((el)=>{
        total_cost+=el.price;
    })
})(my_cart));

console.log(total_cost);
