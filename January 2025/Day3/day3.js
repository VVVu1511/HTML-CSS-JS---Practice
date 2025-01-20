function buttonWith3links(){
    dropdown_button = document.querySelector('#b2 .have3links');
    list_of_links = document.querySelectorAll('#b2 .list .special');

    for(let link of list_of_links){
        link.classList.add('inactive-item');
    }

    dropdown_button.addEventListener('click',()=>{
        if(dropdown_button.classList.contains('active-button') == true){
            dropdown_button.classList.remove('active-button');
            
            for(let link of list_of_links){
                link.classList.remove('active-item');
                link.classList.add('inactive-item');
            }
            
            
        }
        else{
            dropdown_button.classList.add('active-button');
            
            for(let link of list_of_links){
                link.classList.add('active-item');
                link.classList.remove('inactive-item');
            }

        }
    });

}

function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("b4").style.padding = "20px 10px";
        document.querySelector("#b4 .logo").style.fontSize = "25px";
        
        setTimeout(()=>{
            document.querySelector("#b4 .logo").textContent = "HEHE";
        },1000);

        setTimeout(()=>{
            document.querySelector("#b4 .logo").textContent = "COMPANY LOGO";
        },3000);
    }
    else{
        document.getElementById("b4").style.padding = "30px 10px 30px 10px";
        document.querySelector("#b4 .logo").style.fontSize = "30px";
    }
}


window.onscroll = function(){scrollFunction()};
buttonWith3links();