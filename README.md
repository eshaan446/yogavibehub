**Frontend- React.js, Vite.js** <br>
**Backend- Node.js, Express.js, MongoDB, Prisma.**

# API Documentation for Backend:-

**BASE_URL**- https://yogavibehub-server.vercel.app
## 1. Add a Booking API
- **Request Type:** POST
- **Description:** Adds the booking for the user in-sync with the database.
- **Endpoint:** `${BASE_URL}/api/addBooking`
- **Query Parameters:** None
- **Body:[Test sample]**
  ```json
        {
  
        "data":{
        "name":"Kingtest2",
        "age":"18",
        "batch":"5-7PM"
        }
    
        }
  ```
- **Additional Notes:**- This is POST request which the client will make when the user will click the Pay button. This request will add the user to the booking list in-sync with our database. There is also a TTL index applied on the createdAt property, this makes sure that this document/entry will be **deleted after exactly 30 days**.

## 2. Get All users API
- **Request Type:** GET
- **Description:** Adds a new user to the platform.
- **Endpoint:** `${BASE_URL}/api/bookings`
- **Additional Notes:**
  - This is a GET request which the is made on the homepage to fetch all the bookings in our database and display it on the homepage.     
  - This can also be used as the testing url to check if the server is up and running.

## 3. Get a specific user API
- **Request Type:** GET
- **Description:** Fetches a specific user by ID.
- **Endpoint:** `${BASE_URL}/api/{user_id}`
- **Additional Notes:**
  - This request will fetch a specific user if the unique id of that user is provided to it.
  - This request can also be used to update the bookings of this user by fetching the data and repopulating the input fields.

## 4. Delete a specific user API
- **Request Type:** POST
- **Description:** Deletes a user permanently from the database.
- **Endpoint:** `${BASE_URL}/delete/{user_id}`
- **Additional Notes:**
  - Requires the ID of the user to be deleted.
  - Response confirms successful deletion.
 
## Schema Design for MongoDB database:-
**Database Name:** Cluster0
**Collection Name:** User
![mongodbschema](https://github.com/eshaan446/yogavibehub/assets/84571751/cbea2ffd-c339-496e-b3b7-8c8509da5554)
## Schema Design with seed data:-
![mongomd](https://github.com/eshaan446/yogavibehub/assets/84571751/d267ef1b-a0f0-4b7e-aa19-9efe791c5f4a)


## Assumptions/Approach:-
- I designed it such that whenever the customer visits the site, he would see all the reasons/testimonials to get started and register himself. So there are two buttons that lead to the form for the booking 1- 'Add Booking' on the navbar and 2-'Get Started' just below the Hero section. I have added basic validations like all input fields are required and the age shall be greater than equal to 18 and less than equal to 65. So when the user submits the form i.e he makes the payment, he will be routed to homepage and would see his participation live. The entry of the users will automatically be deleted after 30 days. I have added a TTL (Time-To-Live) index on my schema. This approach also makes it scalable as we dont have to manually delete users after 30 days and our database also has less laod to handle. Also the description for each user is auto generated , it depends upon his first character of his name. I have created a simple mapping of each character with a unique description in my codebase. There can always be improvements in this approach like showing all the users in a admin panel for the business owner/client. But I thought it would be better if we could motivate a new customer for clicking that 'Add Booking'. This would helps us to decrease the CAC for our business. One more approach that I used that could be useful for the business is that showing the greater age customers first in the list. So this would be a motivating factor for young individuals as well as senior citizens. The 'Joined Xd ago' label gets updated daily. The approach that I have used for this is creating a function that gives us the difference of days between any two dates. the current date is available to us using Date.now() in JS and date of booking is available to us from the database.

For any queries or issues, contact: eshaanpandeyk540@gmail.com
