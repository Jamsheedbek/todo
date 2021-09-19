var todos = [];
button.addEventListener('click', function(e){
    if(document.getElementById('input').value == ''){       
        alert('Qatorga belgi kiritilishi shart!')       
    } else{
        todos.push(document.getElementById('input').value);
        var a = Number(todos.indexOf(document.getElementById('input').value))
        document.getElementById('schedule').textContent += a + 1 + ' - ' + todos[a] + '; ';
        document.getElementById('input').value = '';
    }
})