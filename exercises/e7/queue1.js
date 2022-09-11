/* This is example for queue using an array */
let theatre_tickets = [];
theatre_tickets.unshift("customer 1");
theatre_tickets.unshift("customer 2");
theatre_tickets.unshift("customer 3");
theatre_tickets.unshift("customer 4");
theatre_tickets.unshift("customer 5");
theatre_tickets.unshift("customer 6");
theatre_tickets.unshift("customer 7");
theatre_tickets.unshift("customer 8");

theatre_tickets.pop()
console.log(theatre_tickets)
theatre_tickets.pop()
console.log(theatre_tickets)
theatre_tickets.pop()
console.log(theatre_tickets)
theatre_tickets.pop()
console.log(theatre_tickets)
theatre_tickets.pop()
console.log(theatre_tickets)
theatre_tickets.pop()
console.log(theatre_tickets)
theatre_tickets.pop()
console.log(theatre_tickets)
theatre_tickets.pop()
console.log(theatre_tickets)

/* This is example for stack using an array */
let girls_bangles = [];
girls_bangles.push("bangle 1");
girls_bangles.push("bangle 2");
girls_bangles.push("bangle 3");
girls_bangles.push("bangle 4");
girls_bangles.push("bangle 5");
girls_bangles.push("bangle 6");
girls_bangles.push("bangle 7");
girls_bangles.push("bangle 8");

girls_bangles.pop()
console.log(girls_bangles)
girls_bangles.pop()
console.log(girls_bangles)
girls_bangles.pop()
console.log(girls_bangles)
girls_bangles.pop()
console.log(girls_bangles)
girls_bangles.pop()
console.log(girls_bangles)
girls_bangles.pop()
console.log(girls_bangles)
girls_bangles.pop()
console.log(girls_bangles)
girls_bangles.pop()
console.log(girls_bangles)

/* This is example for concat using an array */

let mode_of_transport = ["car","flight","bike"]
let mode_of_transport1 = ["ship","cycle","by walk","auto"]
let all_modes = mode_of_transport.concat(mode_of_transport1)
console.log(all_modes)

/* This is example for splice using an array */

let animals =["tiger","lion","wolf","tiger"]
animals.splice[2,4,"deer","elephant"]
console.log(animals)
/* and also we can remove using splice */

animals.splice[1,3]
console.log(animals)

/* This is example for ascending and descending order using an array */

let vegetables = ["tomato","onion","potato"]
vegetables.sort()
console.log(vegetables)
vegetables.reverse()
console.log(vegetables)