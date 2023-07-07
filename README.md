# Strength Shop

This E-Commerce website was initially developed using React, Typescript, and Strapi as the headless CMS. The original version of the project showcased features such as error handling, loading states, and efficient data fetching through the integration with Strapi.

However, during the deployment phase, I encountered difficulties with the Strapi setup, which led to challenges in deploying the application successfully. To streamline the deployment process and remove unnecessary complexities, I made the decision to switch to a simpler data source.

In the current version of the project, I have made changes to simplify the architecture and optimize the deployment process. As part of these changes, a JSON file is now used as the data source. With this update, the website's core functionality remains unaffected, while certain features like error handling and data fetching are no longer required and have been removed. By making this change, I was able to simplify the deployment process and ensure a smoother user experience.

Please note that the original project using Strapi is still available [here](https://github.com/LucasCoppola/strength-shop-strapi), showcasing the features mentioned above. However, it is no longer actively maintained or updated.


## Features
- Browse a catalog of products
- View detailed information about individual products
- Add products to the shopping cart
- Adjust the quantity of products in the cart
- Remove products from the cart
- Persist the cart state using local storage
- Proceed to the checkout page for order processing
- Responsive design for optimal viewing on various devices
