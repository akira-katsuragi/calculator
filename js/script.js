(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let eqaul = document.querySelector('.btn-equal')
    let del = document.querySelector('#delete');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            console.log(value)
            screen.value += value;
            
        })
        
    });

  
   
    eqaul.addEventListener('click',function(){
        if(screen.value === ''){
            screen.value = "please enter";
        }else{
            let answer= eval(screen.value);
            screen.value = answer;}
    })
    clear.addEventListener('click',()=>{
        screen.value = "";        
    })
    

})();

function deleteChar(input) {
    if (input.value.length == 1) {
        input.value = "";
    } else {
        input.value = input.value.substring(0, input.value.length - 1);
    }
}

