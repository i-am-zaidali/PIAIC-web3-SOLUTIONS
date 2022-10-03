
// Solution 45
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
