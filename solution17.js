// Solution 17

let guests = ["emma watson", "ed sheeran", "henry cavil"]; // Dont have friends so might as weel invite actors

guests.forEach((guest) => {console.log(`${guest} is invited to my party`)});

console.log("Unfortunately, emma watson can't make it to the party");

guests[guests.indexOf("emma watson")] = "milly alcock";

guests.forEach((guest) => {console.log(`${guest} is invited to my party`)});

console.log("I found a bigger table");

guests.unshift("james bond");
guests.splice(Math.round(guests.length/2), 0, "michael jackson");
guests.push("harry styles");

guests.forEach((guest) => {console.log(`${guest} is invited to my party`)});

console.log("Oh heck, my dinner table won't arrive in time. I can only invite two people");

while(guests.length > 2){
    console.log(`Sorry ${guests.pop()}, you're not invited to my party`);
};

guests.forEach((guest) => {console.log(`${guest} is invited to my party`)});
