$(function(){

  var $postList = $('#postList');
  var $content = $('#content');
  var $username = userName;
  var $company = companyName;

$('#submit').click(function() {
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
        method: 'POST',
        data: post,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        url: "/posts",
          success: function(){
            $postList.append('<h2><span style="color:grey;font-weight:bold">' + post.user + '</span> of <span style="color:grey;font-weight:bold">' + post.company + '</span> says: </h2>');
            $postList.append('<p>' + post.content + '</p>');
          },
          error: function() {
            alert('I\'m sorry but your submission information is invalid');
          }
      }).done(function (res){console.log(res)});
    }
    $content.val('');
});
});
