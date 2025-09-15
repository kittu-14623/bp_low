function saveUserSettings(){
const name = document.getElementById('userName').value;
const number = document.getElementById('emergencyNumber').value;
const password = document.getElementById('userPassword').value;
if(number){
localStorage.setItem('bpUserName', name);
localStorage.setItem('bpEmergencyNumber', number);
localStorage.setItem('bpUserPassword', password);
alert('Settings Saved!');
} else {
alert('Please enter an emergency number');
}
}


function callEmergency(){
const number = localStorage.getItem('bpEmergencyNumber');
if(number){
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