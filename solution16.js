
// Solution 16

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