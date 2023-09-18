document.getElementById("phone1").addEventListener("click",  function () {
  const formattedPhone = "+77015130153";

  navigator.clipboard.writeText(formattedPhone).then(function () {
    alert("Phone number copied to clipboard!");
  });
});

document.getElementById("phone2").addEventListener("click", function () {
  const formattedPhone = "+77021464280";
  navigator.clipboard.writeText(formattedPhone).then(function () {
    alert("Phone number copied to clipboard!");
  });
});

document.getElementById("email-footer").addEventListener("click", function () {
  navigator.clipboard.writeText(this.textContent).then(function () {
    alert("Email copied to clipboard!");
  });
});
