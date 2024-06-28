function handleSubmit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    showAlert(name, email, message);
}

function showAlert(name, email, message) {
    var alertContainer = document.createElement('div');
    alertContainer.className = 'alert-container';

    var alertBox = document.createElement('div');
    alertBox.className = 'alert-box';

    var alertTitle = document.createElement('div');
    alertTitle.className = 'alert-title';
    alertTitle.textContent = 'Terimakasih Atas Masukannya :)';

    var alertMessage = document.createElement('div');
    alertMessage.className = 'alert-message';
    alertMessage.innerHTML = '<strong>Name:</strong> ' + name + '<br><strong>Email:</strong> ' + email + '<br><strong>Message:</strong> ' + message;

    var closeButton = document.createElement('button');
    closeButton.className = 'alert-button';
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', function() {
        alertContainer.remove();
    });

    alertBox.appendChild(alertTitle);
    alertBox.appendChild(alertMessage);
    alertBox.appendChild(closeButton);
    alertContainer.appendChild(alertBox);
    document.body.appendChild(alertContainer);
}