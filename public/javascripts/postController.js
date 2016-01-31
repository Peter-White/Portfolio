$(function(){

  var $postList = $('#postList');
  var $username = $('#username');
  var $company = $('#company');
  var $content = $('#content');

  var reset = function() {
    $('#postList').val('');
    $('#content').val('');
  };

$('#submit').on('click', function() {
    var post = {
      content: $content.val(),
      username: $username,
      company: $company
    };

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/posts',
      data: post,
      success: function(postList) {
        $postList.append('<p data-id="' + post.id + '">' + post.content + '</p>');
        alert('Thank you for caring');
        reset();
      },
      error: function() {
        alert('I\'m sorry but your submission information is invalid');
      }
      });
});

  $.ajax({
      type: 'GET',
    url: 'http://localhost:3000/posts',
    success: function(posts) {
      $.each(posts, function(i, post) {
        $postList.append('<p data-id="' + post.id + '">' + post.content + '</p>');
    });
  },
    error: function() {
      alert('error loading posts');
    },
  });

});
