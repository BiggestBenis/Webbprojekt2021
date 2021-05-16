

/* KOD TILL NYHETSBREVFUNKTION*/
function nyhetsbrev() {
    var x = document.getElementById("nyhetinput").value;

    if (x == "") {
        alert("Du måste skriva in din email");
    }
    else {
        alert("Emailen " + x + " har lagts till i nyhetsbrevet.");
    }
}


/* KOD TILL TABLE FÖR ATT SKAPA SAMT FYLLA ROWS, ÄVEN EN VALIDERINGSFUNKTION FÖR ATT KUNNA VALIDERA ATT FÄLT ÄR I FYLLDA */
function BuildRowFunction() {
    var Data = DataTrue();


    if (Data == true) {
    var tbl = document.getElementById("tbl");
    var row = tbl.insertRow();

    var name = row.insertCell();
    var mail = row.insertCell();
    var number = row.insertCell();
    var meddelande = row.insertCell();

    name.innerHTML = document.getElementById("name").value;
    mail.innerHTML = document.getElementById("mail").value;
    number.innerHTML = document.getElementById("number").value;
    meddelande.innerHTML = document.getElementById("message").value;
    
}
}

function DataTrue() {

    var valid = true;

    var x = document.getElementById("name").value;
    if (x == "") {
        valid = false;
    }

    x = document.getElementById("mail").value;
    if(x == "") {
        valid = false;
    }

    x = document.getElementById("number").value;
    if(x == "") {
        valid = false;
    }

    x = document.getElementById("message").value;
    if(x == "") {
        valid = false;
    }
    return valid;
}



 /* KOD FÖR ATT KUNNA BYTA MENY */
function Meny() {
    document.getElementById("meny").classList.add('menu-select-active');
    document.getElementById("dagensmeny").classList.remove('menu-select-active');
    document.getElementById("vin").classList.remove('menu-select-active');

    document.getElementById("menutitle").innerHTML = "Meny";

    var meny = document.getElementsByClassName('menu-item-title');

    for (var i = 0; i < meny.length; i++) {
        meny[i].innerHTML = "Meny option";
    }

    document.getElementById("menu1").innerHTML = "Spaghetti alla carbonara";
    document.getElementById("menu2").innerHTML = "Ossubuco alla milanese";
    document.getElementById("menu3").innerHTML = "Lasagna";
    document.getElementById("menu4").innerHTML = "Canederli";
    document.getElementById("menu5").innerHTML = "Focaccia di Recco";
    
    document.getElementsByClassName("menu-item-cost").innerHTML = "150sek";

    var cost = document.getElementsByClassName('menu-item-cost');

    for (var i = 0; i < cost.length; i++) {
        cost[i].innerHTML = "150sek";
    }

}


 /* KOD FÖR ATT KUNNA BYTA MENY */
function DagensMeny() {
    document.getElementById("meny").classList.remove('menu-select-active');
    document.getElementById("dagensmeny").classList.add('menu-select-active');
    document.getElementById("vin").classList.remove('menu-select-active');

    document.getElementById("menutitle").innerHTML = "Dagens Meny";

    var meny = document.getElementsByClassName('menu-item-title');

    for (var i = 0; i < meny.length; i++) {
        meny[i].innerHTML = "Dagens Meny option";
    }

    document.getElementById("menu1").innerHTML = "Pizza Margaretha";
    document.getElementById("menu2").innerHTML = "Kebab pizza";
    document.getElementById("menu3").innerHTML = "Vesuvio";
    document.getElementById("menu4").innerHTML = "Capriccosa";
    document.getElementById("menu5").innerHTML = "Pizza Dal Baffo";
    
    document.getElementsByClassName("menu-item-cost").innerHTML = "100sek";

    var cost = document.getElementsByClassName('menu-item-cost');

    for (var i = 0; i < cost.length; i++) {
    cost[i].innerHTML = "90sek";
    }

}



 /* KOD FÖR ATT KUNNA BYTA MENY */
function Drinks() {
    document.getElementById("meny").classList.remove('menu-select-active');
    document.getElementById("dagensmeny").classList.remove('menu-select-active');
    document.getElementById("vin").classList.add('menu-select-active');

    document.getElementById("menutitle").innerHTML = "Vin";

    var meny = document.getElementsByClassName('menu-item-title');

    for (var i = 0; i < meny.length; i++) {
        meny[i].innerHTML = "Vin option";
    }

    document.getElementById("menu1").innerHTML = "Planeta Etna Rosso";
    document.getElementById("menu2").innerHTML = "Ruffino Modus";
    document.getElementById("menu3").innerHTML = "Cinqueterre";
    document.getElementById("menu4").innerHTML = "Brachetto d'Acqui";
    document.getElementById("menu5").innerHTML = "Moscato d'Asti";

    var cost = document.getElementsByClassName('menu-item-cost');

    for (var i = 0; i < cost.length; i++) {
    cost[i].innerHTML = "70sek";
    }
}


 /* KOD FÖR ATT KUNNA RESERVA SAMT ATT VALIDERA ATT FÄLT ÄR IFYLLDA*/ 
function reservera() {
    var valid = reserveraTrue();

    if(valid == true) {
        alert("Du har reserverat ett bord");
    }
}

function reserveraTrue() {
    var valid = true;

    var x = document.getElementById("select_1").value;
    if (x == "") {
        valid = false;
    }

    x = document.getElementById("datepicker").value;
    if(x == "") {
        valid = false;
    }

    x = document.getElementById("select_2").value;
    if(x == "") {
        valid = false;
    }

    return valid;
}