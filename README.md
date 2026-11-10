# Delivery App Boilerplate

This is a React Native template application built with Expo and TypeScript. It serves as a fully functional delivery app boilerplate, featuring address search layouts, structured product categorization, and a comprehensive cart management flow. **The repository operates entirely offline on a local mock data architecture**, making it an ideal plug-and-play foundation for frontend developers.

## Table of Contents
- [About the app](#about-the-app)
- [Architecture Highlights](#architecture-highlights)
- [How to run the app](#how-to-run-the-app)
- [📱 App Screenshots](#-app-screenshots)

## About the app

The application consists of four primary boilerplate screens designed to handle standard delivery app logic:

- **SearchLocationPage:** Provides an address lookup interface. It uses a bulletproof, localized state provider to supply instant autocomplete recommendations without relying on external network geocoding requests or external API tokens.
- **ProductsPage:** Displays catalog products grouped cleanly by category. Layout rows are fed instantly by a built-in static local dataset.
- **CategoryPage:** Automatically filters and isolates products belonging exclusively to a selected category grid item, featuring quick cart additions.
- **CartPage:** Handles the checkout step. Displays all products currently in the user's basket with full product details, editable quantities, dynamic order recalculations, and total price tallies.

### Architecture Highlights
* **Navigation:** Built entirely using file-based routing and seamless screen transitions powered by `expo-router`.
* **State Management:** Uses React's Core Context API (`AddressContextProvider`, `ProductsContextProvider`) to distribute global state across cart items, simulated physical addresses, and distributors.
* **Template Focus:** The original GraphQL client infrastructure and live network fetching code have been completely phased out of the active runtime. The focus of this template remains strictly on layout consistency, local reliability, UI/UX interaction, and zero-configuration setups.

## How to run the app

Ensure you have Node.js, Git, and either an Android/iOS physical device (with Expo Go) or a localized emulator ecosystem configured on your computer.

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```
2. **Navigate to the project folder:**
   ```bash
   cd delivery-app
   ```
3. **Install required packages:**
   *(No environment variables or external API tokens are required to run this template)*
   ```bash
   npm install
   ```
4. **Start the local bundler:**
   ```bash
   npx expo start
   ```

## 📱 App Screenshots

|                                                                                        |                                                                                        |                                                                                        |                                                                                        |                                                                                        |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| <img src="./AppScreenshots/AppScreenshot (0).jpeg" width="160" title="Screenshot 0" /> | <img src="./AppScreenshots/AppScreenshot (1).jpeg" width="160" title="Screenshot 1" /> | <img src="./AppScreenshots/AppScreenshot (2).jpeg" width="160" title="Screenshot 2" /> | <img src="./AppScreenshots/AppScreenshot (3).jpeg" width="160" title="Screenshot 3" /> | <img src="./AppScreenshots/AppScreenshot (4).jpeg" width="160" title="Screenshot 4" /> |
|                                    **Screenshot 0**                                    |                                    **Screenshot 1**                                    |                                    **Screenshot 2**                                    |                                    **Screenshot 3**                                    |                                    **Screenshot 4**                                    |
