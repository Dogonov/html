var login = "Админ";
var login_user = prompt("логин");
if (login === login_user) {
    var pas = "Я главный";
    var pas_user = prompt("пароль");

    if (pas === pas_user) {
        alert("Здравствуйте!");
    }
    else if (pas_user === '') {
        console.log("Oтменено");
        alert("Oтменено");
    }
    else if (pas_user === null) {
        console.log("Oтменено");
        alert("Oтменено");
    }
    else if (pas !== pas_user) {
        alert("Неверный пароль");
    }
}
else if (login_user === '') {
    console.log("Oтменено");
    alert("Oтменено");
}
else if (login_user === null) {
    console.log("Oтменено");
    alert("Oтменено");
}
else if (login !== login_user) {
    alert("Я вас не знаю");
}