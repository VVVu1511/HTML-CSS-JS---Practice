function addOneDeleteTasks(delete_block,tasks,list_item){
    delete_block.addEventListener('click',()=>{
        tasks.removeChild(list_item);
    });
}

function deleteTasks(){
    delete_blocks = document.querySelectorAll('.delete');
    tasks = document.querySelector('.tasks');
    list_items = document.querySelectorAll('.test');
    
    for(let i = 0; i < delete_blocks.length; i++){
        addOneDeleteTasks(delete_blocks[i],tasks,list_items[i]);
    }
}

function addTasks(){
    add_button = document.querySelector('.add');
    input_box = document.querySelector('.input_section_input > input')
    tasks = document.querySelector('.tasks');

    add_button.addEventListener('click',()=>{
        let text = input_box.value;
        
        if(text != ""){
            let new_task = document.createElement('li');
            let delete_task = document.createElement('div');
            let tick = document.createElement('div');
            let horizontal = document.createElement('div');
            let delete_text = document.createElement('p');
            delete_text.textContent = 'x';
            new_task.textContent = text;

            delete_task.appendChild(delete_text);
            delete_task.appendChild(tick);
            delete_task.appendChild(horizontal);
            new_task.appendChild(delete_task);
            tasks.appendChild(new_task);

            tick.classList.add('tick');
            horizontal.classList.add('horizontal');
            delete_text.classList.add('delete_text');
            delete_task.classList.add('delete');
            new_task.classList.add('test');

            addOneDeleteTasks(delete_task,tasks,new_task);
        }
    });
}

function doneTasks(){
    list_items = document.querySelectorAll('.test');

    list_items.forEach((element),()=>{

    });
}


deleteTasks();
addTasks();
doneTasks();