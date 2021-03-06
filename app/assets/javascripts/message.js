$(function(){
  function buildHTML(message){
    image = ( message.image ) ? `<img class= "lower-message__image" src=${message.image} >` : "";
      let html = `<div class="messages__message"data-message-id="${message.id}">
                    <div class="messages__message__upper-message">
                      <div class="messages__message__upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="messages__message__upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="messages__message__text">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                      ${image}
                    </div>
                  </div>`
      $('.messages').append(html); 
  }
  
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this); 
    let url = $(this).attr('action')

    $.ajax({ 
      url: url, 
      type: "POST", 
      data: formData, 
      dataType: 'json', 
      processData: false, 
      contentType: false 
    })  
    .done(function(data){
      buildHTML(data);   
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');     
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
    return false;
  })

  var reloadMessages = function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.messages__message:last').data("message-id");

      $.ajax({ 
        url: "api/messages", 
        type: 'get', 
        dataType: 'json', 
        data: {last_id: last_message_id} 
      })
      .done(function (messages) { 
        var insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildHTML(message); 
          $('.messages').append(insertHTML);
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        })
      })
      .fail(function () {
        alert('自動更新に失敗しました');
      });
    }
  };
  setInterval(reloadMessages, 7000);
  });