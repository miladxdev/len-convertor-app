let equalButton = document.getElementById('equ');
let invertButton = document.getElementById('inv');
let options1 = document.getElementById('select1').querySelectorAll('option');
let options2 = document.getElementById('select2').querySelectorAll('option');
//let text1 = document.getElementById('text1');

function convert() {
    let text1 = document.getElementById('text1');
    let text2 = document.getElementById('text2');
    let selected1 = document.getElementById('select1').selectedIndex;
    let selected2 = document.getElementById('select2').selectedIndex;
    text2.value = text1.value * (options2[selected2].value / options1[selected1].value);
}

function invert() {
    let s1 = document.getElementById('select1').selectedIndex;
    let s2 = document.getElementById('select2').selectedIndex;
    document.getElementById('select1').selectedIndex = s2;
    document.getElementById('select2').selectedIndex = s1;
    convert();
}

equalButton.addEventListener('click', convert);
invertButton.addEventListener('click', invert);
text1.addEventListener('change', convert);
