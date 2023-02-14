const objectArray = [
    { id: 1, name: "Alice", hobbies: ["reading", "painting", "swimming"] },
    { id: 2, name: "Bob", hobbies: ["hiking", "running"] },
    { id: 3, name: "Charlie", hobbies: ["reading", "cooking"] }
  ];
  
  const filteredArray = objectArray.filter(obj => obj.hobbies.some(hobby => hobby === "reading"));
  
  console.log(filteredArray);
  