
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
     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
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
