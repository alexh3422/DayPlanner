  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
  $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $(".saveBtn").on("click", function () {
      let text = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");
      localStorage
        .setItem(time, text);
    });
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
  
    $(function () {
      function updateTimeBlocks() {
        let currentHour = dayjs().hour();
    
        $(".time-block").each(function() {
          let timeBlockHour = $(this).attr("id").split("-")[1];
    
          $(this).removeClass("past present future");
    
          if (timeBlockHour < currentHour) {
            $(this).addClass("past");
          } else if (timeBlockHour > currentHour) {
            $(this).addClass("future");
          } else {
            $(this).addClass("present");
          }
        });
      }
    
      setInterval(updateTimeBlocks, 1000);
    });
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    //
    // TODO: Add code to display the current date in the header of the page.
  const currentDay = dayjs().format("dddd, MMMM D, YYYY, hh:mm:ss a");

  $("#currentDay").text(currentDay);  
  setInterval(function () {
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY, hh:mm:ss a"));
  }
  , 1000);


  });
  //function below to clear local storage and refresh page when it is a new day (DAY planner is for one day only)
  setInterval(function () {
    // Get the current date and time
    let currentDate = dayjs().format("YYYY-MM-DD");
  
    // Check if the date has changed since the last time this function was called
    if (currentDate !== localStorage.getItem("previousDate")) {
      // The date has changed, so reset the page
      localStorage.clear();
      location.reload();
    }
  
    // Update the "lastDate" in local storage
    localStorage.setItem("previousDate", currentDate);
  }, 1000); // Check every second
  