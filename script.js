// Select the text element

// Set a timeout to hide the text after 5 seconds (5000 milliseconds)
document.addEventListener("DOMContentLoaded", function(){
    const instructions = document.getElementById('instructions');
    setTimeout(function() {
        instructions.style.opacity = '0';
    }, 5000);
    setTimeout(function(){
        instructions.style.display = 'none';
    }, 6000);
});

