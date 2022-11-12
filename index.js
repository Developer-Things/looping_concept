
forloop_method
var myStringArray = ["Hello","World",'vicky'];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    var text=myStringArray[i]
}

foreach_method
const array = ["one", "two", "three",]
array.forEach(function (item, index) {
  console.log(item, index);
});

forin_method
var arrays = ['a', 'b', 'c'];
for (var i in arrays) {
    console.log(arrays[i]);
}

arrayofobject_method
const people = [ {name: "john", age:23},
                {name: "john", age:43},
                {name: "jim", age:101},
                {name: "bob", age:67} ];

const john = people.find(a=> a.name === 'bob');
console.log(john);


foreach&forin_method
var students = [{
    name: "Mike",
    track: "track-a",
    achievements: 23,
    points: 400,
  },
  {
    name: "james",
    track: "track-a",
    achievements: 2,
    points: 21,
  },
]

students.forEach(myFunction);

function myFunction(item, index) {
  for (var key in item) {
    console.log( key  +" "+item[key])
  }
}


// map_methods
let employee=[{name:"david",age:42},
{name:"raj",age:32},
{name:"arjun",age:52},
{name:"vickram",age:22}]

let overview=employee.map(function(data){
  return data.name
})
console.log("overview: ", overview);

// filter_methods

const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n;
});
console.log("filteredArray: ", filteredArray);

for loop last iteration get
 const data = [1, 2, 3];
    let iterations = data.length;

    for (let item of data) {
      if (!--iterations)
        console.log(item + " => This is the last iteration...");
      else console.log(item);
    }


    
