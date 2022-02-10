function dis(val){
    document.getElementById('edu').value += val;
}

function solve(){
    let x=document.getElementById('edu').value;
    let y=eval(x);
    console.log(y);
    document.getElementById('edu').value=y;
if(y===undefined){
    window.alert('Please make the calculation at least 2 numbers');
    document.getElementById('edu').value='';
}

}

function clr(){
    document.getElementById('edu').value= '';
}

const number=document.getElementById('edu');


number.addEventListener('input',condition);
function condition(){
    // console.log('hay');
    if(number.value !== null){
        window.alert("Please dont't write the input box and make a calculation");
        number.value='';
    }
}

