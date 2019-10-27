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
            