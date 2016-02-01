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
        $postList.append('<p data-id="' + post.id + '">' + post.content + '</p>');
        alert('Thank you for caring');
        // reset();
      },
      error: function() {
        alert('I\'m sorry but your submission information is invalid');
      }
      });
});
});
