let arr = [1, 2, 4, 5, 6, 7, 2, 4]
let a = 3

let B = []
let C = []
let j = 0
for (let i = a; i < arr.length+a; i= i +a) {
    for ( j ; j < i; j++) {
        console.log(j)
        B.push(arr[j])
        B=B.filter(n => n)
    }

    C.push(B)

    B=[]

}

console.log(C)
