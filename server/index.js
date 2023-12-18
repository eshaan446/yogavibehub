import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use('/api',userRoute)



//default get request
app.get('/', (req, res) => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Your Web Page Title</title>
        <!-- Add your CSS files, meta tags, or other headers here -->
        <style>
          /* Add your CSS styles here */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
          }
  
          /* Additional styles can be added as needed */
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
  
          h1 {
            text-align: center;
          }
  
          p {
            line-height: 1.6;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>This a plain HTML page served by Express.</h1>
          <h1>Visit the frontend of the website <a href="https://yogavibehub.vercel.app/">YogaVibeHub</a></h1>
          <!-- Add your content here -->
        </div>
        <!-- Add your scripts or other footer content here -->
      </body>
      </html>
    `;
    
    res.send(htmlContent); // Send the HTML content as the response
  });