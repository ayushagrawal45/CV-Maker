// js

//for adding new work experience field
function addNewWeField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "e.g. show your relevant experience");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode , weAddButtonOb);
}

// for adding new academic field
function addNeweqField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "e.g. Graduted with higher degree");

    let eqOb = document.getElementById("eq");
    let eqAddButtonOb = document.getElementById("eqAddButton");

    eqOb.insertBefore(newNode , eqAddButtonOb);
}

// generate CV
function generateCV(){
    //set first and last name
    let fnamefield = document.getElementById("fnamefield").value;
    let lnamefield  = document.getElementById("lnamefield").value;
    let nameT1=document.getElementById('nameT1');

    nameT1.innerHTML=fnamefield+" "+lnamefield;

    document.getElementById("nameT2").innerHTML=fnamefield+" "+lnamefield;

    //set email
    document.getElementById("emailT").innerHTML=document.getElementById("emailfield").value;

    //set contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;

    //city country
    document.getElementById("countryT").innerHTML=document.getElementById("cityfield").value +","+ document.getElementById("countryfield").value;

    //set address
    document.getElementById("AddressT").innerHTML=document.getElementById("addressfield").value;

    //set facebook
    document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;

    //set instagram
    document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;

    //set linkedin
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedinfield").value;
    
    //set objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefield").value;

    //work experience field
     let s=document.getElementsByClassName('weField');

     let str2='';

     for(let i of s){
         str2 = str2 + `<li> ${i.value} </li>`;
     }

     document.getElementById('weT').innerHTML=str2;

    // academic experience field
    let wes=document.getElementsByClassName('eqField');

    let str='';

    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML=str;

   
    
}

// print cv
function printCV(){
    window.print();
}