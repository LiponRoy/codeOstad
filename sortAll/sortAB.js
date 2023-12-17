
const myStr="wxyzabcd"

const alpha_ascending_order_sort = myStr.split("").sort((a,b)=>a.localeCompare(b)).join("");
const alpha_descending_order_sort = myStr.split("").sort((a,b)=>b.localeCompare(a)).join("");

console.log(alpha_ascending_order_sort)
console.log(alpha_descending_order_sort)