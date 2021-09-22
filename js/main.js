var todos = [];
var add = document.getElementById('add');
var removeFirst = document.getElementById('removeFirst');
var removeLast = document.getElementById('removeLast');
var schedule = document.getElementById('schedule');
var input = document.getElementById('input');

// ================ Add todo =======================================

add.addEventListener('click', function(e){
    if(document.getElementById('input').value == ''){       
        alert('Qatorga belgi kiritilishi shart!')       
    } else{
        todos.push(input.value);
        var indexOfTodo = Number(todos.indexOf(input.value));
        var NEW_DIV = document.createElement('div');
        NEW_DIV.innerHTML = indexOfTodo + 1 +'. '+ todos[indexOfTodo];
        NEW_DIV.classList.add('fs-3','fw-bold');
        NEW_DIV.setAttribute('id', 'todo'+ Number(indexOfTodo + 1))
        schedule.appendChild(NEW_DIV);
        document.getElementById('input').value = '';
    }
})

var x = todos.length;

// ================== Remove todo from last =======================

removeLast.addEventListener('click', function(e){
    if(todos == ''){       
        alert('Hech qanday amal kiritilmagan')       
    } else{
        var a = todos.length;
        todos.pop();
        document.getElementById('todo'+ a).remove();
    }
})