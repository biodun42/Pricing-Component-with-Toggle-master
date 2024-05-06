const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');


function changeOne(){
    buttonOne.style.display = 'none';
    buttonTwo.style.display = 'block';
    document.getElementById('textone').innerText = '$19.99';
    document.getElementById('texttwo').innerText = '$24.99';
    document.getElementById('textthree').innerText = '$39.99';
}

function changeTwo(){
    buttonTwo.style.display = 'none';
    buttonOne.style.display = 'block';
    document.getElementById('textone').innerText = '$199.99';
    document.getElementById('texttwo').innerText = '$249.99';
    document.getElementById('textthree').innerText = '$399.99';
}