
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

    
