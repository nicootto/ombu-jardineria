// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('img-modal');
img.onclick = function(){
    modal.style.display = "block";
    console.log("click");
}

// Get the <span> element that closes the modal
var span = document.getElementById("modal-close-btn");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}