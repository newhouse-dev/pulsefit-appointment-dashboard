# pulsefit-appointment-dashboard
"PulseFit" Appointment Booking Dashboard (exercise for First Stop Health interview)

## Requirements
- Frontend UI for a dashboard where a user can view and book appointments with a personal trainer.

1. Appointment Listing:
o Display a list of upcoming appointments with details such as provider name, date, and
time.

2. Booking Appointments:
o Provide an interface for users to book new appointments by selecting a provider, date,
and time from a list of available slots.
o Ensure that booking an appointment updates the list of upcoming appointments.
o The user should then be sent to the Appointment Confirmation screen.
3. Appointment Confirmation:
o Provide an interface for users to see their appointment details once the appointment is
booked.
4. Design Fidelity:
o Please ensure that the UI implementation closely matches the provided designs in
terms of layout, spacing, colors, typography, and component behavior. Pixel-perfect
accuracy is not required, but attention to visual detail will be evaluated.
o Some design tokens are provided below to help you match colors and typography.
However, this list is not exhaustive. Please make reasonable assumptions where
needed and document them in your README.

5. Responsive Design:
o Ensure that the application is fully responsive, working well on both desktop and mobile
devices.
6. Code Quality:
o Write clean, maintainable code with proper use of React hooks, state management, and
modular components.
o Include comments where necessary to explain complex logic.

## Additional Requirements (Implement at least two of these)

1. Additional Features:
o Include a filter or search functionality to help users find specific appointments or
providers.
o Allow users to cancel or reschedule existing appointments. Include confirmation
prompts to avoid accidental cancellations.
o Any other features that you believe would provide value to users.
2. Testing:
o Write unit tests for critical components using Jest and React Testing Library.
o Implement end-to-end tests with Cypress or a similar tool to verify the booking flow.
3. State Management:
o Use a state management library like Redux or Context API for handling global state,
especially if your implementation becomes complex.

4. Front-End Tooling:
o Add Storybook.js to demonstrate edge cases of your component structure.
5. Demo:
o Deploy your application using a service like Vercel, Netlify, or Heroku and provide the
link in the README.

## Assumptions
- Data does not need to persist through page reloads.
- Because this is a front-end evaluation, a backend implementation is out of scope.
- Authentication is also out of scope.
- User profile is out of scope.
- To be completed within a 3-4 hour timeframe.
- Functionality bears more weight for this demo than pixel-perfect design implementation.
- Trainer and schedule data can be configured in a project JSON file for this demo.
- Real-time availability would be determined by the backend and is out of scope.