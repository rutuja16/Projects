const container = document.getElementById('container'); 
const header = document.getElementById('header');                      //container

const listBtn = document.getElementById('listBtn');                   //add list button
const parent = document.getElementById('parent');                               // task cards body

const model = document.getElementById('model_List');   

const task_name = document.getElementById('task_name');
const add_list=document.getElementById('add_list');
const close_list = document.getElementById('close_list');

const model_Item = document.getElementById('model_Item');

const item_name = document.getElementById('item_name');                   //add task content
const add_item = document.getElementById('add_item');

const container2 = document.getElementById('container2'); 
const backBtn = document.getElementById('backBtn'); 
const page2AddBtn = document.getElementById('page2AddBtn'); 

function openModel() {
    model.style.display='block'
}
function closeModel() {
    model.style.display='none'
}

listBtn.addEventListener('click', openModel);
close_list.addEventListener('click', closeModel)

add_list.addEventListener('click', () => {
    closeModel()
    document.getElementById('hide').style.display='none';
    let child =document.createElement('div')
    child.classList.add('child')
    parent.appendChild(child);
    console.log(parent);

    let task_title=document.createElement('h2');
    task_title.classList.add('task_title');

    task_title.innerHTML=`${task_name.value}`;
    child.appendChild(task_title);

    let line = document.createElement('hr');
    line.classList.add('line');
    child.appendChild(line);

    task_title.addEventListener('click', myFunc)

    function myFunc(e) {
        //console.log(e.target.parentElement.parentElement)
        e.target.parentElement.classList.toggle('active');
        let activeTask = document.querySelectorAll('.child');
        //console.log(activeTask)
        for (let i = 0; i < activeTask.length; i++) {
            //console.log(e.target.parentElement.parentElement)
            if (activeTask[i] !== e.target.parentElement.parentElement) {
                activeTask[i].classList.add('inactive');
                header.classList.add('inactive');
                container2.classList.add('active');

                let page2Title = document.createElement('h2');
                page2Title.innerHTML = `
                <span style="color:tomato;">${task_title.innerHTML}</span> 
                `;
                backBtn.after(page2Title);

                backBtn.addEventListener('click', () => {
                    header.classList.remove('inactive');
                    activeTask[i].classList.remove('inactive');
                    container2.classList.remove('active');
                    page2Title.remove();

                });
                page2AddBtn.addEventListener('click', () => {
                    model_Item.style.display="block";
                    header.classList.remove('inactive');
                    activeTask[i].classList.remove('inactive');
                    container2.classList.remove('active');
                    page2Title.remove();
                });
            }
        }
        e.target.removeclass('task_title');
    }
    closeModel()
    task_name.value=''

    let task_body=document.createElement('div');
    task_body.classList.add('task_body');
    task_body.innerHTML=`
    <div class="place" >
        <span class="material-icons removeTask"  >
        remove_circle
        </span>
        <span class="material-icons add_item"  >
        add_circle
        </span>
    </div>
    `
    child.appendChild(task_body)
});

parent.addEventListener('click',strikeText);

function strikeText(e){
    let item= e.target;
    if(item.classList.contains('pendingIcon')){
        item.parentElement.classList.toggle('cut');
    }
}

//remove tasks

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeTask')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
});

// adding tasks

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('add_item')) {
        model_Item.style.display="block";
        parentNode = e.target.parentNode.parentNode.parentNode;
        console.log(parentNode)
    }
});

add_item.addEventListener('click',()=>{
    model_Item.style.display="block";

    let taskBody =document.createElement('p');
    taskBody.classList.add('taskBody');
    parentNode.appendChild(taskBody);
    

    let subItem = document.createElement('div');
    subItem.classList.add('subItem');
    subItem.id = 'pendingItems';

    subItem.innerHTML = `
        <span class="material-icons pendingIcon ">indeterminate_check_box</span>
        <p class="scratch" id="item_strike">${item_name.value}</p>
        `;
    parentNode.appendChild(subItem);
    item_name.value = '';
    model_Item.style.display="none";

})

