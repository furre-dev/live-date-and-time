setInterval(setClock, 1000);

let clockWrapper = document.querySelector(".clock-wrapper");

let dateTitle = document.querySelector(".dateTitle");
let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let seconds = document.querySelector(".second");

function setClock() {

    let timeData = new Date();
    let timeYear = new Date().getFullYear();
    let timeMonth = new Date().getMonth();
    let timeDay = new Date().getDay();
    let timeDate = new Date().getDate();

    switch (timeMonth) {
        case 0: timeMonth = "January";
            break;
        case 1: timeMonth = "February";
            break;
        case 2: timeMonth = "March";
            break;
        case 3: timeMonth = "April";
            break;
        case 4: timeMonth = "May";
            break;
        case 5: timeMonth = "June";
            break;
        case 6: timeMonth = "July";
            break;
        case 7: timeMonth = "August";
            break;
        case 8: timeMonth = "September";
            break;
        case 9: timeMonth = "October";
            break;
        case 10: timeMonth = "November";
            break;
        case 11: timeMonth = "December";
            break;
    }

    switch (timeDay) {
        case 0: timeDay = "Sunday"
            break;
        case 1: timeDay = "Monday"
            break;
        case 2: timeDay = "Tuesday"
            break;
        case 3: timeDay = "Wednesday"
            break;
        case 4: timeDay = "Thursday"
            break;
        case 5: timeDay = "Friday"
            break;
        case 6: timeDay = "Saturday"
            break;

    }


    dateTitle.textContent = timeDay + ", " + timeDate + " " + timeMonth + " " + timeYear;






    //get the hours from Date() object. If the hour is only 1 number, add a 0 in the beginning and put it in the hours object.
    if (timeData.getHours().toString().length < 2) {
        hours.textContent = "0" + timeData.getHours().toString();
    } else {
        hours.textContent = timeData.getHours().toString();
    }

    //get the minutes from Date() object. If the hour is only 1 number, add a 0 in the beginning and put it in the minutes object.
    if (timeData.getMinutes().toString().length < 2) {
        minutes.textContent = "0" + timeData.getMinutes().toString();
    } else {
        minutes.textContent = timeData.getMinutes().toString();
    }

    // get the seconds from Date() object. If the hour is only 1 number, add a 0 in the beginning and put it in the seconds element.
    if (timeData.getSeconds().toString().length < 2) {
        seconds.textContent = "0" + timeData.getSeconds().toString();
    } else {
        seconds.textContent = timeData.getSeconds().toString();
    }
}
setClock();
