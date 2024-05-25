# React + Vite

1. Landing Page:
   - A top navigation bar with access to platform sections such as Find Doctors, Hospitals, Medicines, and more.
   - A search section for users to select a state and city, leading to a list of available medical centers in the chosen area.
   - Both State and City should have a dropdown where the options will be fetched from an API which is provided in the problem description.
   - Other sections as provided in the Figma design.

2. Search Results Page:
   - A listings view showing available medical centers in the selected location with the option to book appointments.

3. Booking Interface:
   - A detailed booking section for users to select a medical center, with a calendar-like interface to choose an appointment date.
   - The ability to book an appointment within a time frame from today up to one week in advance.
   - A selection of available time slots for the selected day.

4. My Bookings Page:
   - A personalized page displaying all user bookings, including details such as the medical center's name, appointment date, and time.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
