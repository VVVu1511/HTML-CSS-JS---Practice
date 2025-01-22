function addOneDeleteTasks(delete_block,tasks,list_item){
    delete_block.addEventListener('click',()=>{
        tasks.removeChild(list_item);
    });
}

function addOneDoneTask(element,tick,horizontal){
    element.addEventListener('click',()=>{
        element.style.backgroundColor = 'gray';
        
        tick.style.display = 'block';
        horizontal.style.display = 'block';
        tick.style.borderRightWidth = `${element.textContent.length * parseFloat(window.getComputedStyle(element).fontSize) * 0.6}px`;
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

            new_task.appendChild(tick);
            new_task.appendChild(horizontal);
            delete_task.appendChild(delete_text);
            new_task.appendChild(delete_task);
            tasks.appendChild(new_task);

            tick.classList.add('tick');
            horizontal.classList.add('horizontal');
            delete_text.classList.add('delete_text');
            delete_task.classList.add('delete');
            new_task.classList.add('test');

            addOneDeleteTasks(delete_task,tasks,new_task);
            addOneDoneTask(new_task,tick,horizontal);
        }
    });
}

function doneTasks(){
    list_items = document.querySelectorAll('.test');
    tick_lists = document.querySelectorAll('.tick');
    horizontal_lists = document.querySelectorAll('.horizontal');

    for(let i = 0; i < list_items.length; i++){
        addOneDoneTask(list_items[i],tick_lists[i],horizontal_lists[i]);
    }
}


deleteTasks();
addTasks();
doneTasks();