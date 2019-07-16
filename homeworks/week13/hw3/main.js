let loginStatus = 0;
let currectUser = '';

// 判斷登入狀態
function islogin(){
  $.ajax({
    type: 'GET',
    url: './verify.php',
    async: false,
    success: function(resp) {
      const status  = JSON.parse(resp);
      loginStatus = status.islogin;
      currectUser = status.currect_user;
    }
  })
}

// 主留言 ajax
function InputAjax() {
  $('.form__style').submit(function(e){
    e.preventDefault();
    const newTitle = $('#new_title').val();
    const newContent = $('#new_comment').val();
    if ( newTitle === '' || newContent ==='') {
      alert('請輸入內容')
    } else {
      $.ajax({
        type: 'POST',
        url: './handle_write.php',
        data: {
          title : newTitle,
          content : newContent
        },
        success: function(resp){
          $('#new_title').val('') 
          $('#new_comment').val('')
          $('.messages').text('')
          getComments();
        }
      })
    }
  })
}

// 子留言 ajax
function subInputAjax() {
  $('.sub__write__form').submit(function(e){
    e.preventDefault();
    const sub_content = $(e.target).find('textarea[name=sub_content]').val()
    const sender = $(e.target).find('input[name=sender]').val()
    const id_sub1 = $(e.target).find('input[name=id_sub1]').val()
    $.ajax({
      type: 'POST',
      url: './handle_subwrite.php',
      data:{ 
        sub_content : sub_content,  
        sender : sender,
        id_sub1 : id_sub1
      },success : function(resp){
        $(e.target).find('textarea[name=sub_content]').val('')
        $('.messages').text('')
        getComments();
      }
    })
  })
}

// 刪除按鈕
function deleteAjax() {
  $('.edit input').click(function(e){
    e.preventDefault();
    const id = $('.edit input').attr('name')
    console.log(id)
    $.ajax({
      type: 'POST',
      url: './handle_delete.php',
      data:{ 
        id : id
      },success : function(resp){
        $('.messages').text('')
        getComments();
      }
    })
  })
}

// 撈留言 ajax
function getComments(){
  $.when(
    $.ajax({
      type: 'GET',
      url: './board_comments.php'
    }),
    $.ajax({
      type: 'GET',
      url: './board_comments_sub1.php'
    })
  )
  .then( function(resp1,resp2) {
    
    const comments  = JSON.parse(resp1[0]); // 單單使用 ajax 時搭配 suecess 僅會回傳值，但使用鍊式的話會回傳值與狀態
    const subComments  = JSON.parse(resp2[0]);
    const member_name = $('#member_name').text()
  
    for ( let i = 0; i < comments.length; i+=1 ) {
      // 先預備主留言
      const comment = `<div class='msg'>
                        <div>${comments[i].nickname}</div>
                        <h1>${comments[i].title}</h1>
                        <p>${comments[i].content}</p>
                        <div id='edTime'>Final edit at ${comments[i].created_at}</div>
                      </div>`
      // 先預備子留言的輸入框
      const  subCommentInput = `<div class='sub__write'>
                                  <form method='POST' class='sub__write__form'>
                                    <textarea placeholder='Reply' name='sub_content'></textarea>
                                    <input type='hidden' name='sender' value='${member_name}'>
                                    <input type='hidden' name='id_sub1' value='${comments[i].id}'>
                                    <input class='btn' type='submit' value='send'>
                                  </form>
                                </div>`
      
      // 先預備編輯與刪除按鈕
      const editClass = `<div class='edit'>
                          <a href='./update.php?id=${comments[i].id}'> Edit </a>
                          <input class='btn' type='button'name='${comments[i].id}' value='Delete'>
                        </div>`

      $('.messages').prepend(comment)

      // 子留言，搜尋 parent_id 與主留言 id 符合就插入
      for ( let j = 0; j < subComments.length; j+=1 ) {
        if ( subComments[j].parent_id === comments[i].id) {
          const subComment = `<div class='sub__msg'>
                                <div> ${subComments[j].nickname}  :  ${subComments[j].sub_content} </div>
                                <div class='create__time'> at  ${subComments[j].created_at} </div>
                              </div>`
          $('.msg:first-child').append(subComment)
        }
      }
      if (loginStatus) { 
        $('.msg:first-child').append(subCommentInput) 
      } // 如果登入，插入子留言的留言框
      if (loginStatus && currectUser === comments[i].nickname) { $('.msg:first-child').append(editClass) }　// 如果登入而且登入者 = 發文者，插入編輯 / 刪除功能
    } 
    InputAjax(); // 主留言框加入 ajax
    subInputAjax();  // 子留言輸入框加入 ajax
    deleteAjax(); // 刪除加上 ajax
  })
}

$(document).ready(function(){
  islogin()
  getComments()
  // 彈出留言視窗
  $('#write').click(function(e){
    $('#write_block').fadeToggle('slow')
  })
})
   
    
  

      
    



