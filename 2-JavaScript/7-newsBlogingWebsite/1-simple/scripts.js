// Simple example to display an alert when a blog post is clicked
document.querySelectorAll('.post a').forEach(post => {
    post.addEventListener('click', function() {
        alert('You clicked a blog post!');
    });
});
