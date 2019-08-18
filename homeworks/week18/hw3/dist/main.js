const taskList = [];

function render() {
  $('.list-todo').empty();
  for (let i = 0; i < taskList.length; i += 1) {
    const $newTask = $(`<li class="list-group-item">
                      <input class="checkbox" type="checkbox" name=${i}>
                      ${taskList[i]}
                      </li>
                      `);
    $('.list-todo').append($newTask);
  }
  $('.list-todo > li').click((e) => {
    if (e.target.type !== 'checkbox') return;
    taskList.splice(e.target.name, 1);
    render();
  });
}

function addTask(task) {
  taskList.push(task);
  render();
}

$('.input__block').keydown((e) => {
  if (e.key === 'Enter' && e.target.value !== '') {
    addTask(e.target.value);
    e.target.value = '';
  }
});

$('#input').click(() => {
  alert('不要點我，鍵盤按 Enter 就好');
});
