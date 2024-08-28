function submitData(event) {
    event.preventDefault();

const name =document.getElementById("name").value;
const email=document.getElementById("email").value;
const phoneNumber=document.getElementById("phoneNumber").value;
const subject=document.getElementById("subject").value;
const massage=document.getElementById("massage").value;

// alert (`Name: ${inputName}\nEmail: ${inputEmail}\nNumber: ${inputphoneNumber}\nSubject: ${inputSubject}\nMassage: ${inputMassage}`);

if (name == ""){
    return alert ("Silahkan Masukan nama")
}
else if (email == "") {
    return alert("Silahkan Masukan email")
}
else if (phoneNumber == ""){
    return alert("Silahkan Masukan phone number")
}
else if (subject==""){
    return alert("Silahkan Masukan Subject")
}
else if (massage==""){
    return alert("Silahkan Masukan Massage")
}

console.log(name)
console.log(email)
console.log(phoneNumber)
console.log(subject)
console.log(massage)

let a = document.createElement('a')

a.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(massage)}`

a.click()

}



