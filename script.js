function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const passwordIcon = document.getElementById(`show-${inputId}`);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.textContent = "👁️";
    } else {
        passwordInput.type = "password";
        passwordIcon.textContent = "👁️";
    }
}

function showSignUpForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function captureImage() {
    // Implement the code for capturing an image through the camera here.
    // You will need to use WebRTC or a similar technology for this.



        const video = document.getElementById('camera');
        const captureButton = document.getElementById('captureButton');
        const canvas = document.getElementById('canvas');
        const capturedImage = document.getElementById('capturedImage');

        // Access the camera stream
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (error) {
                console.error('Error accessing the camera:', error);
            });

        // Capture an image when the button is clicked
        captureButton.addEventListener('click', function () {
            // Draw the current video frame onto the canvas
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert the canvas content to a data URL representing the image
            const imageDataURL = canvas.toDataURL('image/png');

            // Set the captured image source and display it
            capturedImage.src = imageDataURL;
            capturedImage.style.display = 'block';
        });
        // Store data in local storage
localStorage.setItem('username', JSON.stringify(userdata));
console.log("login successfully");


}
function signup(){
    const firstName= document.getElementById("signup-firstName").value;
    const LastName= document.getElementById("signup-LasttName").value;
    const Email= document.getElementById("signup-Email").value;
    const password= document.getElementById("signup-Password").value;
    const Address= document.getElementById("signup-Address").value;
    const phone= document.getElementById("signup-phone").value;

    const imageDataURL = document.getElementById("image-upload").value;


    const signupData = {
        firstName,
        LastName,
        Email,
        password,
        Address,
        phone,
        image: imageDataURL
    };
     console.log(signupData);        
     localStorage.setItem("signupData", JSON.stringify(signupData));
}


document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Implement login logic here
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Implement sign-up logic here
    // You can access form fields using document.getElementById
});



