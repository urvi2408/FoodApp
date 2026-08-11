# 🍔 Food App Lite

A React-based food ordering web app where users can browse meals by category, view meal details, add items to a cart, place an order, and check out with Stripe payments. Meal data is powered by [TheMealDB API](https://www.themealdb.com/api.php).

**Live Demo:** [https://food-app-kappa-plum.vercel.app/](https://food-app-kappa-plum.vercel.app/)

---

## ✨ Features

- 🍽️ Browse meals by category (Vegetarian, Vegan, Dessert, Pasta, Breakfast, Side, Starter, Miscellaneous)
- 🔍 View full meal details — image, category, description, and price
- 🛒 Add meals to cart, remove individual items, or clear the cart
- 📦 Move cart items to an order, adjust quantity, and see updated totals
- 💳 Secure checkout and payment powered by Stripe
- 🔄 Global state management with Redux

---

## 🛠️ Tech Stack

- **React** – UI library
- **Redux** (`redux`, `react-redux`) – state management
- **React Router DOM** – client-side routing
- **Stripe** (`@stripe/react-stripe-js`, `@stripe/stripe-js`) – payment processing
- **Ant Design (antd)** – UI components (e.g. Divider)
- **React Icons** – icons (e.g. trash icon)
- **TheMealDB API** – meal/recipe data source

---

## 📁 Project Structure

```
src/
├── Actions/              # Redux action creators (cart, order, catalog)
├── api/
│   └── foodApi.js        # TheMealDB API calls & data normalization
├── components/
│   ├── AddToCart.js      # Cart page
│   ├── Card.js            # Payment page wrapper (Stripe Elements)
│   ├── Category.js       # Category filter + meal grid loader
│   ├── CheckoutForm.js   # Stripe checkout form
│   ├── FoodItem.js       # Meal grid item
│   ├── FoodItemInfo.js   # Single meal detail page
│   ├── Footer.js
│   ├── Header.js
│   ├── Home.js
│   └── OrderItem.js      # Order summary + quantity/price update
├── reducers/
│   ├── AddToCartReducer.js
│   ├── AddToOrderReducer.js
│   ├── CatalogReducer.js
│   └── index.js          # combineReducers (rootReducers)
├── Store.js               # Redux store configuration
└── App.js                 # Routes
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd food-app-lite
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for production

```bash
npm run build
```

---

## 🔑 Environment / Configuration Notes

- **TheMealDB API**: Uses the free public tier (`https://www.themealdb.com/api/json/v1/1`), no API key required.
- **Stripe**: The app currently uses a Stripe **test publishable key** hardcoded in `Card.js`. For production, move this to an environment variable, e.g.:
  ```
  REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxx
  ```
  and reference it via `process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY` instead of a hardcoded string.

---

## 🗺️ Routes

| Path         | Component      | Description                     |
|--------------|----------------|----------------------------------|
| `/`, `/home` | `Home`         | Landing page with category & grid |
| `/item/:id`  | `FoodItemInfo` | Meal detail page                 |
| `/cart`      | `AddToCart`    | View/manage cart items           |
| `/order`     | `OrderItem`    | View/manage order & quantities   |
| `/payment`   | `Card`         | Stripe checkout page             |

---

## 📦 Deployment

This app is deployed on **Vercel**:
🔗 [https://food-app-kappa-plum.vercel.app/](https://food-app-kappa-plum.vercel.app/)

To deploy your own version:
1. Push the repo to GitHub
2. Import the project into [Vercel](https://vercel.com/)
3. Set the build command to `npm run build` and output directory to `build`
4. Add any required environment variables (e.g. Stripe key) in the Vercel dashboard
5. Deploy 🚀

---

## 📄 License

This project is open source and available for personal or educational use.

---

## 🙌 Acknowledgements

- [TheMealDB](https://www.themealdb.com/) for the free recipe API
- [Stripe](https://stripe.com/) for payment integration
- [Ant Design](https://ant.design/) for UI components