var lastName = prompt('Ваша фамилия?');
var firstName = prompt('Ваше имя?');
var middleName = prompt('Ваше отчество?');
var years = prompt('Сколько вам лет?');
var yourSex = confirm('Ваш пол мужской?');

var yearsInDays = years * 365;
var afterFiveYears = Number(years) + Number(5);

if (yourSex) {
    alert(`
    Ваше фио: ${lastName} ${firstName} ${middleName}
    Ваш возраст в годах: ${years}
    Ваш возраст в днях: ${yearsInDays}
    Через 5 лет вам будет: ${afterFiveYears}
    Ваш пол: мужской
    Вы на пенсии: нет`)
} 
else {

}
 
/*второй способ
var lastName = prompt('Ваша фамилия')
var firstName = prompt('Ваше имя')
var middleName = prompt('Ваше отчество')
var years = prompt('Ваш возраст')
var yourSex = confirm('Ваш пол-мужской?')
var yearsInDays = yourAge * 365
var afterFiveYears = Number(yourAge) + Number(5)
yourSex ? alert (`Ваше фио: ${lastName} ${firstName} ${middleName}
    Ваш возраст в годах: ${years}
    Ваш возраст в днях: ${yearsInDays}
    Через 5 лет вам будет: ${afterFiveYears}
    Ваш пол: мужской
    Вы на пенсии: нет`) : ('')*/