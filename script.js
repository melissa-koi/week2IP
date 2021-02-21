let resultPar = document.getElementById('output')
function getInput(event) {
    event.preventDefault();
    let birthdate = document.getElementById('bday').value
    let myBdate = new Date(birthdate).toDateString()
    let day = myBdate.slice(0,3);

    let gender= document.querySelector('input[name="gender"]:checked').value;


    
    if(gender === "male" && day === "Sun") {
        Name="Kwasi"
    }else if(gender === "male" && day === "Mon") {
        Name="Kwadwo"
    }else if(gender === "male" && day === "Tue"){
        Name="Kwabena"
    }else if(gender === "male" && day == "Wed") {
        Name="Kwaku"
    }else if(gender === "male" && day === "Thu") {
        Name="Yaw"
    }else if(gender === "male" && day === "Fri") {
        Name="Kofi"
    }else if(gender === "male" && day === "Sat") {
        Name="Kwame"
    }else if(gender === "female" && day === "Sun") {
        Name="Akosua"
    }else if(gender === "female" && day === "Mon") {
        Name="Adwoa"
    }else if(gender === "female" && day === "Tue") {
        Name="Abenaa"
    }else if(gender === "female" && day === "Wed") {
        Name="Akua"
    }else if(gender === "female" && day === "Thu") {
        Name="Yaa"
    }else if(gender === "female" && day === "Fri") {
        Name="Afua"
    }else if(gender === "female" && day === "Sat") {
        Name="Ama"
    }else {
        Name="Invalid answer";
    }

    let message = `Your Akan name is ${Name}`
    resultPar.innerHTML = message;
}

