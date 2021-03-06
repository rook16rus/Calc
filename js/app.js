for (var keys = document.querySelectorAll("#calculator span"), operators = ["+", "-", "x", "÷"], decimalAdded = false, i = 0; i < keys.length; i++) keys[i].onclick = function (e) {
    var input = document.querySelector(".screen");
    let inputVal = input.innerHTML;
    let btnVal = this.innerHTML;
    let total;
    if ("=" == btnVal) {
        var equation = inputVal;
        let lastChar = equation[equation.length - 1];
        equation = equation.replace(/x/g, "*").replace(/÷/g, "/");
        if (operators.includes(lastChar) || "." == lastChar) {
            equation = equation.replace(/.$/, "")
        }
        equation && (total = eval(equation), -1 != total.toString().indexOf(".") && (total = total.toFixed(2)), input.innerHTML = total);
        decimalAdded = false;
    } else if ('C' == btnVal) {
        input.innerHTML = '';
    } else if (operators.indexOf(btnVal) > -1) {
        var lastChar = inputVal[inputVal.length - 1];
        console.log(lastChar);
        if ("" != inputVal && -1 == operators.indexOf(lastChar) || "" == inputVal && "-" == btnVal) {
            (input.innerHTML += btnVal)
        }
        if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
            input.innerHTML = inputVal.replace(/.$/, btnVal);
        }
        decimalAdded = false;
    } else "." == btnVal ? decimalAdded || (input.innerHTML += btnVal, decimalAdded = !0) : input.innerHTML += btnVal;
    e.preventDefault()
};

/*==== ТЗ-15 ====*/

const arr = ['cat', 'dog', 'clown', 'snake', 'begemoth', 'tiger'];
for (let i = 0; i < arr.length; i++) {
    if ((i % 2) == 0) {
        console.log(arr[i]);
    }
}

/*========*/

const cats =
    {
        'abyssinian': '😸',
        'american-bobtail': '🐱',
        'siam': '🙀',
        'bombay': '😼'
    };

for (key in cats) {
    if (key.length <= 4) {
        console.log(key);
    }
}

/*========*/

const someObject = {};

let addButton = document.getElementById('key_add');
let result = document.querySelector('.result');
let keyInput = document.getElementById('key');
let valueInput = document.getElementById('value');

addButton.onclick = function () {
    someObject[keyInput.value] = valueInput.value;
    result.insertAdjacentHTML("afterbegin", '<p>' + keyInput.value + ': ' + valueInput.value + '</p>');
};

/*========*/

const d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
const a = [];
const b = [];

for (let i = 0; i < d.length; i++) {
    if ((d[i] % 2) == 0) {
        a.push(d[i]);
    } else {
        b.push(d[i]);
    }
}

console.log(a);
console.log(b);
