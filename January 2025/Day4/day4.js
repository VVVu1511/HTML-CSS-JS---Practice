function smallMoveDownB1(){
    button = document.querySelector('.btn');
    small_box = document.querySelector('.small');
    big_box = document.querySelector('.big');
    let interval;

    button.addEventListener('click',()=>{
        let i = 0;
        
        clearInterval(interval);
        interval = setInterval(()=>{
            small_box.style.top = i + 'px';
            small_box.style.left = i + 'px';

            i++;
            if(i > 350){
                clearInterval(interval);
            }
        },10);
        
    });


}

smallMoveDownB1();



