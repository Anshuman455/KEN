function addnewWEField() {
    // console.log("adding new....");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here")

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addnewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("roms", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButton);
}

//generating cv

function generateCV() {
    let namefield = document.getElementById('namefield').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = namefield;

    // heading name
    document.getElementById('nameT2').innerHTML = namefield;

    //Profession
    document.getElementById('proT').innerHTML = document.getElementById('profield').value;

    // mobile no.
    document.getElementById('contactT').innerHTML = document.getElementById('contactfield').value;

    //address
    document.getElementById('addressT').innerHTML = document.getElementById('addressfield').value;



    //Gmail
    document.getElementById('gmailT').innerHTML = document.getElementById('gmailfield').value;

    //facebook
    document.getElementById('fbT').innerHTML = document.getElementById('fbfield').value;

    //instagram
    document.getElementById('instaT').innerHTML = document.getElementById('instafield').value;

    //linkedIn
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedfield').value;

    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectivefield').value;

    //Work experience
    let wes = document.getElementsByClassName('wefield');
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML = str;

    //aq
    let aqs = document.getElementsByClassName("aqfield");
    let str1 = "";
    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = str1;


    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';

    //image
    let file = document.getElementById('imgfield').files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);

    //ste img to template
    reader.onloadend = function() {
        document.getElementById('imgTemplate').src = reader.result;
    };

}

function printCV() {
    window.print();
}