// Exercise: Find the top navbar by query for the element type, which is <nav>.
$('nav');
// Exercise: Find the sidebar on the right by using it's id.
$('#sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
$('#sidebar-right pages');
$('#sidebar-right groups');
// Exercise: Find all of the comments on the page.
$('.panel')
// Exercise: Find the first comment on the page.
$('.panel:first')

// Exercise: Find the last comment on the page.
$('.panel:last');
// Exercise: Find the fourth comment on the page.
$($('.panel')[3]);
// Exercise: Find one of the ads in the sidebar and use .hide() to hide it.
$($('.ad-slot')[0]).hide();
// Exercise: Use .show() to make the ad that you hid in the previous step visible again.
$($('.ad-slot')[0]).show();
// Exercise: Use .toggle() to toggle the display of the nav bar at the top of the page.
$('.top-bar').toggle();
// Exercise: Use .attr() to change src attribute of one of the ads in the sidebar. Here's an image source if you need one: http://placebear.com/200/300.
var whatever = $($('.ad-slot img')[0]);
whatever.attr('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
var sam = $($('.post.media')[3]);
#BROKE
// Exercise: Find the first post and use .addClass() to add the .post-liked class to it.
var first = $(".post").eq(0)
first.addClass("post post-liked media");
// Exercise: Find the second post and use .removeClass() to remove the .post-liked class.
var second = $(".post").eq(1)
second.removeClass("post-liked")
// Exercise: Find any post and use .toggleClass() to toggle the .post-liked class.
first.toggleClass("post-liked")
