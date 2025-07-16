# Forms

A React Native mobile application built with Expo Router that implements a multi-step checkout form flow with personal details, payment, and confirmation screens.

## Description

This is a React Native project that demonstrates a complete checkout form workflow. The app features:

-   **Multi-step form navigation** using Expo Router
-   **Custom form components** (CustomTextInput, CustomButton)
-   **Checkout flow**: Personal Details → Payment → Confirmation
-   **TypeScript** for type safety
-   **Modern React Native** with Expo SDK 53

## Project Structure

```
src/
├── app/                    # Expo Router pages
│   ├── index.tsx          # Home screen
│   └── checkout/          # Checkout flow
│       ├── personal.tsx   # Personal details form
│       ├── payment.tsx    # Payment form
│       └── confirm.tsx    # Confirmation screen
└── components/            # Reusable components
    ├── CustomButton.tsx
    └── CustomTextInput.tsx
```

## Getting Started

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npm start
    ```

3. Run on your preferred platform:
    ```bash
    npm run ios     # iOS
    npm run android # Android
    npm run web     # Web
    ```

## Technologies Used

-   React Native 0.79.5
-   Expo SDK 53
-   Expo Router 5.1.3
-   TypeScript 5.8.3
-   React 19.0.0
