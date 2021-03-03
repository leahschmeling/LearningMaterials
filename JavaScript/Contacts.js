const contacts = {
    dan: '555-330-2289',
    dante: '555-660-2295',
    jenny: '555-867-5309',
    keisha: '660-228-4765',
    jacob: '992-443-0087',
    don: '667-333-4427'
    };

 
    const prop = prompt(`Whose number do you need?`);

   if (prop) {
//       alert(contacts[prop]);
      console.log(contacts[prop]);
   } else {
       console.log("no results");
   }

  
    

// // Challenge
// const contacts1 = {
//     dan: {
//         number: '555-330-2289',
//         address: '123 Pelegrino St.',
//         state: 'CA'
//     },
//     george: {
//         number: '555-123-3321',
//         address: '550 Cappuccino Ave.',
//         state: 'GA'
//     }
// };

// console.log(contacts1.george.address);
