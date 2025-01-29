function isValidEmail(email) {
  
    let pattern = /^[^\s@],[a-z],[]+$\W/;

    
    return pattern.test(email);
}


let email1 = "gowtham@gmail.com";
let email2 = "gowthamgmail.com";

console.log(isValidEmail(email1)); 
console.log(isValidEmail(email2)); 
