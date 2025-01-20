
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
        all_buttons[i].addEventListener('mouseover',()=>{
            all_buttons[active].classList.add('b5-activated-button');
        });
    }

}



b5switchButton();


let array = [1,2,3,4];

array.sort(function(a,b){return b - a});

console.log(array);