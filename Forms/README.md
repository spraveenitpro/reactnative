# Forms

A React Native mobile application built with Expo Router that implements a multi-step checkout form flow with advanced form handling using React Hook Form and Zod validation.

## Description

This is a React Native project that demonstrates a complete checkout form workflow with modern form handling practices. The app features:

-   **Advanced Form Management** with React Hook Form
-   **Schema Validation** using Zod
-   **Multi-step form navigation** using Expo Router
-   **Custom form components** (CustomTextInput, CustomButton, KeyboardAwareScrollView)
-   **Checkout flow**: Personal Details → Payment → Confirmation
-   **TypeScript** for complete type safety
-   **Modern React Native** with Expo SDK 53
-   **Form State Management** with automatic validation and error handling

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

## Development

### Prerequisites
- Node.js (LTS version)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Development Workflow
1. Make changes to the code
2. Test on multiple platforms (iOS, Android, Web)
3. Ensure type checking passes (`tsc --noEmit`)
4. Test form validation scenarios
5. Verify keyboard handling on mobile devices

### Best Practices
- Follow TypeScript best practices
- Maintain proper component structure
- Use Zod schemas for validation
- Implement proper error handling
- Keep components reusable and modular

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Form Features

### React Hook Form Integration
- **Efficient Form State Management**: Minimizes re-renders and optimizes performance
- **Uncontrolled Components**: Better performance with React Native
- **Form Validation**: Real-time validation with custom error messages
- **TypeScript Integration**: Full type safety for form data

### Zod Schema Validation
- **Type-safe Schemas**: Runtime validation with static type inference
- **Custom Error Messages**: Friendly error messages for users
- **Complex Validations**: Support for nested objects and arrays
- **Form Data Types**: Automatic TypeScript type generation from schemas

### Custom Components
- **CustomTextInput**: Reusable form input with error handling
- **CustomButton**: Styled button component with loading states
- **KeyboardAwareScrollView**: Smooth keyboard handling for forms

### Navigation Features
- **Type-safe Routing**: Using Expo Router
- **Nested Navigation**: Organized checkout flow
- **Form State Persistence**: Maintain form data between steps
- **Back Navigation**: Preserve form data when going back

## Technologies Used

-   React Native 0.79.5
-   Expo SDK 53
-   Expo Router 5.1.3
-   TypeScript 5.8.3
-   React 19.0.0
-   React Hook Form 7.60.0
-   Zod 4.0.5
-   @hookform/resolvers 5.1.1
