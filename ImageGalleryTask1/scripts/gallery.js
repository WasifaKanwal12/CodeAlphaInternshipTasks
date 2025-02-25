
// Image upload functionality
document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('fileInput').click(); // Trigger file input on button click
});

// When an image is selected, display it in the gallery
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Create a new image element
            const newImage = document.createElement('img');
            newImage.src = e.target.result;  // The selected image data
            newImage.classList.add('img-fluid', 'gallery-image'); // Add styling classes
            newImage.setAttribute('onclick', 'openModal(this)'); // Set onclick event for the new image

            // Create a new div to hold the image
            const newImageDiv = document.createElement('div');
            newImageDiv.classList.add('col-md-3', 'mb-3');  // Adjust the size of the image div
            newImageDiv.appendChild(newImage);

            // Append the new image to the gallery
            document.getElementById('gallery').appendChild(newImageDiv);
        };
        reader.readAsDataURL(file); // Convert the selected file into a base64 data URL
    }
});
