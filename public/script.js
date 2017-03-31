$(document).ready(function(){
  console.log('jquery working')

  $('.comment-list').hide()

  $('.comment_form').on('submit', function(e) {
    e.preventDefault()
    console.log('login submit')
    var $messageId = $(this).attr('messageid')
    console.log($messageId)
    // var $messageId = $('.message_id').val()
    var $commentInput = $('.comment_input').val()
    var $commentForm = {
      messageId: $messageId,
      comment: $commentInput
    }
    $.post({
      url: '/ajaxcomment',
      data: $commentForm,
      success: function(comment) {
      $(".comment-item").last().after('<div class="collection-item comment-item">'+comment.comment+'</div>')
        console.log(comment)
        $(".comment-counter").html(function(i, orgvalue) {
          return +orgvalue +1
        })
        }
        // $('.comment-list').html(comments)
        // console.log(data)
      })
    })

    $('.comment-bar').on('click', function() {
      console.log('expand comment-bar')
      var $messageId = $(this).attr('messageid')
      console.log($messageId)
      $.get('/comments', {messageid: $messageId})
      .done(function(comments){
        console.log(comments)
        comments.forEach(function(comment){
          $('.comment-list').append('<div>'+comment.comment+'</div>')
        })
      })
    })


    //post loads
    // $('.favorite-btn').each(function(i) {
    //   console.log('get request made')
    //   var $messageid = $(this).attr('messageid')
    //   $.get('/like', { messageid: $messageid } )
    //     .done(function( data ) {
    //       console.log(data)
    //     });


    // //check db how many people liked post
    // $('.favorite-btn').each(function(i) {
    //   $.post('/like', function(data) {
    //     var $messageid = $(this).attr('messageid')
    //     console.log(data)
    //     //user like
    //     //like count
    //   })
    // })

    // check if user liked post, show correct image

    // toggle like with post request
    // $('favorite-btn').on('click', function(e) {
    // var $userlike = $('.favorite-btn').attr('userlike')
    // if ($userlike = false) {
    //
    // }

    // $('span.favorite-btn').on('click', function(e) {
    //   var $messageid = $(this).attr('messageid')
    //   console.log('fav clicked with messageId: ' + $messageId)
    //   $('.favorite-icon',this).html('favorite')
    //   })


    $('.comment-btn').on('click', function(e) {
      console.log('comment btn clicked')
      $('.comment-icon').html('insert_comment')
      $('.comment-list').toggle()
      })
  })

  //
  // $('#post_btn').on('click', function(e) {
  //   console.log('button pressed')
  //   $.post('/form', function(data, status){
  //       console.log("data: " + data + 'whatever' + status)
  //     })
  //   })
  //
  // $('#login_form').on('submit', function(e){
  //   e.preventDefault()
  //   console.log('login submit')
  //   var $user = $('#user_name').val()
  //   var $password = $('#password').val()
  //   var formInput = {
  //     user: $user,
  //     password: $password
  //   }
  //   $.post({
  //     url: '/loginhandler',
  //     data: formInput,
  //     success: function(data) {
  //       console.log(data)
  //       }
  //     })
  // })
// })

//     $('#message_form').on('submit', function(e){
//       // e.preventDefault()
//       var $creator = $('#first_name').val()
//       var $title = $('#title').val()
//       var $body = $('#textarea').val()
//       var formInput = {
//         creator: $creator,
//         title: $title,
//         body: $body
//       }
//       console.log(formInput)
//       $.post({
//         url: '/',
//         data: formInput,
//         success: (data) => {console.log(data)}
//         })
//
//     })
// })


// var statusMessage = function(text) {
//   console.log('statusmessagecalled')
//   setTimeout(function () {
//     $('h1').append('blablabla')
//   }, 300);
// }
  //
  // post on button click
  // $('#searchSubmit').on('click', function(e){
  //   query = $('input')
  //   e.preventDefault()
  //   $.post({
  //     url: '/searchresult',
  //     data: query,
  //     success: function (data) {
  //       $('div.results').html(data)
  //     }
  //   })
  // })

// })
