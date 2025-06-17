let todolist = []
// let todolist = [{item: 'sample item', duedate: 'sampledate'}]
displayitems();

function addTodo(){
    let inptext = document.querySelector('#todo-input');
    let dateelement = document.querySelector('#todo-date');
    let tododate = dateelement.value;
    let todoitem = inptext.value;

    todolist.push({item : todoitem , duedate : tododate});
    inptext.value = '';
    dateelement.value = '';
    displayitems();
}


function displayitems(){
    let containerelement = document.querySelector('.todo-container');

    let newHtml='';

    for (let i=0; i < todolist.length; i++){
        
        let item = todolist[i].item;
        let duedate = todolist[i].duedate;

        if (item!=0 && duedate!=0){

        newHtml += `
        <span style="border:solid; border-radius:15px; text-align: center; padding-top: 4px;">${item}</span>
        <span style="border:solid; border-radius:15px; text-align: center; padding-top: 4px;">${duedate}</span>
        <button  style="
        height: 35px;
        border-radius: 10px;
        background-color: darkgreen;
        color: antiquewhite;
        font-size: larger;
        " onclick="todolist.splice(${i}, 1);
        displayitems();">Delete</button>
        `;
        }
    } 
    containerelement.innerHTML = newHtml;
}