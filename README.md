# Nur Bier - Only Beer - Fullstack Ecommerce WebApp
This is an online shop of a German brewery startup in Berlin. This store allows its customers to learn about brewing and purchase its newest beer in the market.

**Link to the online shop:** https://nurbier.vercel.app/

![alt tag](https://github.com/hiluan/hiluan/raw/main/images/hiluan-nurbier-art-fullstack-ecommerce-web-app-800.gif)

**Link to the frontend's repo:** https://github.com/hiluan/ecommerce-fullstack-NUR-BIER-frontend

**Link to the backend's repo:** https://github.com/hiluan/ecommerce-fullstack-NUR-BIER-backend

## How It's Made:

**Tech used:** Next.JS React.JS, Strapi, GraphQL, Cloudinary, Auth0, Redux, HTML, CSS, JavaScript, Styled Component, Framer Motion, Heroku, Vercel, Stripe, Paypal

1. Frontend with Next.Js, Styled Components, Framer Motion, Toast:
- Next.Js: Javascript framework. 
- Styled Components: manages all CSS stylesheets.
- Framer Motion: helps create animated effects. 

2. Backend with Strapi (Node.Js), Cloudinary, Auth0, Stripe and Paypal APIs:
- Strapi: Clients can create/edit/delete their products on Strapi with its friendly UI for their convenience. Strapi then gives out an API to sync all products on the Web App.
- Cloudinary: every time a new product is created on Strapi, all of its photos will be automatically uploaded to Cloudinary. These photos will be optimized to different sizes: thumbnail, small, medium, large, etc. for our convenience. 
- GraphQl: uses query to pull out specific data from Strapi. 
- Auth0: works together with Strapi on the Backend to authenticate users' logins. Auth0 offers login for email, Google, Facebook, Twitter, etc.  
- Stripe and Paypal APIs are for payments with Cards and Apple Pay, Google Pay integrated.

## Navigation and Pages:
1. Navigation Bar: 


Other than navigating from/to different pages on the site, there are 2 special buttons:
- Login / Sign Up: When clicking on it, the login page (from Auth0) will show up. After signing up and/or logging in, users can view their order histories by clicking on the same button which is now ‘My Account.’
- Cart: Clicking on it will open the cart for customers to check the current state of their shopping bag. 

![alt tag](https://i.ibb.co/vZ1gMYy/Nur-Bier-Nav-Cart-1.jpg)

2. Home Page:

![alt tag](https://i.ibb.co/TLZzy7N/Nur-Bier-Page-Home.jpg)

- Products can be added to the cart directly from the Home Page. The product detail page can be accessed by clicking on any of the items.
- News and new products are introduced here.

- Chosen reviews of customers will be displayed here.

3. Product Page:

![alt tag](https://i.ibb.co/dGcZJMx/Nur-Bier-Page-Product-Detail.jpg)

- Display product detail in a simple but elegant way.
- Quantity is edited before adding to cart.

4. Checkout Page:
- Check out with Stripe: Payment methods can be varied from Credit/Debit Card to Apple/Google Pay. 
- Check out with Paypal: still under construction.

5. Login Page:
- Auth0 handles this page. It lets customers choose either to use their email or other services like Google, Facebook, Twitter, etc.

![alt tag](https://i.ibb.co/GMYTkhh/Nur-Bier-Page-Login.jpg)

6. Other Pages: 
- Contact Page: Lets customers keep in touch with customer service.
- About Page: Lets customer learn about Nur Bier.


## Optimizations
- Works well as a Mobile first / Responsive Website.
- Responsive CSS on iOS devices has problems with Parallax.
- Still in the testing phase. This section will be updated soon.

## Lessons Learned:
- Next.Js handles router-dom well.
- Payment with Stripe is colorful and there are many options to choose to put on customers' order histories or receipts. 
- Framer Motion is hard but pretty fun and it helps create beautiful effects on the website. 
- Working directly with clients is not easy. More communication should be made for both sides to understand each other.  
- Still in the testing phase. This section will be updated soon.

## Other Examples:

Take a look at these couple of examples that I have in my own portfolio:

**hiluan.dev - Portfolio Page** https://github.com/hiluan/hiluan-frontend

**starlite.netlify.app - Online Trading Platform** https://github.com/hiluan/starlite-frontend




# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
