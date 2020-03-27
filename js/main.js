let doc=document;
let taskAdder = doc.querySelector('#task-adder');
let buttonSubmit = doc.querySelector('#submit-button');
let unList = doc.querySelector('#list-todo');

buttonSubmit.addEventListener('click', addToList);

function addToList(e){
    e.preventDefault();
    let li=doc.createElement('li');
    li.className='list-group-item';
    var time = getTime();
    var time2 = "Posted on: " + time;
    var finalText = taskAdder.value
    let text = doc.createTextNode(finalText);
    let textTime = doc.createTextNode(time2);
    let button = doc.createElement('Button');
    let newButton = doc.createElement('button');
    newButton.className = "float-right btn btn-info";
    button.id ='delete';
    button.className = 'float-right btn btn-danger';
    let buttonText = doc.createTextNode("Delete");
    button.appendChild(buttonText);
    newButton.appendChild(textTime);
    li.appendChild(text);
    li.appendChild(newButton);
    li.appendChild(button);
    unList.appendChild(li);
    taskAdder.value = '';
}



function getTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var time = h + ":" + m + ":" + s;
    return time
}

function deleteFromList(e){
    if(e.target.id=='delete'){
        let taskDel = e.target.parentNode;
        unList.removeChild(taskDel);

    }
}

unList.addEventListener('click', deleteFromList);

let searchText = doc.querySelector('#search');
searchText.addEventListener('keyup', searchList);

function searchList(e){
    // e.preventDefault();
    let toDo = doc.querySelectorAll('.list-group-item');
    let text = searchText.value.toLowerCase();
    // console.log(toDo);
    for(let i=0; i<toDo.length ; i++){
        if(toDo[i].firstChild.textContent.toLowerCase().includes(text)===true){
            toDo[i].style.display = 'block';
        }
        else{
            toDo[i].style.display = 'none';
        }
    }
}

let deleteAll = doc.querySelector('#delete-all');
deleteAll.addEventListener('click', deleteAllList);

function deleteAllList(e){
    e.preventDefault();
    var x = confirm("Are you sure you want to delete all your tasks?")
    if(x == true){
        while(unList.firstChild){
            let y = unList.firstChild;
            unList.removeChild(y);
        }
        alert("All the contents will be deleted. Are you sure you want them to be deleted?")

    }
    else{
        alert("Deletion process cancelled")
    }
}


// change the ui
// when the text is updated, time of adding should be updated.
