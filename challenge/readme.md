🛒 Angular Challenge: Build a Shopping Cart Application
=======================================================

🎯 Objective
------------

Build a **Shopping Cart Application** using Angular. This challenge will test your knowledge of **Directives**, **Custom Pipes**, and **Services with Dependency Injection**.

📦 Features to Implement
------------------------

### 1\. Cart Component Setup

* Create a `CartComponent` to list products.
* Each product should include: name, price, quantity input, and a remove button.

### 2\. Dynamic Styling with Directives

* Build a **custom directive** to highlight discounted products.
* Use it conditionally based on a `discounted` property.

### 3\. Custom Discount Pipe

* Create a **custom pipe** to apply discounts to product prices.
* Use the pipe in the cart summary to show discounted totals.

### 4\. Shared Service for Cart Data

* Implement a `CartService` to manage state (add/remove items, get cart data).
* Inject it into your component using Angular’s DI system.

### 5\. Checkout Summary

* Display total quantity, original price, and discounted price in a summary section.

🧪 Testing the Features
-----------------------

* Inspect DOM updates from directives and pipes using Angular DevTools.
* Ensure real-time data changes reflect across the app via the shared service.

✅ Success Criteria
------------------

* Cart shows products with editable quantity and remove functionality.
* Discounted products are visually highlighted.
* Discount pipe correctly calculates the discounted total.
* Service properly manages cart state.
* UI updates on user interactions without issues.

💡 What You’ll Learn
--------------------

* How to build **custom directives** and apply them dynamically.
* How to build **custom pipes** for data transformation.
* How to structure and inject **reusable services** with Angular DI.
* Best practices for UI updates, shared state, and modular code.

🧰 Tools You Can Use
--------------------

* Angular CLI
* Angular Forms (Template-driven or Reactive)
* Angular DevTools or Chrome DevTools

🔗 Resources
------------

* [Directives in Angular](https://angular.io/guide/attribute-directives)
* [Angular Pipes](https://angular.io/guide/pipes)
* [Dependency Injection](https://angular.io/guide/dependency-injection)
* [Angular Services](https://angular.io/guide/architecture-services)