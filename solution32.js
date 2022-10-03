// Solution 32

let current_users = ["zaid", "zia", "mohammed", "saif", "talib", "admin"];

let new_users = ["talib", "zaid", "afifa", "laiba"];

new_users.forEach(
    (new_user) => {
        if(current_users.includes(new_user)){
            console.log(`${new_user} is taken`);
        } else {
            console.log(`${new_user} is available`);
        }
    }
)
    