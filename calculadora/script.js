function clearInput() {
    document.getElementById('input').value = '';
}

function appendInput(value) {
    document.getElementById('input').value += value;
}

function calculate() {
    try {
        document.getElementById('input').value = eval(document.getElementById('input').value);
    } catch (error) {
        document.getElementById('input').value = 'Error';
    }
}
