const { log } = console;

function Form(_form) {
  this.form = _form;
  this.isValidated = false;

  this._fieldState = {
    firstName: false,
    lastName: false,
    emailId: false,
    phoneNumber: false,
    stAddress1: false,
    zipcode: false,
    text: false,
    source: false,
    title: false,
    rideapps: false,
  };

  this._fieldValues = {
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    stAddress1: "",
    zipcode: "",
    text: "",
    source: [],
    title: "",
    rideapps: "",
  };

  this._initValues = {
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    stAddress1: "",
    stAddress2: "",
    zipcode: "",
    text: "",
    source: [],
    title: "",
    rideapps: "",
  };

  // iterate over the dirty fields and apply error messages to them
  // if this._fieldState[field] === false -> apply validation
  this._dirtyFields = new Set();
}

Form.prototype.getForm = function () {
  return this.form;
};

Form.prototype.getFormElements = function () {
  return this.form.elements;
};

Form.prototype.getElement = function (elementName) {
  return this.getFormElements()[`${elementName}`];
};

Form.prototype.setIsFormValidated = function (val) {
  this.isValidated = val;
};

Form.prototype.setElementValidation = function ({ name, val }) {
  this._fieldState[name] = val;
};

Form.prototype.getIsValidated = function () {
  return this.isValidated; // true or false
};

Form.prototype.setValue = function ({ name, value }) {
  this._fieldValues[name] = value;
};

Form.prototype.resetForm = function () {
  [
    ...document.getElementsByTagName("input"),
    ...document.getElementsByTagName("textarea"),
    ...document.getElementsByTagName("select"),
  ].forEach((element) => {
    if (element.id === "submit" || element.id === "reset") return;

    if (
      element.name === "source" ||
      element.name === "title" ||
      element.name === "customize-checkbox"
    ) {
      element.checked = false;
      return;
    }

    if (element.type === "checkbox") {
      element.checked = false;
    }

    element.style.border = "1px solid rgb(118,118,118)";
    element.style.outline = "none";
    element.value = "";

    [...document.getElementsByClassName("customizable")].forEach((element) => {
      element.classList.add("default-hidden");
    });

    const errMsg = document.getElementById(`${element.name}-err-msg`);
    if (errMsg) {
      errMsg.remove();
    }
  });

  this._dirtyFields = new Set();
  this._fieldValues = {};
  this._fieldState = {
    firstName: false,
    lastName: false,
    emailId: false,
    phoneNumber: false,
    stAddress1: false,
    zipcode: false,
    text: false,
    source: false,
    title: false,
    rideapps: false,
  };
  this.setIsFormValidated(false);
  document.getElementById("submit").disabled = !this.isValidated;
};

// Refactor later
// Form.prototype = { ...Form.prototype, obj };

// ****************************************************************************
/**
 *
 * @param {*} txt
 * @returns {[response, errMsg]}
 */
function isNotNull(txt) {
  return txt.trim().length !== 0;
}

// Only allow numbers or alphabets - no special characeters
function isAlphaNumeric(txt) {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(txt);
}

function isMinLength(txt, length) {
  return txt.length >= length;
}

function isMaxLength(txt, length) {
  return txt.length <= length;
}

function isEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;
  return regex.test(email);
}

function isPhoneNumber(phone) {
  const regex = /^[0-9()+\s-]+$/;
  return regex.test(phone);
}

function isZipCode(phone) {
  const regex = /^[0-9()+\s-]+$/;
  return regex.test(phone);
}

// Work on adding validations to the switch case and they should reflect in a live mode - DONE

Form.prototype.handleFieldChange = function (event) {
  const { value, name } = event.target;

  this.setValue({ name, value });

  switch (name) {
    case "firstName":
      this.setElementValidation({
        name,
        val:
          true &&
          isNotNull(value) &&
          isMinLength(value, 2) &&
          isMaxLength(value, 30),
      });
      break;
    case "lastName":
      this.setElementValidation({
        name,
        val:
          true &&
          isNotNull(value) &&
          isMinLength(value, 2) &&
          isMaxLength(value, 30),
      });
      break;
    case "emailId":
      this.setElementValidation({
        name,
        val:
          true &&
          isNotNull(value) &&
          isMinLength(value, 2) &&
          isMaxLength(value, 30) &&
          isEmail(value),
      });
      break;
    case "phoneNumber":
      this.setElementValidation({
        name,
        val:
          true &&
          isNotNull(value) &&
          isMinLength(value, 10) &&
          isMaxLength(value, 10) &&
          isPhoneNumber(value),
      });
      break;
    case "stAddress1":
      this.setElementValidation({
        name,
        val:
          true &&
          isNotNull(value) &&
          isMinLength(value, 5) &&
          isMaxLength(value, 30),
      });
      break;
    case "zipcode":
      this.setElementValidation({
        name,
        val:
          true &&
          isNotNull(value) &&
          isZipCode(value) &&
          isMinLength(value, 5) &&
          isMaxLength(value, 9),
      });
      break;
    case "directions":
      this.setElementValidation({
        name,
        val: true,
      });
      break;
    case "rideapps":
      this.setElementValidation({
        name,
        val: true && isNotNull(value),
      });
      this.setValue({
        name,
        value: {
          val: value,
          options: [],
        },
      });
      break;
    case "customize-checkbox":
      const customizeCheckboxes =
        document.getElementsByName(`customize-checkbox`);
      const customizeChecked = [...customizeCheckboxes].filter(
        (box) => box.checked
      );

      this.setElementValidation({
        name: "rideapps",
        val: true && isNotNull(value),
      });
      this.setValue({
        name: "rideapps",
        value: {
          val: document.getElementById("rideapps").value,
          options: customizeChecked,
        },
      });
      break;
    case "text":
      this.setElementValidation({
        name,
        val:
          true &&
          isNotNull(value) &&
          isMinLength(value, 2) &&
          isMaxLength(value, 30),
      });
      break;
    case "source":
      const checkboxes = document.getElementsByName(event.target.name);
      const checked = [...checkboxes].filter((box) => box.checked);
      this.setElementValidation({
        name,
        val: checked.length !== 0,
      });
      this.setValue({ name, value: checked.map((box) => box.value) });
      break;
    case "title":
      this.setElementValidation({
        name,
        val: true,
      });
      break;
  }

  this.applyValidations(event);
};

// make zip code, phone number alphanumeric

const ERR_MSG = {
  firstName: "First name required",
  lastName: "Last name required",
  emailId: "Email address is required and must be of Northeastern domain",
  phoneNumber: "US phone number must contain only 10 numbers",
  stAddress1: "Street address line 1 is required",
  zipcode: "Zip code is required, may contain only numbers",
  text: "Comments are required",
  source: "Source is required",
  title: "Title is required",
  rideapps: "Please select a ride app",
};

Form.prototype.applyValidations = function (event) {
  [...this._dirtyFields].forEach((element) => {
    element.parentNode.style.position = "relative";
    const errMsgId = `${element.name}-err-msg`;

    const fields = Object.keys(this._fieldState);
    this.setIsFormValidated(
      fields.filter((elementName) => {
        return this._fieldState[elementName];
      }).length === fields.length
    );

    if (
      element.name === "source" ||
      element.name === "title" ||
      element.id === "submit" ||
      element.id === "reset" ||
      element.classList.contains("customize-checkbox")
    ) {
      document.getElementById("submit").disabled = !this.isValidated;
      return;
    }

    if (this._fieldState[element.name] || element.name === "stAddress2") {
      element.style.outline = "2px solid #09C700";
      if (document.getElementById(errMsgId)) {
        element.parentNode.removeChild(document.getElementById(errMsgId));
      }
    } else {
      element.style.outline = "2px solid #FF4141"; // red

      let message = document.createElement("p");
      message.style.position = "absolute";
      message.style.bottom = "-35px"; // height of the input text field as in the dev tools
      message.style.left = "150px";
      message.style.color = "#FF4141"; // red
      message.style.fontSize = "small";
      message.innerHTML = ERR_MSG[element.name];
      message.id = errMsgId;
      message.style.textAlign = "left";

      if (!document.getElementById(message.id)) {
        element.parentNode.append(message);
      }
    }
  });

  // disable submit button
  document.getElementById("submit").disabled = !this.isValidated;
};

Form.prototype.handleFieldClick = function (event) {
  this._dirtyFields.add(event.target);
  // this.applyValidations(event);
};

Form.prototype.handleSubmit = function (event) {
  event.preventDefault();

  const {
    firstName,
    lastName,
    emailId,
    phoneNumber,
    stAddress1,
    stAddress2,
    zipcode,
    source,
    rideapps,
    directions,
    title,
    text,
  } = this._fieldValues;

  let newRecord = document.createElement("tr");

  const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

  newRecord.innerHTML = `
              <td>${capitalize(title)}. ${firstName} ${lastName}</td>
              <td>${emailId}</td>
              <td>${phoneNumber}</td>
              <td>${stAddress1}, ${stAddress2}</td>
              <td>${zipcode}</td>
              <td>${source}</td>
              <td>
                <p><b>App chosen:</b> ${rideapps.val}</p>
                <hr />
                <p><b>Types:</b> Sedan, SUV</p>
                <hr />
                <p><b>Comments about ride:</b></p>
                <p>${directions ?? "None"}</p>
              </td>
              <td>${text}</td>
  `;

  document.getElementById("records").appendChild(newRecord);
  // write logic to add data to the table from here itself

  this.handleReset();
};

Form.prototype.handleReset = function (event) {
  // event.preventDefault();
  this.resetForm();
};

function handleRideChange(event) {
  const { value } = event.target;

  [...document.getElementsByClassName("customizable")].forEach((element) => {
    element.classList.add("default-hidden");
  });

  [...document.getElementsByClassName(`for-${value}`)].forEach((element) => {
    element.classList.remove("default-hidden");
  });
}

/**
 * Driver code begins
 */
function main() {
  let form = new Form(document.myForm);

  // default validation state of the form
  form.setIsFormValidated(false);

  [...form.getFormElements()].forEach((element) => {
    element.addEventListener("keyup", form.handleFieldChange.bind(form));
    element.addEventListener("click", form.handleFieldClick.bind(form));
    element.addEventListener("focus", form.handleFieldClick.bind(form));

    if (
      element.name === "source" ||
      element.name === "title" ||
      element.name === "rideapps" ||
      element.type === "checkbox"
    ) {
      element.addEventListener("change", form.handleFieldChange.bind(form));
    }
  });
  document.getElementById("submit").onclick = form.handleSubmit.bind(form);
  document.getElementById("reset").onclick = form.handleReset.bind(form);

  // const rideOptions = [
  //   {
  //     name: "Select a ride",
  //     value: "",
  //     customize: [],
  //   },
  //   {
  //     name: "Uber",
  //     value: "uber",
  //     customize: ["Sedan", "SUV", "Compact SUV"],
  //   },
  //   {
  //     name: "Lyft",
  //     value: "lyft",
  //     customize: ["SUV", "Compact SUV", "Car pool", "Motorbike"],
  //   },
  //   {
  //     name: "RideIt",
  //     value: "rideit",
  //     customize: ["Private Cab", "Sedan", "SUV", "Compact SUV"],
  //   },
  //   {
  //     name: "Bolt",
  //     value: "bolt",
  //     customize: ["Bolt Premium", "Sedan", "SUV", "Compact SUV"],
  //   },
  //   {
  //     name: "Cabify",
  //     value: "cabify",
  //     customize: ["Yellow Cab", "Private Cab", "Sedan", "SUV"],
  //   },
  // ];

  // const rideSelectNode = document.getElementById("rideapps");
  // rideOptions.forEach(({ name, value, customize }) => {
  //   let optionElement = document.createElement("option");

  //   optionElement.value = value;
  //   optionElement.innerHTML = name;
  //   optionElement.id = `${value}-option`;

  //   customize.forEach((checkboxName) => {
  //     const container = document.createElement("div");
  //     const input = document.createElement("input");
  //     const label = document.createElement("label");

  //     const idPrefix = checkboxName.trim().replace(" ", "").toLowerCase();

  //     const checkboxId = `${idPrefix}-checkbox`;

  //     input.type = "checkbox";
  //     input.id = checkboxId;
  //     input.value = checkboxName.trim().replace(" ", "").toLowerCase();
  //     input.name = checkboxName.trim().replace(" ", "").toLowerCase();
  //     input.classList.add(`${value}-checkbox`);
  //     input.classList.add(`customize-checkbox`);

  //     label.innerHTML = checkboxName;
  //     label.for = checkboxId;

  //     container.id = `${idPrefix}-container-${name}`;
  //     container.appendChild(label);
  //     container.appendChild(input);
  //     container.classList.add("default-hidden");
  //     container.classList.add("customizable");
  //     container.classList.add(`for-${value}`);

  //     rideSelectNode.parentNode.appendChild(container);
  //   });

  //   rideSelectNode.append(optionElement);
  // });
}

main();

/**
 * Documentation for text field focus change: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event#text_input_element
 */
