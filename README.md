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
 
## Schema Design for MongoDB database
![mongodbschema](https://github.com/eshaan446/yogavibehub/assets/84571751/cbea2ffd-c339-496e-b3b7-8c8509da5554)


For any queries or issues, contact: eshaanpandeyk540@gmail.com
