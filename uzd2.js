function fizzBuzz() {
    let n = parseInt(document.getElementById("numberInput1").value);
    let result = [];
    for (let i = 1; i < n + 1; i++){
        let a = "";
        if (i % 3 === 0) {
            a += "fizz";
        }
        if (i % 5 === 0) {
            a += "buzz";
        }
        result.push(a === "" ? i : a);
    }
    document.getElementById("outputLine1").textContent = result;
}