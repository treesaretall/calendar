// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const currentTime = dayjs().format('HH:mm:ss');
let currentDay = $('#currentDay');
let nine = $('#hour-9');
let ten = $('#hour-10');
let eleven = $('#hour-11');
let twelve = $('#hour-12');
let one = $('#hour-1');
let two = $('#hour-2');
let three = $('#hour-3');
let four = $('#hour-4');
let five = $('#hour-5');

// Function to update the clock display
function updateClock() {
  currentDay.text(currentTime);
};
updateClock();
setInterval(updateClock, 1000);

$(document).ready(function() {
  var targetTime = new Date();

  // Compare the current time with the target time
  if (dayjs().isBefore(targetTime.setHours(9), 'hour')) {
    nine.removeClass('past present').addClass('future');
  } else if (dayjs().isSame(targetTime.setHours(9), 'hour')) {
    nine.removeClass('past future').addClass('present');
  } else if (dayjs().isAfter(targetTime.setHours(9), 'hour')) {
    nine.removeClass('present future').addClass('past');
  }

  if (dayjs().isBefore(targetTime.setHours(10), 'hour')) {
    ten.removeClass('past present').addClass('future');
  } else if (dayjs().isSame(targetTime.setHours(10), 'hour')) {
    ten.removeClass('past future').addClass('present');
  } else if (dayjs().isAfter(targetTime.setHours(10), 'hour')) {
    ten.removeClass('present future').addClass('past');
  }
  if (dayjs().isBefore(targetTime.setHours(11), 'hour')) {
    eleven.removeClass('past present').addClass('future');
  } else if (dayjs().isSame(targetTime.setHours(11), 'hour')) {
    eleven.removeClass('past future').addClass('present');
  } else if (dayjs().isAfter(targetTime.setHours(11), 'hour')) {
    eleven.removeClass('present future').addClass('past');
  }
  if (dayjs().isBefore(targetTime.setHours(12), 'hour')) {
    twelve.removeClass('past present').addClass('future');
  } else if (dayjs().isSame(targetTime.setHours(12), 'hour')) {
    twelve.removeClass('past future').addClass('present');
  } else if (dayjs().isAfter(targetTime.setHours(12), 'hour')) {
    twelve.removeClass('present future').addClass('past');
  }
  if (dayjs().isBefore(targetTime.setHours(13), 'hour')) {
    one.removeClass('past present').addClass('future');
  } else if (dayjs().isSame(targetTime.setHours(13), 'hour')) {
    one.removeClass('past future').addClass('present');
  } else if (dayjs().isAfter(targetTime.setHours(13), 'hour')) {
    one.removeClass('present future').addClass('past');
  }
  if (dayjs().isBefore(targetTime.setHours(14), 'hour')) {
    two.removeClass('past present').addClass('future');
  } else if (dayjs().isSame(targetTime.setHours(14), 'hour')) {
    two.removeClass('past future').addClass('present');
  } else if (dayjs().isAfter(targetTime.setHours(14), 'hour')) {
    two.removeClass('present future').addClass('past');
  }
  if (dayjs().isBefore(targetTime.setHours(15), 'hour')) {
    three.removeClass('past present').addClass('future');
  } else if (dayjs().isSame(targetTime.setHours(15), 'hour')) {
    three.removeClass('past future').addClass('present');
  } else if (dayjs().isAfter(targetTime.setHours(15), 'hour')) {
    three.removeClass('present future').addClass('past');
  }
  if (dayjs().isBefore(targetTime.setHours(16), 'hour')) {
    four.removeClass('past present').addClass('future');
  } else if (dayjs().isSame(targetTime.setHours(16), 'hour')) {
    four.removeClass('past future').addClass('present');
  } else if (dayjs().isAfter(targetTime.setHours(16), 'hour')) {
    four.removeClass('present future').addClass('past');
  }
  if (dayjs().isBefore(targetTime.setHours(17), 'hour')) {
    five.removeClass('past present').addClass('future');
  } else if (dayjs().isSame(targetTime.setHours(17), 'hour')) {
    five.removeClass('past future').addClass('present');
  } else if (dayjs().isAfter(targetTime.setHours(17), 'hour')) {
    five.removeClass('present future').addClass('past');
  }
})


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.