$(document).ready(function(){
  var api_url = "https://api.twitter.com/1/users/show.json?screen_name=9m&callback=?";
  $.getJSON(api_url, function(json,status) {
    $("#twitter_icon").html($("<img/>",{ src: json.profile_image_url , class: "service-profile-icon", style: "width:4em;height:4em;" }));
  });
});
