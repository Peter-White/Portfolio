$(function(){

  var $postList = $('#postList');
  var $content = $('#content');

  // var reset = function() {
  //   $postList.val('');
  //   $content.val('');
  // };

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
