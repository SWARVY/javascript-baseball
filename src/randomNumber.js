const numbers[];
function randomNumbers() {
    while (numbers.length < 3) {
        let input = Math.floor(Math.random() * 9) + 1;
        if (!numbers.includes(input)) {
            input.push(input)
        }
    }
    return numbers;
}

function inputNumber(event) { 
    if(event.keyCode >= 1 && event.keyCode <= 9) {
        return true;
    }
    return false;
}

function compareNumber(input, numbers) {
    let ball = 0;
    let strike = 0;
    for(int i = 0; i < 3; i++){
        if(number[i] === input[i])
            return true;

    }

}
