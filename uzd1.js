function isPrime(number) {
    for (i = 2; i < number - 1; i++){
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function naturalNumbers() {
    let n = parseInt(document.getElementById("numberInput").value);
    const primeNumbers = [];
    for (let i = 2; i < n+1; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    document.getElementById("outputLine").textContent = primeNumbers;
}