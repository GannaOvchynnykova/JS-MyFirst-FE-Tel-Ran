const input = document.querySelector('#input');
const btnStart = document.querySelector('#startBtn');
const btnStop = document.querySelector('#stopBtn');
const result = document.querySelector('.result');

let count;
let id;
input.focus();

btnStart.onclick = startTimer;
btnStop.onclick = stopTimer;

function startTimer(){
    count = parseInt(input.value);
    if(isNaN(count)) return;
    btnStart.disabled = true;   //same  //btnStart.setAttribute('disabled', true);
    btnStop.disabled = false;
    input.disabled = true;
    result.innerText = count;
    id = setInterval(function(){
        count--;
        if (count > 0){
            result.innerText = count;
        }else{
            stopTimer();
        }
    }, 1000)
}

function stopTimer(){
    clearInterval(id);
    btnStart.disabled = false;
    btnStop.disabled = true;
    if (count > 0){
        result.innerHTML = 'Timer is stopped';
        input.value = count;
    }else{
        result.innerHTML = 'Time is over';
        input.value = '';
        input.disabled = false;
        input.focus();
    }
}