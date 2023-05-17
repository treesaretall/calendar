const currentDay = $('#currentDay');
const nine = $('#hour-9');
const ten = $('#hour-10');
const eleven = $('#hour-11');
const twelve = $('#hour-12');
const one = $('#hour-13');
const two = $('#hour-14');
const three = $('#hour-15');
const four = $('#hour-16');
const five = $('#hour-17');

// Function to update the clock display
function updateClock() {
  const currentDate = dayjs().format('YYYY-MMM-DD');
  const currentTime = dayjs().format('HH:mm:ss');
  currentDay.text(currentDate + ' ' + currentTime);
};
updateClock();
setInterval(updateClock,1000);


// Compare the current time with the target time and assign colors
$(document).ready(function() {
  let targetTime = new Date();
  let elements = [
    { element: nine, hour: 9 },
    { element: ten, hour: 10 },
    { element: eleven, hour: 11 },
    { element: twelve, hour: 12 },
    { element: one, hour: 13 },
    { element: two, hour: 14 },
    { element: three, hour: 15 },
    { element: four, hour: 16 },
    { element: five, hour: 17 }
  ];
  elements.forEach(function(item) {
    let element = item.element;
    let hour = item.hour;
    if (dayjs().isBefore(targetTime.setHours(hour), 'hour')) {
      element.removeClass('past present').addClass('future');
    } else if (dayjs().isSame(targetTime.setHours(hour), 'hour')) {
      element.removeClass('past future').addClass('present');
    } else if (dayjs().isAfter(targetTime.setHours(hour), 'hour')) {
      element.removeClass('present future').addClass('past');
    };
    targetTime = new Date();
  });
});

//Assigns event listeners to each button and saves input to local storage.
for (let i = 9; i <= 17; i++) {
  // Get the button and textarea elements based on their IDs
  let button = $(`#hour-${i} button`);
  let textarea = $(`#hour-${i} textarea`);

  // Attach event listener to the button
  button.on('click', function(event) {
    let text = textarea.val();
    localStorage.setItem(`savedText${i}`, text);
    alert('Saved!');
  });
}

//Get text from local storage and print it in calendar
for (let i = 9; i <= 17; i++) {
  let textarea = $(`#hour-${i} textarea`);
  (function() {
    let savedCont = localStorage.getItem(`savedText${i}`);
    textarea.text(savedCont);
  })();
}
