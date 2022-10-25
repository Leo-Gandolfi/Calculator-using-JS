const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (digit) => {
        switch(digit.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    operation = display.innerText
                    display.innerText = "Operation error"
                    setTimeout(() => { display.innerText = operation }, 1500);
                }
                break;
            case 'Del':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += digit.target.innerText;
        }
    });
});