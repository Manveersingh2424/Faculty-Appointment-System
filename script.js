function selectFaculty(name, subject) {
    document.getElementById("facultyName").value = name;
    document.getElementById("subject").value = subject;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

var today = new Date();
var year = today.getFullYear();
var month = String(today.getMonth() + 1).padStart(2, "0");
var day = String(today.getDate()).padStart(2, "0");
var todayDate = year + "-" + month + "-" + day;

document.getElementById("appointmentDate").min = todayDate;

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var studentName = document.getElementById("studentName").value.trim();
    var registrationNumber = document.getElementById("RegistrationNumber").value.trim();
    var faculty = document.getElementById("facultyName").value;
    var subject = document.getElementById("subject").value;
    var date = document.getElementById("appointmentDate").value;
    var time = document.getElementById("appointmentTime").value;
    var reason = document.getElementById("reason").value.trim();

    if (studentName == "" || registrationNumber == "" || faculty == "" ||
        subject == "" || date == "" || time == "" || reason == "") {
        alert("Please fill all the details.");
        return;
    }

    if (studentName.length < 3) {
        alert("Please enter a valid student name.");
        return;
    }

    if (registrationNumber.length < 3) {
        alert("Please enter a valid registration number.");
        return;
    }

    if (date < todayDate) {
        alert("Please select today's date or a future date.");
        return;
    }

    var appointmentList = document.getElementById("appointmentList");
    var noAppointment = document.querySelector(".no-appointment");

    if (noAppointment) {
        noAppointment.remove();
    }

    var appointment = document.createElement("div");
    appointment.className = "appointment";

    appointment.innerHTML =
        "<h3>Appointment Booked</h3>" +
        "<p><b>Student:</b> " + studentName + "</p>" +
        "<p><b>Registration Number:</b> " + registrationNumber + "</p>" +
        "<p><b>Faculty:</b> " + faculty + "</p>" +
        "<p><b>Subject:</b> " + subject + "</p>" +
        "<p><b>Department:</b> Computer Science Engineering</p>" +
        "<p><b>Date:</b> " + date + "</p>" +
        "<p><b>Time:</b> " + time + "</p>" +
        "<p><b>Reason:</b> " + reason + "</p>" +
        "<p class='status'><b>Status:</b> Confirmed</p>" +
        "<button class='cancel-btn' onclick='cancelAppointment(this)'>Cancel Appointment</button>";

    appointmentList.appendChild(appointment);

    alert("Appointment booked successfully!\n\n" +
        "Faculty: " + faculty + "\n" +
        "Subject: " + subject + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time);

    document.getElementById("appointmentForm").reset();
    document.getElementById("appointmentDate").min = todayDate;

    document.getElementById("appointments").scrollIntoView({
        behavior: "smooth"
    });
});
function cancelAppointment(button) {
    var answer = confirm("Are you sure you want to cancel this appointment?");

    if (answer == true) {
        button.parentElement.remove();

        var appointments = document.getElementsByClassName("appointment");

        if (appointments.length == 0) {
            document.getElementById("appointmentList").innerHTML =
                "<p class='no-appointment'>No appointments booked yet.</p>";
        }

        alert("Appointment cancelled successfully.");
    }
}
document.getElementById("facultyName").addEventListener("change", function() {
    var faculty = this.value;
    var subject = document.getElementById("subject");

    if (faculty == "Dr. Chirag Sharma") {
        subject.value = "Internet Programming";
    }
    else if (faculty == "Minu Choudhary") {
        subject.value = "Python";
    }
    else if (faculty == "Dr. Akash Kumar") {
        subject.value = "Engineering Mathematics";
    }
    else if (faculty == "Kedar Nath Singh") {
        subject.value = "Design Thinking";
    }
    else if (faculty == "Karun Handa") {
        subject.value = "Orienting to Computing";
    }
    else {
        subject.value = "";
    }
});
document.getElementById("subject").addEventListener("change", function() {
    var subject = this.value;
    var faculty = document.getElementById("facultyName");

    if (subject == "Internet Programming") {
        faculty.value = "Dr. Chirag Sharma";
    }
    else if (subject == "Python") {
        faculty.value = "Minu Choudhary";
    }
    else if (subject == "Engineering Mathematics") {
        faculty.value = "Dr. Akash Kumar";
    }
    else if (subject == "Design Thinking") {
        faculty.value = "Kedar Nath Singh";
    }
    else if (subject == "Orienting to Computing") {
        faculty.value = "Karun Handa";
    }
    else {
        faculty.value = "";
    }
});
