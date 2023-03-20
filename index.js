// Array of class objects
const classes = [
    {
      name: "Yoga",
      availability: [
        { date: "TimeSlots", time: "Monday - 10:00 am to 12:00 pm" },
        { date: "Tuesday - 11:00 am to 01:00 pm", time: "Wednesday - 12:00 pm to 02:00 pm" },
        { date: "Available Slots:", time: "10" },
      ],
    },
    {
      name: "English",
      availability: [
        { date: "TimeSlots", time: "Monday - 10:00 am to 12:00 pm" },
        { date: "Tuesday - 11:00 am to 01:00 pm", time: "Wednesday - 12:00 pm to 02:00 pm" },
        { date: "Available Slots:", time: "18" },
      ],
    },
    {
      name: "Mathematics",
      availability: [
        { date: "TimeSlots", time: "Monday - 10:00 am to 12:00 pm" },
        { date: "Tuesday - 11:00 am to 01:00 pm", time: "Wednesday - 12:00 pm to 02:00 pm" },
        { date: "Available Slots:", time: "11" },
      ],
    },
  ];
  
  // Get HTML elements
  const searchForm = document.querySelector("form:first-of-type");
  const calendarDiv = document.querySelector("#calendar");
  const bookingForm = document.querySelector("form:last-of-type");
  
  // Event listener for search form submission
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchInput = document.querySelector("#search");
    const searchValue = searchInput.value.toLowerCase();
    const filteredClasses = classes.filter(function (classObj) {
      return classObj.name.toLowerCase().includes(searchValue);
    });
    displayCalendar(filteredClasses);
  });
  
  // Function to display class availability calendar
  function displayCalendar(classArray) {
    let calendarHTML = "";
    classArray.forEach(function (classObj) {
      calendarHTML += "<h2>" + classObj.name + "</h2>";
      classObj.availability.forEach(function (slot) {
        calendarHTML +=
          '<div class="slot" data-date="' +
          slot.date +
          '" data-time="' +
          slot.time +
          '">' +
          slot.date +
          "<br>" +
          slot.time +
          "</div>";
      });
    });
    calendarDiv.innerHTML = calendarHTML;
    const slots = document.querySelectorAll(".slot");
    slots.forEach(function (slot) {
      slot.addEventListener("click", function () {
        bookingForm.date.value = this.getAttribute("data-date");
        bookingForm.time.value = this.getAttribute("data-time");
      });
    });
  }
  
  // Event listener for booking form submission
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const dateInput = document.querySelector("#date");
    const timeInput = document.querySelector("#time");
    const bookingObj = {
      name: nameInput.value,
      email: emailInput.value,
      date: dateInput.value,
      time: timeInput.value,
    };
    console.log(bookingObj);
    alert("Your class is booked!")
    bookingForm.reset();
  });
  