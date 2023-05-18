# Simple Calendar Application
The Simple Calendar Application is a user-friendly calendar that helps users track their daily schedule. The application updates the color of each hour block dynamically as time passes, providing a visual representation of the current time. Additionally, it allows users to save their text inputs for each hour, which are stored in the local storage and retrieved when the application is reopened.

![Photo of webpage](./assets/Screenshot%202023-05-17%20at%204.45.32%20PM.jpg)
URL: https://treesaretall.github.io/calendar/

## Features
- Hourly Color Update: The application automatically updates the color of each hour block based on the current time. Past hours are displayed in grey, the present hour is red, and future hours are green. This feature enables users to easily identify the current time and visually organize their day.

- Text Input and Saving: Users can enter and save text input for each hour. The application provides a text area for users to enter their schedule, reminders, or any other information. The entered text is saved to the local storage, ensuring that the data is preserved even if the application is closed or refreshed. When the application is reopened, the saved text inputs are retrieved and displayed in the respective hour blocks, allowing users to review and update their plans.

- User-Friendly Interface: The Calendar Application offers a clean and intuitive interface, making it easy for users to navigate and interact with the calendar. The hour blocks are clearly labeled, and the color-coded scheme provides a visual cue for the current time and the status of each hour.

## Technologies Used
- HTML: The application's structure and layout are created using HTML.
- CSS: CSS is utilized to style the user interface, including the hour blocks, colors, and overall aesthetics.
- JavaScript: The dynamic functionality, such as color updates and text input saving, is implemented using JavaScript. The application leverages the local storage API for data persistence.
- Date and Time Libraries: Day.js is used to handle time-related operations, including comparing the current time with the hour blocks and formatting time displays.

## Usage
- Open the Hourly Calendar Application in a web browser.
- The calendar will be displayed, showing the hourly blocks for the day.
- Each hour block will have a text area where you can enter your schedule or reminders for that specific hour.
- As time passes, the color of the hour blocks will be automatically updated to indicate past, present, and future hours.
- Enter your text inputs in the respective hour blocks and click the save button to the right. The application will save the text to the local storage.
- If you close or refresh the application, your saved text inputs will be retrieved and displayed when you reopen the application.
- You can update or modify your text inputs at any time by editing the respective hour block.
- Enjoy using the Hourly Calendar Application to stay organized and manage your daily schedule efficiently!
Note: Make sure your browser has local storage enabled for the application to save and retrieve data successfully.

## Future Enhancements
Here are some potential enhancements that could be implemented in future versions of the Hourly Calendar Application:

- User Authentication: Introduce user authentication to allow multiple users to have their own personalized calendars and securely store their data.
- Reminder Notifications: Add a notification feature to remind users of upcoming events or tasks based on the scheduled time.
- Customizable Themes: Provide different themes or customization options to allow users to personalize the appearance of the calendar according to their preferences.
- Sharing and Collaboration: Enable users to share their calendars with others and collaborate on scheduling or planning activities together.

## License
This project is licensed under the MIT License.