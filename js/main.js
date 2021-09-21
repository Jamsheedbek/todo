var todos = [];
var add = document.getElementById('add');
var removeFirst = document.getElementById('removeFirst');
var removeLast = document.getElementById('removeLast');
var schedule = document.getElementById('schedule');

// ================ Add todo =======================================

add.addEventListener('click', function(e){
    if(document.getElementById('input').value == ''){       
        alert('Qatorga belgi kiritilishi shart!')       
    } else{
        todos.push(document.getElementById('input').value);
        var indexOfTodo = Number(todos.indexOf(document.getElementById('input').value))
        // document.getElementById('schedule').textContent += a + 1 + ' - ' + indexOfTodo + '; ';
        
        // if(indexOfTodo == 0) ++indexOfTodo
        
        schedule.innerHTML += `<div id='todo${indexOfTodo+1}'>${indexOfTodo + 1}. ${todos[indexOfTodo]}<div>`

        console.log(todos)

        document.getElementById('input').value = '';
    }
})

// ================== Remove todo from last =======================

removeLast.addEventListener('click', function(e){
    if(todos == ''){       
        alert('Hech qanday amal kiritilmagan')       
    } else{
        todos.pop(document.getElementById('input').value);
        console.log(todos);
    }
})

// ================ Remove todo from first =========================

removeFirst.addEventListener('click', function(e){
    if(todos == ''){       
        alert('Hech qanday amal kiritilmagan!')       
    } else{
        todos.shift(document.getElementById('input').value);
        console.log(todos) 
    }
    
})