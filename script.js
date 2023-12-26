let clock;
function debouncegetSum(){
    clearTimeout(clock);
    clock = setTimeout(function(){
        getSum()
    },100)
}
async function getSum(){
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let resultField = document.getElementById('result');
    try{
        let response = await fetch('https://caluculatesum.onrender.com/add?num1='+input1+'&num2='+input2);
        let data = await response.json();
        let result = data.Result;
        resultField.innerHTML = result;
    }catch(e){
        console.log(e)
    }
}