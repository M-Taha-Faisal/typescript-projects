import inquirer from 'inquirer';
let userId = await inquirer.prompt(({
    name: "UserId",
    type: "input",
    message: "Enter your User ID"
}));
let userPin = await inquirer.prompt(({
    name: "UserPin",
    type: "number",
    message: "Enter Your Pin"
}));
console.log(`Welcome ${userId.UserId}`);
let Options = await inquirer.prompt(({
    name: "choices",
    type: "list",
    choices: ["Balance Inquiry", "Balance Transaction"]
}));
if (typeof userPin.UserPin === "number") {
    switch (true) {
        case Options.choices === "Balance Inquiry":
            console.log(`$${Math.random() * 10000}`);
            break;
        case Options.choices === "Balance Transaction":
            let amount = await inquirer.prompt(({
                name: "transaction",
                type: "number",
                message: "Enter Transaction Amount: "
            }));
            console.log(`$${amount.transaction} transacted Successfully!`);
            break;
        default:
            console.log("Error");
            break;
    }
}
//   if (choice.choices[0]){
//     console.log(`${Math.random()*1000}`)
//   } else if(choice.choices[1]){
// // let amount=await inquirer.prompt(({
// //     name:"amount",
// //     type:"number",
// //     message:"Enter transaction amount: "
// // }))
// console.log(`Transaction Succesfull!`)
//   }
// let choice = await inquirer.prompt(({
//     name: "choice",
//     type: "list",
//     choices: ["signUp","Log In"],
//     message: "Enter operation:"
// }));
// async function signUp(){
//     let userId=await inquirer.prompt(({
// name:"signUp",
// type:"input",
// message:"Enter Your UserId"
//     }))
//     let userPin=await inquirer.prompt(({
//       name:"PIN",
//       type:"number",
//       message:"Enter your User pin"  
//     }))
//     let User=[]
//     if (userId && userPin){
//     User.push({ID:userId,Pin:userPin})
//     }
//     console.log(User) 
// }
// if (choices[0])
// }try {
//    let Entry=signUp()
//    console.log(Entry) 
// }catch {
//     console.log("Error")
// }
// switch(true){
//     case choice[0]:signUp()
// }
// let Username=await inquirer.prompt((
//     {
//     name:"userId",
//     type:"input",
//     message:"Enter your UserId"
// }
// ))
// let userPin=await inquirer.prompt(({
//     name:"userPin",
//     type:"number",
//     message:"Enter your User PIN"
// }))
// let arrOfUsers=["Ali","Taha","Asad"];
// let pinsOfUsers=[101,102,103]
