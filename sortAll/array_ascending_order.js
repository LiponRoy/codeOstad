const myArray = [90,80,10,20,30,40,1,2,100]

const ascending_order_sort =myArray.sort((a,b)=>{
    if(a>b){
        return 1
    }
    if(b>a){
        return -1
    }

    return 0
})
console.log("ascending, ",ascending_order_sort)
