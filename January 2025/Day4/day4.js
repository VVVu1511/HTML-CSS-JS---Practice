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

function filterB3(){
    input_box = document.querySelector('.inputbox');
    list_item = document.querySelectorAll('.list li');

    input_box.addEventListener('input',()=>{
        let text_input = input_box.value;

        for(let i = 0; i < list_item.length; i++){
            if(list_item[i].textContent.substring(0,text_input.length) != text_input){
                list_item[i].style.display = 'none';
            }
            else list_item[i].style.display = 'block';
        }
    });
}

function enlargeImage(){
    small_pic = document.querySelector('#b5 > .image');
    big_pic = document.querySelector('.modal');
    
    small_pic.addEventListener('click',()=>{
        big_pic.style.display = 'block';
    });
}

function removeModal(){
    btn = document.querySelector('.modal > .button_out');
    big_pic = document.querySelector('.modal');

    btn.addEventListener('click',()=>{
        big_pic.style.display = 'none';
    });
}


removeModal();
enlargeImage();
smallMoveDownB1();
filterB3();


