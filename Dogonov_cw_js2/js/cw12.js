// Напишите if..else, соответствующий следующему switch:
			
//             switch (browser) {
//               case 'Edge':
//               alert( "You've got the Edge!" );
//               break;

//               case 'Chrome':
//               case 'Firefox':
//               case 'Safari':
//               case 'Opera':
//               alert('Okay we support these browsers too');
//               break;

//               default:
//               alert('We hope that this page looks ok!');
//             }
var browser = prompt("Введите ваш браузер");
var edge = "Edge";
var chrome = "Chrome";
var firefox = "Firefox";
var safari = "Safari";
var opera = "Opera";
if (browser === edge) {
    alert( "You've got the Edge!" );
}
else if (browser === chrome) {
    alert('Okay we support these browsers too');
}
else if (browser === firefox) {
    alert('Okay we support these browsers too');
}
else if (browser === safari) {
    alert('Okay we support these browsers too');
}
else if (browser === opera) {
    alert('Okay we support these browsers too');
}
else {
    alert('We hope that this page looks ok!');
}
