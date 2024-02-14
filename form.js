function whatsapp() {
    var name = encodeURIComponent(document.getElementById("name").value);
    var phone = encodeURIComponent(document.getElementById("phone").value);
    var email = encodeURIComponent(document.getElementById("email").value);
    var timeslot = encodeURIComponent(document.getElementById("timeslot").value);
    var grade = encodeURIComponent(document.getElementById("grade").value);

    var whatsappurl = "https://wa.me/918800741590?text=" +
        "NEW Query!%0a" +
        "Name: " + name + "%0a" +
        "Phone: " + phone + "%0a" +
        "Email: " + email + "%0a" +
        "Class: " + grade + "%0a" +
        "Time: " + timeslot;

    window.open(whatsappurl, "_blank").focus();
}
