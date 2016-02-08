$(function(){

  var $postList = $('#postList');
  var $content = $('#content');

  $.ajax({
      type: 'GET',
    url: 'http://localhost:3000/posts',
    success: function(posts) {
      $.each(posts, function(i, post) {
        $postList.append('<h2 data-id="' + post.id + '">' + post.user + ' of ' + post.company +  ' says: </h2>');
        $postList.append('<p data-id="' + post.id + '">' + post.content + '</p>');
    });
  },
    error: function() {
      alert('error loading posts');
    },
  });
});
