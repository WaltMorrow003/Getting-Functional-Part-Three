//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE




/*
1. Return the all friends of a given customers name.
When returning the friends of the customer it
should be a string and NOT the friends array. 
*/

function friendsOfCustomer(name){
  //CODE BELOW HERE
 for(var i= 0; i <= customers.length -1; i++){
   if(name === customers[i].name){
   for(var g = 0; g <= customers[i].friends -1; g++){
     console.log(customers[i].friends[g].name)
   }
   }
 }


  //CODE ABOVE HERE
}





/*
2. Return the phone number and address of a 
given customer when thier name is entered into the 
function.
*/

function contactInfo(name){
  //CODE BELOW HERE
 for(var i= 0; i <= contact.length -1; i++){
   if(name === contact[i].name){
   for(var v = 0; v <= contact[i].info -1; g++){
     console.log(contact[i].info[v].name)
   }
   }
 }


  //CODE ABOVE HERE
}