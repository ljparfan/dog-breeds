# Dog Breeds App

### Features

- **Home Page** - This is a protected route that can only be accessed after the user submits his name and email in the Auth Page. In the homepage, based on the user's name, an image of a breed of dog is selected and displayed.

- **Auth Page** - This is where the user enters their name and email. Name and email both have client side validations using Zod. The email is also validated using abstract API, and if it is valid the user is redirected to the Homepage. If the email is invalid, an error message is displayed, and the button is disabled.

- **Unexpected Error Page** - In case of any unexpected error, the user is redirected to this page.

### Technologies used:

- Vite
- React
- TypeScript
- Formik
- Zod
- Emotion
- React Router
- React Query
- Axios
- Context API
