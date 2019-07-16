const input = $('.input__block');
let statusValue = '';
let statusType = '';


$('#input').click(() => {
  alert('不要點我，鍵盤按 Enter 就好');
});

$('.taskInput').click((e) => {
  if (e.target.type !== 'button') { return; }
  statusType = e.target.name;
  statusValue = e.target.value;

  // 輸入框會隨著不同的 tag 而變色
  switch (statusType) {
    case 'success':
      input.css('background-color', 'rgb(147, 211, 162)');
      break;
    case 'warning':
      input.css('background-color', 'rgb(255, 224, 131)');
      break;
    case 'danger':
      input.css('background-color', 'rgb(237, 154, 162)');
      break;
    case 'primary':
      input.css('background-color', 'rgb(127, 189, 255)');
      break;
    case 'secondary':
      input.css('background-color', 'rgb(181, 186, 190)');
      break;

    default:
  }
  // console.log( statusType,statusValue)
});

input.keydown((e) => {
  if (e.key === 'Enter' && e.target.value !== '') {
    const $newTask = $(`<li class="list-group-item">
                            <input class="checkbox" type="checkbox">
                            ${e.target.value}
                            <span class="badge badge-${statusType}">
                                ${statusValue}
                            </span>
                            <span style="display: none" class="btn-group" role="group" aria-label="Basic example">
                                <input type="button" class="btn btn-secondary" value="Finish">
                                <input type="button" class="btn btn-secondary" value="Delete">
                            </span>
                            </li>
                            `);

    $('.list-todo').append($newTask);
    e.target.value = '';

    $('.list-todo > li').click(function (event) {
      if (event.target.type !== 'checkbox') return;
      if (event.target.checked) {
        $(this).css('text-decoration', 'line-through');
        $('.list-done').append($(this)); // 有趣的部分是，不知道為何原本的 task 會被移轉
      } else {
        $(this).css('text-decoration', 'none');
        $('.list-todo').append($(this));
      }
    });
  }
});
