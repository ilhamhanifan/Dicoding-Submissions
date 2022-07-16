document.getElementById('emoticon').innerHTML = String.fromCodePoint(128525);

//slider rating reaction
function slideVal(value) {
    var result = "";
    console.log(value)
    switch (value) {
        case "1":
            result = String.fromCodePoint(128532);
            break;
        case "2":
            result = String.fromCodePoint(128512);
            break;
        case "3":
            result = String.fromCodePoint(128516);
            break;
        case "4":
            result = String.fromCodePoint(128518);
            break;
        case "5":
            result = String.fromCodePoint(128525);
            break;
        default:

    }
    console.log(result)
    document.getElementById('emoticon').innerHTML = result;
}

//render bio using for..in loop
function renderBio() {
    let bio = {
        Nama: "Muhammad Ilham Hanifan",
        Alamat: "Jakarta",
        Universitas: "Gunadarma",
        Hobby: "Travelling",
        Agama: "Islam",
        TTL: "01/01/01",
        Umur: "20",


    }
    let biodata = document.querySelector("#biodata");

    for (let key in bio) {
        let row = document.createElement('tr');
        row.innerHTML += "<td>" + key + "</td>";
        row.innerHTML += "<td>" + bio[key] + "</td>";
        biodata.appendChild(row);
    }
}

renderBio()

//toggle dropdown when in mobile 
function burgerTime() {
    var burger = document.getElementsByTagName("UL")[0];
    console.log(burger)
    burger.classList.toggle("visible");
}