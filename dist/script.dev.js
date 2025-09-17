"use strict";

function saveUserSettings() {
  var name = document.getElementById('userName').value.trim();
  var number = document.getElementById('emergencyNumber').value.trim();
  var password = document.getElementById('userPassword').value.trim();
  var phoneRegex = /^\+?[0-9]{5,15}$/;

  if (!number.match(phoneRegex)) {
    alert('Please enter a valid emergency number.');
    return;
  }

  localStorage.setItem('bpUserName', name);
  localStorage.setItem('bpEmergencyNumber', number);
  localStorage.setItem('bpUserPassword', password);
  alert('Settings Saved!');
}

function callEmergency() {
  var number = localStorage.getItem('bpEmergencyNumber');

  if (number) {
    // triggers phone dialer on supported devices
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
