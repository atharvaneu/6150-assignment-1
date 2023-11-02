$(document).ready(function () {
  // Disable the submit button initially
  $(".submit-btn").prop("disabled", true);

  // Validation for email
  $("#email").on("input", function () {
    const email = $(this).val();
    const emailRegex = /^[A-Za-z0-9._%-]+@northeastern\.edu$/; // Customize the regex for northeastern email
    const errorField = $("#email-error");

    if (email === "") {
      errorField.text("Email is required");
      $(this).removeClass("success").addClass("danger");
    } else if (!emailRegex.test(email)) {
      errorField.text("Enter a valid northeastern email");
      $(this).removeClass("success").addClass("danger");
    } else {
      errorField.text("");
      $(this).removeClass("danger").addClass("success");
    }

    checkFormValidity();
  });

  // Validation for username
  $("#username").on("input", function () {
    const username = $(this).val();
    const errorField = $("#username-error");

    if (username === "") {
      errorField.text("Username is required");
      $(this).removeClass("success").addClass("danger");
    } else {
      errorField.text("");
      $(this).removeClass("danger").addClass("success");
    }

    checkFormValidity();
  });

  // Validation for password
  $("#password").on("input", function () {
    const password = $(this).val();
    const errorField = $("#password-error");

    if (password === "") {
      errorField.text("Password is required");
      $(this).removeClass("success").addClass("danger");
    } else {
      errorField.text("");
      $(this).removeClass("danger").addClass("success");
    }

    checkFormValidity();
  });

  // Validation for confirm password
  $("#confirm-password").on("input", function () {
    const password = $("#password").val();
    const confirmPassword = $(this).val();
    const errorField = $("#confirm-password-error");

    if (confirmPassword === "") {
      errorField.text("Confirm Password is required");
      $(this).removeClass("success").addClass("danger");
    } else if (confirmPassword !== password) {
      errorField.text("Passwords do not match");
      $(this).removeClass("success").addClass("danger");
    } else {
      errorField.text("");
      $(this).removeClass("danger").addClass("success");
    }

    checkFormValidity();
  });

  function checkFormValidity() {
    // Check if all fields are valid
    if ($(".error-msg").text() === "" && !hasNullFields()) {
      $(".submit-btn").prop("disabled", false);
    } else {
      $(".submit-btn").prop("disabled", true);
    }
  }

  function hasNullFields() {
    // Check for null fields (empty inputs)
    return (
      $("#username").val() === "" ||
      $("#password").val() === "" ||
      $("#confirm-password").val() === ""
    );
  }

  $("#login-form").submit(function (e) {
    e.preventDefault();
    const username = $("#username").val();

    window.location.href = `calculator.html?username=${username}`;
  });
});
