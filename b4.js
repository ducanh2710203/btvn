function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num/2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num && num !== 0) {
        return num+ " là số hoàn hảo";
    } else {
        return num+ " không phải số hoàn hảo";
    }
}

console.log(isPerfectNumber(8128))
console.log(isPerfectNumber(12))
console.log(isPerfectNumber(54))
console.log(isPerfectNumber(876))