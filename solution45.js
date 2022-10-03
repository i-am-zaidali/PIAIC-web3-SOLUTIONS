
// Solution 45

// Im not a pro at js so i didnt know if a way to get variadic keeyword argumnent exists.
// even google searches yielded nothing.
// No instead im just recieving an options object and then using the keys to get the values.
let car = (manufacturer, model, options) => {
    let car_dict = { manufacturer, model }

    if(options){
        for (let key in options){
            car_dict[key] = options[key];
        }
    }

    return car_dict;
};

console.log(car("Toyota", "Corolla"));
console.log(car("Toyota", "Corolla", {color: "red", transmission: "automatic"}));

