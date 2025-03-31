function countDigits() {
    let count = 0;
    let nStr = document.getElementById("nNumberInput").value.trim();
    let mStr = document.getElementById("mNumberInput").value.trim();
    let n = BigInt(nStr); 
    let m = BigInt(mStr); 

    while (n > 0n) {
        if (n % 10n === m) {
            count++;
        }
        n = n / 10n; 
    }

    document.getElementById("outputLine2").textContent = count;
}
