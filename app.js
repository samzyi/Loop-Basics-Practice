
/* 

1. What is a loop?
a function that repeats

2. What is the syntax of a loop?
for(initializing, terminating, incrementing){
    //tasks to be repeated
}
initializing = start at?, ex. var i = 0
terminating = end at?, ex. i > 10
incrementing = how often/periods, intervals in between 

ex. 
i = i + 1
shortcut: i++
i = i + 2
shortcut: i+=2
i = i + 3
shortcut: i+=3

for(i = 0; i < 5; i++){
    console.log("I am smart.");
    var i = i+2;
}
1- I am smart. i = 0
2- I am smart. i = 1
3- I am smart. i = 3
4- I am smart. i = 4
5- I am smart. i = 4
6 -- i  = 5 X

3. Give a few examples.
*/

//Create a loop that prints "HTA rocks." 3 times

for(var i = 0; i<3; i++){
    console.log("HTA rocks." + i);
}

//Create a loop that prints even numbers.
for(i = 0; i<10; i+=2){
    console.log(i);
}

//4. Create a loop that prints numbers from 0-10.

for(i = 0; i<10; i++){
  console.log(i);
}


console.log('');

//5. Create a loop that prints odd numbers from 1-9.

for(i = 1; i<10; i+=2){
  console.log(i);
}

console.log('');

//6. Create a loop that prints multiples of 3 from 3-15.

for(i = 3; i<=15; i+=3){
  console.log(i);
}

console.log('');

//7. Create an array that lists 3 things you'd like to accomplish one day.

var things = ['get into med school.' + 'go to the south pole station.' + 'pilot a f22.']

//8. Create a loop that prints out each of the things you'd like to accomplish listed in your #7 array.  The loop should print out three
//separate sentences, like this:
//One day, I'd like to _element 1_.
//One day, I'd like to _element 2_.
//One day, I'd like to _element 3_.



for(i = 0; i<things.length; i++){
  console.log("One day I'd like to " + things[i]);
}

console.log('');

//9. Create an array that lists 3 places you'd like to visit one day.

var places = ['australia.' + 'greece.' + 'russia.']


//10. Create a function (with a loop) that prints out each of the places you'd like to visit listed in your #9 array.  The function
//should print out three separate sentences, like this:
//One day, I'd like to go to _element 1_.
//One day, I'd like to go to _element 2_.
//One day, I'd like to go to _element 3_.

for(i = 0; i<places.length; i++){
  console.log("One day I'd like to go to " + places[i]);
}

console.log('');