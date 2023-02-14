// To filter through an array inside of an object array in JavaScript, you can use the filter() method in combination with the some() method. Here is an example:

const objectArray = [
    { id: 1, name: "Alice", hobbies: ["reading", "painting", "swimming"] },
    { id: 2, name: "Bob", hobbies: ["hiking", "running"] },
    { id: 3, name: "Charlie", hobbies: ["reading", "cooking"] }
  ];
  
  const filteredArray = objectArray.filter(obj => obj.hobbies.some(hobby => hobby === "reading"));
  
  console.log(filteredArray);

 
//    In this example, objectArray is an array of objects that each contain an id, a name, and a hobbies array. 
//    To filter through this array and only keep the objects that have "reading" as one of their hobbies, we use the filter() method and pass in a callback function. 
//    Inside this function, we use the some() method to check if the hobbies array contains the string "reading". 
//    The some() method returns a boolean value that indicates whether at least one element in the array satisfies the condition. 
//    If some() returns true, the object is kept in the filtered array.

//    The resulting filteredArray contains only the objects that have "reading" as one of their hobbies.





  