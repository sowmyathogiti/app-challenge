function multiply()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

if ('serviceWorker' in navigator) { window.addEventListener('load', () => { 
        navigator.serviceWorker.register('./service-worker.js') }) }