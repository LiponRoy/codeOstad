const myArray = [
    {name:"Nirmal",price:12},
    {name:"Ananda",price:50},
    {name:"Joton",price:2}
]

const ascending_order_sort =myArray.sort((a,b)=>{
    if(a.name>b.name){
        return 1
    }
    if(b.name>a.name){
        return -1
    }

    return 0
})
console.log("ascending, ",ascending_order_sort)