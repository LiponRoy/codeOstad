const myArray = [
    {name:"Nirmal",price:12},
    {name:"Ananda",price:50},
    {name:"Joton",price:2}
]

const ascending_order_sort =myArray.sort((a,b)=>{
    if(a.price>b.price){
        return 1
    }
    if(b.price>a.price){
        return -1
    }

    return 0
})
console.log("ascending, ",ascending_order_sort)