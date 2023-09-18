
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let data = {
        firstName: document.getElementById('name').value,
        lastName: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        needs: document.getElementById('wdyn').value,
        message: document.getElementById('message').value
    };

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    fetch('https://anatec-bff.prenl.workers.dev/api/contact-us', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }).then(response => {
        const statusCode = response.status;

        if (statusCode == 200) {
            Swal.fire({
                title: 'Success',
                text: 'Your message has been sent!',
                icon: 'success',
                confirmButtonText: 'Got it!'
            });
        } else {
            Swal.fire({
                title: 'Something went wrong',
                text: 'Couldn\'t send the message, try again later!',
                icon: 'error',
                confirmButtonText: 'Ok :('
            });
        }
    });
    
});
