function Fibonacci(number) {
    let a = 0, b = 1;
    
    if (number === 0 || number === 1) {
        return `${number} pertence à sequência de Fibonacci.`;
    }

    let nextFib = a + b;
    while (nextFib <= number) {
        if (nextFib === number) {
            return `${number} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = nextFib;
        nextFib = a + b;
    }
    
    return `${number} não pertence à sequência de Fibonacci.`;
}
 
function CFibonacci() {
    const number = parseInt(document.getElementById('fib').value);
    const result = Fibonacci(number);
    document.getElementById('result').innerText = result;
}
