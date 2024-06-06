$(document).ready(function() {
    const form = $('#form-lista');
    const tarefas = [];

    form.on('submit', function(e) {
        e.preventDefault();
        addTarefa();
    });

    $('ul.tarefas').on('click', 'li', function() {
        $(this).toggleClass('checked');
    });

    function addTarefa() {
        const inputTarefa = $('#tarefa');
        const tarefa = inputTarefa.val().trim();

        if (tarefas.includes(tarefa)) {
            alert(`A tarefa "${tarefa}" já foi inserida!`);
        } else if (tarefa !== '') {
            tarefas.push(tarefa);
            $('ul.tarefas').append(`<li>${tarefa}</li>`);
        }

        inputTarefa.val('');
    }
});