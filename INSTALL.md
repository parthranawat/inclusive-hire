## Setting Up the App

To run this application, follow these steps:

1. **Prerequisites**

   - Make sure you have the following software installed on your system:
     - Node.js
     - React
     - Redis
     - Git

2. **Clone the Repository**

   - Clone the repository to your local machine using the following command:
     ```
     git clone https://github.com/parthranawat/inclusive-hire.git
     ```
   - Ensure you are on the main branch of the repository.

3. **Install Dependencies**

   - Navigate to the root directory of the project and run the following command to install server-side dependencies:
     ```
     npm install
     ```
   - Next, navigate to the client directory and install client-side dependencies with:
     ```
     cd client
     npm install
     ```

4. **Start the Redis Server**

   - Open a terminal and start the Redis server by running the following command:
     ```
     redis-server
     ```

5. **Start the Server**

   - In the root directory of the project, initiate the server by running:
     ```
     node server.js
     ```
   - The server should now be running on port 4000.

6. **Start the Client**
   - In the client directory, start the React application with the following command:
     ```
     npm start
     ```
   - The client should be accessible by default on port 3000.

You have now successfully set up and started the application. Enjoy using it!
