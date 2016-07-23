$(function(){

  var $postList = $('#postList');
  var $content = $('#content');

  $.ajax({
      type: 'GET',
    url: '/posts',
    success: function(posts) {
      $.each(posts, function(i, post) {
        $postList.append('<h2 data-id="' + post.id + '">' + '<span style="color:grey;font-weight:bold">' + post.user + '</span>' + ' of ' +'<span style="color:grey;font-weight:bold">' + post.company + '</span>' +  ' says: </h2>');
        $postList.append('<p data-id="' + post.id + '">' + post.content + '</p>');
    });
  },
    error: function() {
      alert('error loading posts');
    },
  });
});
