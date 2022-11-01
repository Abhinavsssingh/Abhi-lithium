const a = [2,3,5,7,9]
const b = []
for(i of a){
    isPrime=true
    for(j=2;j<i;i++){
        
        if(i%j==0){
            isPrime=false
        }
        break
    }
    if(isPrime){
        b.push(i)
    }
}
console.log(b)