$(function(){

  var $postList = $('#postList');
  var $content = $('#content');
  var $username = userName;
  var $company = companyName;

$('#submit').on('click', function() {
    var post = {
      content: $content.val(),
      user: $username,
      company: $company
    };

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/posts',
      data: post,
      success: function(postList) {
        $postList.append('<h2 data-id="' + post.id + '">' + post.user + ' of ' + post.company +  ' says: </h2>');
        $postList.append('<p data-id="' + post.id + '">' + post.content + '</p>');
      },
      error: function() {
        alert('I\'m sorry but your submission information is invalid');
      }
      });
     $content.val('');
});
});
