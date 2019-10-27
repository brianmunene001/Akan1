var maleNames = {
    Sunday: 'Kwasi',
    Monday: 'Kwadwo',
    Tuesday: 'Kwabena',
    Wednesday: 'Kwaku',
    Thursday: 'Yaw',
    Friday: 'Kofi',
    Saturday: 'Kwame',
    };
    var femaleNames = {
        Sunday: 'Akosua',
        Monday: 'Adwoa',
        Tuesday: 'Abenaa',
        Wednesday: 'Akua',
        Thursday: 'Yaa',
        Friday: 'Afua',
        Saturday: 'Ama',
        };
        function validation() {
            var date = document.getElementById("d").value;
            var month = document.getElementById("m").value;
            var year = document.getElementById("yy").value;
            var gen = document.getElementsByName("gd");
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            
            if(isNaN(date) || date === null || date === "" || date < 1 || date > 31){
                alert("invalid date");
                return false;
            }
            var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
if(isNaN(month) || month=== "" || month ===null || month <1 || month>12){
    
    alert("invalid month");
   return false;
}
if(month===1 || month>2){
    if (date>ListofDays[month-1])
    {
        alert('Invalid date format!');
return false;
}
}
if(month===2){
    var lyear = false;
    if ( (!(year % 4) && year % 100) || !(year % 400)) 
{
    lyear = true;
}
if ((lyear==false) && (date>=29))
{
    alert('Invalid date format!');
return false;
}
if ((lyear==true) && (date>29))
{
    alert('Invalid date format!');
return false;
}
}
if(isNaN(year) || year === "" ||year === null || year <1900 || year > currentYear){
    alert("invalid year");
    return false;
}
if (gen[0].checked === false && gen[1].checked === false) {

    alert('select gender');
} else {
    for (var i = 0; i < gen.length; i++) {
        if (gen[i].checked){
           alert(gen[i].value);
               gend = gen[i].value;
    }
   }
   var userInputs ={
    userDate: date,
    userMonth: month,
    userYear: year,
    userGender: gend
};
return userInputs;
            }           
}
function myFunction(){
    var a = validation();
    var DD = parseInt(a.userDate);
    var MM = parseInt(a.userMonth);
    var newYear = a.userYear;
    var newGender = a.userGender;
    var a = Math.floor((14 - MM) / 12);
var y = newYear - a;
var m = MM + 12 * a - 2;
var dayOfTheWeek = (DD + y + Math.floor(y / 4) - Math.floor(y / 100) +
Math.floor(newYear / 400) + Math.floor((31 * m) / 12)) % 7;

