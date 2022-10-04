
// Solution 30 

let names = ["zaid", "zia", "mohammed", "saif", "talib", "admin"];

names.forEach(
    (name) => {
        if(name == "admin"){
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${name}, thank you for logging in again`);
        }
    }
)
    