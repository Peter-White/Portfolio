$(function(){

  var $postList = $('#postList');

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
