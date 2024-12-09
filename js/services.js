const services = [
    "Стрижка - 500 гр.",
    "Стрижки бороди, вусів - 600 гр.",
    "Вечірні та весільні зачіски - 1800 гр.",
    "Покраска волосся - 400 гр.",
    "Завивка волосся - 400 гр.",
    "Відновлення волосся - 1000 гр.",
    "Педикюр: класичний, апаратний, SPA педикюр - 700/900/1100 гр.",
    "SPA догляд для рук та ніг - 1500 гр.",
    "Покриття нігтів гель-лаком Shellac CND, Kodi - 1200 гр.",
    "Нарощування та зміцнення натуральних нігтів гелем - 1600 гр.",
    "Макіяж - 300-700 гр.",
    "Візаж - 250 гр."
];


const servicesList = document.getElementById("services-list");


services.forEach(service => {
    const listItem = document.createElement("li");
    listItem.textContent = service;
    servicesList.appendChild(listItem);
});
