let prompt=require("prompt-sync")();


let customers_detail=[{customer_name:"abhishek" ,current_balance:50000},
{customer_name:"sumit kumar" ,current_balance:45000},
{customer_name:"sarthak goel" ,current_balance:20000},
{customer_name:"Rahul sing" ,current_balance:70000}]

console.log("customer in bank ",Object.values(customers_detail));
let user_1=prompt("select one member ");
console.log('1.deposite');
console.log('2.widthrawal');
let num=Number(prompt("choose your option "));

switch(num){
    case 1:
        let deposite_money=Number(prompt("Enter amount to deposite in your account : "));
        for (const customer of customers_detail) {
            if(customer.customer_name === user_1){
                customer.current_balance+=deposite_money;
            }
        }
        console.log("Money deposited successfully");
        break;
    case 2:
        let widthrawal_money=Number (prompt("Enter amount to widthrawal from your account"));
        for (const customer of customers_detail) {
            if(customer.customer_name === user_1){
                customer.current_balance-=widthrawal_money;
            }
        }
        console.log("Money widthrawal successfully ");
        break;
    default:
        console.log("sorry Your choice is different as given ");
}

prompt("press key to see customer detail ");
console.log(Object.values(customers_detail));



