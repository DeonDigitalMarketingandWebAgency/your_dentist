// appointment.js

// document.getElementById('appointmentForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get form data
//     const name = document.getElementById('appointmentName').value;
//     const email = document.getElementById('appointmentEmail').value;
//     const phone = document.getElementById('appointmentPhone').value;
//     const service = document.getElementById('appointmentService').value;
//     const date = document.getElementById('appointmentDate').value;
//     const time = document.getElementById('appointmentTime').value;
//     const notes = document.getElementById('appointmentMessage').value;

//     // Validate form fields
//     if (!name || !email || !phone || !service || !date || !time) {
//         alert('Please fill in all required fields.');
//         return;
//     }

//     // Simulate form submission
//     alert(`Appointment booked successfully!\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}\nNotes: ${notes || 'None'}`);

//     // Reset the form
//     document.getElementById('appointmentForm').reset();

//     // Close the modal (requires Bootstrap's modal API)
//     const appointmentModal = document.getElementById('appointmentModal');
//     const modalInstance = bootstrap.Modal.getInstance(appointmentModal);
//     modalInstance.hide();
// });




// Initialize Flatpickr and handle Appointment Form submission
// document.addEventListener('DOMContentLoaded', function () {
//     // Initialize Flatpickr for Preferred Date
//     flatpickr("#appointmentDate", {
//         dateFormat: "Y-m-d",
//         minDate: "today", // Disable past dates
//         altInput: true, // Show a user-friendly display format
//         altFormat: "F j, Y", // Display format (e.g., January 1, 2025)
//     });

//     // Initialize Flatpickr for Preferred Time
//     flatpickr("#appointmentTime", {
//         enableTime: true, // Enable time selection
//         noCalendar: true, // Disable calendar view
//         dateFormat: "H:i", // Time format (24-hour clock)
//         time_24hr: true, // Use 24-hour format
//     });

//     // Handle form submission
//     document.getElementById('appointmentForm').addEventListener('submit', function (e) {
//         e.preventDefault(); // Prevent page reload

//         // Retrieve form data
//         const name = document.getElementById('appointmentName').value.trim();
//         const email = document.getElementById('appointmentEmail').value.trim();
//         const phone = document.getElementById('appointmentPhone').value.trim();
//         const service = document.getElementById('appointmentService').value.trim();
//         const date = document.getElementById('appointmentDate').value.trim();
//         const time = document.getElementById('appointmentTime').value.trim();
//         const message = document.getElementById('appointmentMessage').value.trim();

//         // Validate required fields
//         if (!name || !email || !phone || !service || !date || !time) {
//             alert("Please fill out all required fields before submitting the form.");
//             return;
//         }

//         // Simulate a successful appointment submission
//         alert(
//             `Thank you, ${name}! Your appointment request has been submitted successfully.\n\nDetails:\n- Service: ${service}\n- Date: ${date}\n- Time: ${time}\n- Email: ${email}\n- Phone: ${phone}\n- Notes: ${message || "No additional notes"}\n\nWe will contact you soon to confirm your appointment.`
//         );

//         // Reset the form
//         this.reset();

//         // Optionally, redirect after submission (adjust the URL as needed)
//         setTimeout(() => {
//             window.location.href = "index.html"; // Redirect to home or confirmation page
//         }, 3000);
//     });
// });





// Initialize Flatpickr for Preferred Date and Time
document.addEventListener('DOMContentLoaded', function () {
    // Flatpickr for Preferred Date
    flatpickr("#appointmentDate", {
        dateFormat: "Y-m-d",
        minDate: "today",
        disable: [
            function (date) {
                // Disable weekends (Saturday and Sunday)
                return date.getDay() === 0 || date.getDay() === 6;
            }
        ],
    });

    // Flatpickr for Preferred Time
    flatpickr("#appointmentTime", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        minTime: "09:00", // Start time: 9 AM
        maxTime: "18:00", // End time: 6 PM
    });

    // Form submission
    document.getElementById('appointmentForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('appointmentName').value;
        const email = document.getElementById('appointmentEmail').value;
        const phone = document.getElementById('appointmentPhone').value;
        const service = document.getElementById('appointmentService').value;
        const date = document.getElementById('appointmentDate').value;
        const time = document.getElementById('appointmentTime').value;
        const notes = document.getElementById('appointmentMessage').value;

        // Validate form fields
        if (!name || !email || !phone || !service || !date || !time) {
            alert('Please fill in all required fields.');
            return;
        }

        // Simulate form submission
        alert(`Appointment booked successfully!\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}\nNotes: ${notes || 'None'}`);

        // Reset the form
        document.getElementById('appointmentForm').reset();

        // Optionally, redirect after submission (adjust the URL as needed)
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect to home or confirmation page
        }, 3000);

        // Close the modal (requires Bootstrap's modal API)
        const appointmentModal = document.getElementById('appointmentModal');
        const modalInstance = bootstrap.Modal.getInstance(appointmentModal);
        modalInstance.hide();
    });
});
