
# Next Firebase Image Upload

This is a Next.js project for uploading images to Firebase. It demonstrates setting up Firebase storage and integrating it with a Next.js application.

## Getting Started

### Prerequisites

- Node.js installed
- Firebase account with a project created

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jerga99/next-firebase-image-upload.git
   cd next-firebase-image-upload
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Go to your Firebase project settings.
   - Generate a new Web API key and Firebase configuration.
   - go to src/app/firebaseConfig.js and add your Firebase config:
     ```js
     const firebaseConfig = {
        apiKey: "your_api_key",
        authDomain: "your_auth_domain",
        projectId: "your_project_id",
        storageBucket: "your_storage_bucket",
        messagingSenderId: "your_messaging_sender_id",
        appId: "your_app_id"
     };
     ```

### Running the Application

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open the application:**
   - Open http://localhost:3000 in your browser to see the app.

## Usage

- Upload images: Use the provided form to upload images.
- Storage: Images are stored in Firebase Storage.

## Learn More

To learn more about Next.js and Firebase, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
