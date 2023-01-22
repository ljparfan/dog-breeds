My App
Welcome to My App! This is a simple application that demonstrates the use of React, Formik, Zod, and other libraries to create a seamless user experience.

Features
Homepage: This is a protected route that can only be accessed after the user submits his name and email in the Auth Page. In the homepage, based on the user's name, an image of a breed of dog is selected and displayed.

Auth Page: This is where the user enters their name and email. Name and email both have client side validations using Zod. The email is also validated using abstract API, and if it is valid the user is redirected to the Homepage. If the email is invalid, an error message is displayed, and the button is disabled.

Unexpected Error Page: In case of any unexpected error, the user is redirected to this page.
