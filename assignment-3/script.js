//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("Atharva Kamble - 002831703");

var submitButton = document.getElementById("button");
var addNewStudentButton = document.getElementById("add");
var myTable = document.getElementById("myTable");

/**
 * Table constructor for all table related functions
 */
function Table() {
  console.log("Table declaration begins");
}

var table = new Table();

/**
 * Disables the submit button
 */
Table.prototype.disableSubmit = function () {
  submitButton.disabled = true;
};

/**
 * Enables the submit button
 */
Table.prototype.enableSubmit = function () {
  submitButton.disabled = false;
};

/**
 * Submits selected awards to the table
 */
Table.prototype.submitSelectedAwards = function () {
  console.log("Submit awards button pressed");
};

// Note to self: You should always use prototype keyword if you want to declare non-static functions

/**
 *
 * @returns HTMLElement <td></td>
 */
function createTd() {
  return document.createElement("td");
}

/**
 *
 * @returns HTMLElement <tr></tr>
 */
function createTr() {
  return document.createElement("tr");
}

var serialNumber = 4;
/**
 * Adds new student row to the table
 */
Table.prototype.addNewStudent = function () {
  // serialNumber =
  //   [...document.getElementsByTagName("tr")].filter((row) => {
  //     return row?.classList.contains("student-record");
  //   }).length + 1;

  var newRow = createTr();
  var tdCheckBox = createTd();
  var tdStudentName = createTd();
  var tdAdvisor = createTd();
  var tdAwardStatus = createTd();
  var tdSemester = createTd();
  var tdType = createTd();
  var tdBudget = createTd();
  var tdPercentage = createTd();
  var tdDelete = createTd();
  var tdEdit = createTd();
  var trAdvisor = createTr();

  tdCheckBox.innerHTML = `<input onclick="selectRow(${serialNumber}, this.checked);" type="checkbox" class="select-row-checkbox"/><br /><br /><img src="down.png" width="25px" onclick="handleDetailsDropdown(${serialNumber});" />`;
  tdStudentName.innerHTML = `Student ${serialNumber}`;
  tdAdvisor.innerHTML = `Teacher ${serialNumber}`;
  tdAwardStatus.innerHTML = `Approved`;
  tdSemester.innerHTML = `Fall`;
  tdType.innerHTML = `TA`;
  tdBudget.innerHTML = `78909`;
  tdPercentage.innerHTML = "100%";
  tdDelete.innerHTML = `<button id="delete-btn-${serialNumber}"  onclick="deleteStudentRecord(${serialNumber});">Delete</button>`;
  tdEdit.innerHTML = `<button id="edit-btn-${serialNumber}"  onclick="editStudentRecord(${serialNumber});">Edit</button>`;
  trAdvisor.innerHTML = `<tr class="hidden-by-default" id="student-details-${serialNumber}">
  <td colspan="8">
  Advisor:<br /><br />
  Award Details<br />
  Summer 1-2014(TA)<br />
  Budget Number: <br />
  Tuition Number: <br />
  Comments:<br /><br /><br />
  Award Status:<br /><br /><br />
</td></tr>`;

  tdDelete.classList.add("hidden-by-default");
  tdDelete.id = `delete-btn-${serialNumber}`;

  tdEdit.classList.add("hidden-by-default");
  tdEdit.id = `edit-btn-${serialNumber}`;

  trAdvisor.id = `student-details-${serialNumber}`;
  trAdvisor.classList.add("hidden-by-default");

  newRow.appendChild(tdCheckBox);
  newRow.appendChild(tdStudentName);
  newRow.appendChild(tdAdvisor);
  newRow.appendChild(tdAwardStatus);
  newRow.appendChild(tdSemester);
  newRow.appendChild(tdType);
  newRow.appendChild(tdBudget);
  newRow.appendChild(tdPercentage);
  newRow.appendChild(tdDelete);
  newRow.appendChild(tdEdit);
  newRow.id = `row-${serialNumber}`;
  newRow.classList.add("student-record");

  // in case record was not able to get inserted
  var error = false;
  if (!error) {
    alert(`Student ${serialNumber} Record added successfully`);
    myTable.appendChild(newRow);
    myTable.appendChild(trAdvisor);

    // update student count
    serialNumber += 1;
  } else {
    alert(`There was an error in adding a new student record!`);
    return;
  }
};

/**
 * Toggle the headers for Actions (delete and edit headers)
 * @param {string} action
 */
Table.prototype.toggleActionsColumn = function (action) {
  if (action === `show`) {
    document.getElementById("delete-header").style.display = "table-cell";
    document.getElementById("edit-header").style.display = "table-cell";
  } else if (action === "hide") {
    document.getElementById("delete-header").style.display = "none";
    document.getElementById("edit-header").style.display = "none";
  }
};

/**
 * Edit student details with given student ID
 * @param {string} studentID
 */
var editStudentRecord = function (studentID) {
  var rowID = `row-${studentID}`;
  var row = document.getElementById(studentID);

  console.log(`Edit student details: ID ${studentID}`);

  prompt(`Edit Student ${studentID} details`);
};

var handleDetailsDropdown = function (studentID) {
  console.log(studentID);
  var dropdownRowID = `student-details-${studentID}`;
  var dropdownRow = document.getElementById(dropdownRowID);

  if (dropdownRow?.style.display !== "table-row") {
    dropdownRow.style.display = "table-row";
  } else if (dropdownRow.style.display !== "none") {
    dropdownRow.style.display = "none";
  }
};

/**
 * Selects the row and toggles it between yellow (selected) and white (unselected)
 * @param {string} studentID
 * @param {boolean} isChecked
 */
var selectRow = function (studentID, isChecked) {
  var rowID = `row-${studentID}`;

  if (isChecked) {
    document.getElementById(rowID).style.backgroundColor = "yellow";

    document.getElementById(`delete-btn-${studentID}`).style.display =
      "table-cell";
    document.getElementById(`edit-btn-${studentID}`).style.display =
      "table-cell";
  } else {
    document.getElementById(rowID).style.backgroundColor = "#FFFFFF";

    document.getElementById(`delete-btn-${studentID}`).style.display = "none";
    document.getElementById(`edit-btn-${studentID}`).style.display = "none";
  }
};

/**
 *  Returns that state of the table - if any row is selected or not
 * @returns {boolean} flag
 */
var isAnyRowSelected = function () {
  var flag = false;
  [...document.getElementsByClassName("select-row-checkbox")].forEach(
    (checkbox) => {
      if (checkbox.checked) {
        flag = true;
      }
    }
  );
  return flag;
};

/**
 * Delete student record from the table with id === studentID
 * @param {string} studentID
 */
var deleteStudentRecord = function (studentID) {
  var rowID = `row-${studentID}`;
  var row = document.getElementById(rowID);

  if (confirm(`Do you want to delete Student ${studentID} details?`)) {
    row?.parentNode?.removeChild(row);

    // Hide the Actions column if there is no row selected
    if (!isAnyRowSelected()) {
      table.toggleActionsColumn("hide");
      table.disableSubmit();
    }

    alert(`Student ${studentID} Record deleted successfully`);
  }
};

/**
 * Driver code
 */
function main() {
  // bind addNewStudent method with onclick
  addNewStudentButton.onclick = table.addNewStudent;

  // bind submitSelectedAwards method with onclick
  submitButton.onclick = table.submitSelectedAwards;

  // default state of the submit button
  table.disableSubmit();

  var checkboxNodeList = document.getElementsByClassName("select-row-checkbox");

  myTable.addEventListener("click", () => {
    for (let i = 0; i < checkboxNodeList.length; ++i) {
      var checkbox = checkboxNodeList[i];
      checkbox.addEventListener("change", () => {
        if (isAnyRowSelected()) {
          console.log("HI");
          table.enableSubmit();
          table.toggleActionsColumn("show");
        } else {
          table.disableSubmit();
          table.toggleActionsColumn("hide");
        }
      });
    }
  });
}
main();
