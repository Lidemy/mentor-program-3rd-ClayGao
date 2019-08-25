/* eslint-disable */
import './style.scss';
import $ from 'jquery';
import 'jquery-ui-bundle';
import { render, runModelAjax } from './utils';

$(document).ready(() => {
  let isChecked = false;
  let isUpdating = false;
  let currentTaskID = 0;

  $('.key-in').click((e) => {
    if (e.target.type === 'radio') {
      const textColor = e.target.value;
      $('.key-in-level').val(textColor);
      $('.key-in-block > input').animate({ 'background-color': textColor });
      isChecked = true;
    }
    if (e.target.type === 'button' && isChecked && isUpdating) {
      const updateData = {
        updateTitle: $('.key-in-block > input').val(),
        updateContext: $('.key-in-block > textarea').val(),
        updateLevel: $('.key-in-level').val(),
        updateID: currentTaskID,
      };

      if (!updateData.updateTitle || !updateData.updateContext) return;
      runModelAjax('POST', './models/todo_API.php', updateData);
    } else if (e.target.type === 'button' && isChecked) {
      const data = {
        todoTitle: $('.key-in-block > input').val(),
        todoContext: $('.key-in-block > textarea').val(),
        todoLevel: $('.key-in-level').val(),
      };

      if (!data.todoTitle || !data.todoContext) return;
      runModelAjax('POST', './models/todo_API.php', data);
    }
  });

  $('.todo').click((e) => {
    const targetTaskID = e.target.parentElement.id;
    const targetTask = $(`.todo-event[id='${targetTaskID}']`);
    const targetTaskTitle = $(`.todo-event[id='${targetTaskID}'] > .todo-event-title`).text().trim();
    const targetTaskContext = $(`.todo-event[id='${targetTaskID}'] > .todo-event-context`).text().trim();
    if (!targetTaskID) return;
    $(`.todo-event-options[id=${targetTaskID}]`)
      .slideToggle()
      .click((evt) => {
        if (evt.target.type !== 'button') return;
        const option = evt.target.value;
        if (option === 'C') {
          runModelAjax('PATCH', `./models/todo_API.php?taskid=${targetTaskID}`);
        } else if (option === 'U') {
          targetTask.hide();
          $('.key-in-block > input').val(`Editing -> ${targetTaskTitle}`);
          $('.key-in-block > textarea').val(targetTaskContext);
          $('.todo-edit-id').val(targetTaskID);
          isUpdating = true;
          currentTaskID = targetTaskID;
          // runModelAjax('POST',`./models/update_comments.php`)
        } else {
          runModelAjax('DELETE', `./models/todo_API.php?taskid=${targetTaskID}`);
        }
      });
  });

  render();
});
