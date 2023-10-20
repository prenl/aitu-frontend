function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validatePhone(phone) {
    var regex = /^[0-9-]+$/;
    return regex.test(phone);
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let data = {
        firstName: document.getElementById("name").value,
        lastName: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        needs: document.getElementById("wdyn").value,
        message: document.getElementById("message").value,
    };

    if (!data.firstName || !data.email || !data.phone || !data.message) {
        Swal.fire({
            title: "Something went wrong",
            text: "Fill all required fields!",
            icon: "error",
            confirmButtonText: "Ok",
        });
        return;
    }

    if (!validateEmail(data.email)) {
        Swal.fire({
            title: "Something went wrong",
            text: "Email is not valid!",
            icon: "error",
            confirmButtonText: "Ok",
        });
        return;
    }

    if (!validatePhone(data.phone)) {
        Swal.fire({
            title: "Something went wrong",
            text: "Phone is not valid!",
            icon: "error",
            confirmButtonText: "Ok",
        });
        return;
    }

    let url =
        `https://anatec-bff.prenl.workers.dev/api/contact-us?` +
        `firstName=${encodeURIComponent(data.firstName)}&` +
        `lastName=${encodeURIComponent(data.lastName)}&` +
        `email=${encodeURIComponent(data.email)}&` +
        `phone=${encodeURIComponent(data.phone)}&` +
        `needs=${encodeURIComponent(data.needs)}&` +
        `message=${encodeURIComponent(data.message)}`;

    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function (response) {
            Swal.fire({
                title: "Success",
                text: "Your message has been sent!",
                icon: "success",
                confirmButtonText: "Got it!",
            });
        },
        error: function (error) {
            Swal.fire({
                title: "Something went wrong",
                text: "Couldn't send the message, try again later!",
                icon: "error",
                confirmButtonText: "Ok :(",
            });
        },
    });
});
