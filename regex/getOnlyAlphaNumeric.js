let message = "Bangladesh12,@:3467";
let onlyLettersArray = message.split('').filter(char => /[0-9a-zA-Z]/.test(char)).join('');
console.log(onlyLettersArray)

