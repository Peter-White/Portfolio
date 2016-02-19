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

    if ($content.val() === '') {
      alert("You have entered an empty value. Please try again.");
    }
    else {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/posts',
        data: post,
        success: function(post) {
          // Not working, need to solve later
            $postList.append('<h2><span style="color:grey;font-weight:bold">' + post.user + '</span> of <span style="color:grey;font-weight:bold">' + post.company + '</span> says: </h2>');
            $postList.append('<p>' + post.content + '</p>');
        },
        error: function() {
          alert('I\'m sorry but your submission information is invalid');
        }
        });
    }
    $content.val('');
});
});
