/* eslint no-use-before-define: ["error", { "variables": false }] */

let loginStatus = 0;
let currectUser = '';

// 判斷登入狀態
function islogin() {
  $.ajax({
    type: 'GET',
    url: './verify.php',
    async: false,
    success(resp) {
      const status = JSON.parse(resp);
      loginStatus = status.islogin;
      currectUser = status.currect_user;
    },
  });
}

// 主留言 ajax
function InputAjax() {
  $('.form__style').submit((e) => {
    e.preventDefault();
    const newTitle = $('#new_title').val();
    const newContent = $('#new_comment').val();
    if (newTitle === '' || newContent === '') {
      alert('請輸入內容');
    } else {
      $.ajax({
        type: 'POST',
        url: './handle_write.php',
        data: {
          title: newTitle,
          content: newContent,
        },
        success() {
          $('#new_title').val('');
          $('#new_comment').val('');
          const newComment = `<div class='msg'>
                        <div>${currectUser}</div>
                        <h1>${newTitle}</h1>
                        <p>${newContent}</p>
                        <div id='edTime'>剛剛發送</div>
                        <div> 剛發送的留言尚無法使用評論等功能 !</div>
                      </div>`;
          $('.messages').prepend(newComment);
        },
      });
    }
  });
}

// 子留言 ajax
function subInputAjax() {
  $('.sub__write__form').submit((e) => {
    e.preventDefault();
    const subContent = $(e.target).find('textarea[name=sub_content]').val();
    const theSender = $(e.target).find('input[name=sender]').val();
    const idSub1 = $(e.target).find('input[name=id_sub1]').val();
    $.ajax({
      type: 'POST',
      url: './handle_subwrite.php',
      data: {
        sub_content: subContent,
        sender: theSender,
        id_sub1: idSub1,
      },
      success() {
        $(e.target).find('textarea[name=sub_content]').val('');
        const newSubComment = `<div class='sub__msg'>
                                <div> ${theSender}  :  ${subContent} </div>
                                <div class='create__time'> at  剛剛 </div>
                              </div>`;
        $(e.target).before(newSubComment); // 真心覺得 before 好用
      },
    });
  });
}

// 刪除按鈕
function deleteAjax() {
  $('.edit input').click((e) => {
    e.preventDefault();
    const id = $('.edit input').attr('name');
    $.ajax({
      type: 'POST',
      url: './handle_delete.php',
      data: {
        id,
      },
      success() {
        $('.edit input').parents('.msg').css('display', 'none');
      },
    });
  });
}

// 撈留言 ajax
function getComments() {
  $.when(
    $.ajax({
      type: 'GET',
      url: './board_comments.php',
    }),
    $.ajax({
      type: 'GET',
      url: './board_comments_sub1.php',
    }),
  )
    .then((resp1, resp2) => {
      const comments = JSON.parse(resp1[0]);// ajax 鍊式發送多個 req 會回傳值與狀態 (一個類物件格式)
      const subComments = JSON.parse(resp2[0]);
      const memberName = $('#member_name').text();

      for (let i = 0; i < comments.length; i += 1) {
      // 先預備主留言
        const comment = `<div class='msg'>
                          <div>${comments[i].nickname}</div>
                          <h1>${comments[i].title}</h1>
                          <p>${comments[i].content}</p>
                          <div id='edTime'>Final edit at ${comments[i].created_at}</div>
                        </div>`;
        // 先預備子留言的輸入框
        const subCommentInput = `<div class='sub__write'>
                                  <form method='POST' class='sub__write__form'>
                                    <textarea placeholder='Reply' name='sub_content'></textarea>
                                    <input type='hidden' name='sender' value='${memberName}'>
                                    <input type='hidden' name='id_sub1' value='${comments[i].id}'>
                                    <input class='btn' type='submit' value='send'>
                                  </form>
                                </div>`;

        // 先預備編輯與刪除按鈕
        const editClass = `<div class='edit'>
                          <a href='./update.php?id=${comments[i].id}'> Edit </a>
                          <input class='btn' type='button'name='${comments[i].id}' value='Delete'>
                        </div>`;

        $('.messages').prepend(comment);

        // 子留言，搜尋 parent_id 與主留言 id 符合就插入
        for (let j = 0; j < subComments.length; j += 1) {
          if (subComments[j].parent_id === comments[i].id) {
            const subComment = `<div class='sub__msg'>
                                  <div> ${subComments[j].nickname}  :  ${subComments[j].sub_content} </div>
                                  <div class='create__time'> at  ${subComments[j].created_at} </div>
                                </div>`;
            $('.msg:first-child').append(subComment);
          }
        }
        if (loginStatus) {
          $('.msg:first-child').append(subCommentInput);
        } // 如果登入，插入子留言的留言框
        if (loginStatus && currectUser === comments[i].nickname) { $('.msg:first-child').append(editClass); }// 如果登入而且登入者 = 發文者，插入編輯 / 刪除功能
      }
      InputAjax(); // 主留言框加入 ajax
      subInputAjax(); // 子留言輸入框加入 ajax
      deleteAjax(); // 刪除加上 ajax
    });
}


$(document).ready(() => {
  islogin(); // 決定 loginStatus 的值與獲取 currectUser 為誰
  getComments(); // 依照 loginStatus 的值決定如何顯示畫面
  // 彈出留言視窗
  $('#write').click(() => {
    $('#write_block').fadeToggle('slow');
  });
});
