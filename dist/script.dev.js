"use strict";

function saveUserSettings() {
  var name = document.getElementById('userName').value;
  var number = document.getElementById('emergencyNumber').value;
  var password = document.getElementById('userPassword').value;

  if (number) {
    localStorage.setItem('bpUserName', name);
    localStorage.setItem('bpEmergencyNumber', number);
    localStorage.setItem('bpUserPassword', password);
    alert('Settings Saved!');
  } else {
    alert('Please enter an emergency number');
  }
}

function callEmergency() {
  var number = localStorage.getItem('bpEmergencyNumber');

  if (number) {
    window.location.href = "tel:".concat(number);
  } else {
    alert('No emergency number set. Please save your settings first.');
  }
}

window.onload = function () {
  var savedNumber = localStorage.getItem('bpEmergencyNumber');
  var savedName = localStorage.getItem('bpUserName');
  var savedPass = localStorage.getItem('bpUserPassword');

  if (savedNumber) {
    document.getElementById('emergencyNumber').value = savedNumber;
  }

  if (savedName) {
    document.getElementById('userName').value = savedName;
  }

  if (savedPass) {
    document.getElementById('userPassword').value = savedPass;
  }
};
//# sourceMappingURL=script.dev.js.map
