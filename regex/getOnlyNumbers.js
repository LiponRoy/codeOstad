let message = "Bangladesh123467";
let onlyLettersArray = message.split('').filter(char => /[0-9]/.test(char)).join('');
console.log(onlyLettersArray)

