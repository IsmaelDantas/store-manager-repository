# Store-Manager (Node.js)

## Description
With the **Store Manager** project, we developed a **CRUD** (Create, Read, Update, Delete) API to manage a store's with products and its sales. With that, we structured a **RESTful API** according to the **MSC** (Model, Service and Controller) architecture, and linked with the store's database with security and stability.

The project has management routes made with **Node.JS** and **Express.js** to handle **MySQL** tables at the same time. The project have high coverage of tests done with **Mocha**, **Chai** and **Sinon** to ensure the code quality and its functionality.

## Main used technologies:
>Node.js
>
>Express.js
>
>MySQL
>
>Mocha, Chai and Sinon
## Instructions to utilize the application
Clone the repository and install the necessary dependencies with `npm install` and start the project wirh `node index.js`. After that, you are free to make requests using any **HTTP Client** that you prefer (Insomnia, Postman, HTTPIE and others).

<details>
  <summary>Endpoints for <i>Products</i></summary>
  <br>
  <ul>
  <li>get('/');</li>
  <li>get('/search');</li>
  <li>get('/:id');</li>
  <li>post('/');</li>
  <li>put('/:id');</li>
  <li>delete('/:id');</li>
  </ul>
</details>

<details>
  <summary>Endpoints for <i>Sales</i></summary>
  <br>
  <ul>
  <li>get('/');</li>
  <li>get('/:id');</li>
  <li>post('/');</li>
  <li>put('/:id');</li>
  <li>delete('/:id');</li>
  </ul>
</details>

(You should use the `npm run test:mocha` command to test the application)

## Contact
You can contact me at my email: ismcondan2019@gmail.com or by my <a href="https://www.linkedin.com/in/ismaeldantas/">Linkedin</a>.
