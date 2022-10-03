// Solution 44

let make_sandwich = (...toppings) => {
    console.log(`You ordered a sandwich with the following toppings:`);
    toppings.forEach(
        (topping) => {
            console.log(topping);
        }
    )
}

make_sandwich("cheese");
make_sandwich("cheese", "tomato");
make_sandwich("cheese", "tomato", "onion");
make_sandwich("tomato", "lettuce", "onion", "mayo");
    