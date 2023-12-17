let message = "Bangladesh1234";
let onlyLettersArray = message.split('').filter(char => /[a-zA-Z]/.test(char)).join('');
console.log(onlyLettersArray)

