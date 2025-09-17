function saveUserSettings(){
const name = document.getElementById('userName').value.trim();
const number = document.getElementById('emergencyNumber').value.trim();
const password = document.getElementById('userPassword').value.trim();
const phoneRegex = /^\+?[0-9]{5,15}$/;


if(!number.match(phoneRegex)){
alert('Please enter a valid emergency number.');
return;
}
localStorage.setItem('bpUserName', name);
localStorage.setItem('bpEmergencyNumber', number);
localStorage.setItem('bpUserPassword', password);
alert('Settings Saved!');
}


function callEmergency(){
const number = localStorage.getItem('bpEmergencyNumber');
if(number){
// triggers phone dialer on supported devices
window.location.href = `tel:${number}`;
} else {
alert('No emergency number set. Please save your settings first.');
}
}


window.onload = () => {
const savedNumber = localStorage.getItem('bpEmergencyNumber');
const savedName = localStorage.getItem('bpUserName');
const savedPass = localStorage.getItem('bpUserPassword');
if(savedNumber){
document.getElementById('emergencyNumber').value = savedNumber;
}
if(savedName){
document.getElementById('userName').value = savedName;
}
if(savedPass){
document.getElementById('userPassword').value = savedPass;
}
}