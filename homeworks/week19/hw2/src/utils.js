function addTodoTasks(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const todoEvent = `<div class="todo-event" id="${arr[i].todoID}">
                                <div class="todo-event-title" style="background-color:${arr[i].todoLevel}">
                                    ${arr[i].todoTitle}
                                </div>
                                <div class="todo-event-context">
                                    ${arr[i].todoComment}
                                </div>
                                <div class="todo-event-options" id="${arr[i].todoID}" style="display:none">
                                    <form>
                                        <input class="todo-event-options-complete" type="button" value="C">
                                        <input class="todo-event-options-update" type="button" value="U">
                                        <input class="todo-event-options-delete" type="button" value="D">
                                    </form>
                                </div>
                            </div>
                            `;
    if (arr[i].todoStatus) $('.done').prepend(todoEvent);
    else $('.todo').prepend(todoEvent);
  }
}

function render() {
  $.ajax({
    type: 'GET',
    url: './models/todo_API.php',
    success(resp) {
      $('.todo').empty();
      $('.done').empty();
      const json = JSON.parse(resp);
      addTodoTasks(json);
    },
  });
}

function runModelAjax(method, url, data) {
  $.ajax({
    type: method,
    url,
    data,
    success() {
      $('.key-in-block > input').val('');
      $('.key-in-block > textarea').val('');
      render();
    },
  });
}

export {
  render,
  runModelAjax,
};
