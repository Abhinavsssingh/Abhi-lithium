let a = [2,3,5,7,9]
const b =[]
for(i of a){
    let isPrime=true
    for(j=2;j<i;j++){
        if(i%j==0){
            isPrime=false
            break
        }
        // }else{
        //     isPrime=true
        // }
        }
    if(isPrime){
        b.push(i)
    }
}
console.log(b)