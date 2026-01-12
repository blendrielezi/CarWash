function funk(event) {
   
    event.preventDefault();

    var a = document.getElementById("aa").value;
    var b = document.getElementById("bb").value;

    if (a === "" && b === "") {
        alert("Vlera e emrit dhe emailit eshte e detyrueshme");
    } else if (a === "") {
        alert("Vlera e emrit eshte e detyrueshme");
    } else if (b === "") {
        alert("Vlera e emailit eshte e detyrueshme");
    } else {
        alert("faleminderit!");
    }
    return false; 
}
