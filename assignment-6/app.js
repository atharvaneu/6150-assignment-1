window.onload = () => {
  const formAccess = document.getElementById("form-id");
  const regExEmail = "^[a-zA-Z0-9._%+-]+@northeastern.edu$";
  let isEmailInValid = true;

  const display = (isInValid) => {
    if (isInValid) {
      document.getElementById(`error_emailId`).style.display = "block";
    } else {
      document.getElementById(`error_emailId`).style.display = "none";
    }
  };

  const validate = (event) => {
    console.log("input");

    const { id, value } = event.target;

    switch (id) {
      case "exampleInputEmail1":
        if (!value.trim().toLowerCase().match(regExEmail)) {
          display(true);
          isEmailInValid = true;
        } else {
          display(false);
          isEmailInValid = false;
        }
        break;
    }
  };

  formAccess.addEventListener("input", validate);
};

document.forms["form-id"].onsubmit = (e) => {
  e.preventDefault();
};

let but = document.getElementById("liveToastBtn");
but.addEventListener("click", function () {
  let spinner = document.getElementById("spinner");
  spinner.className = "spinner-border";
  let myAlert = document.getElementById("liveToast");
  myAlert.className = "toast show";
  setTimeout(function () {
    spinner.className = "spinner-border d-none";
    myAlert.className = "toast-body";
  }, 3000);
});
