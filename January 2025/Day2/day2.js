
function b5switchButton(){
    let active = 0;
    let all_buttons = document.querySelectorAll('.b5s2e');
    let all_papers = document.querySelectorAll('.b5s1e');

    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].addEventListener('click',()=>{
            let pre_active = active;
            active = i;

            all_buttons[pre_active].classList.remove('b5-activated-button');
            all_buttons[active].classList.add('b5-activated-button');
            all_papers[pre_active].classList.remove('b5-activated-paper');
            all_papers[active].classList.add('b5-activated-paper');
        });
    }

}



b5switchButton();