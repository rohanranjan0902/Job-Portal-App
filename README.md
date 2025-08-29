# JobPortal - Full Stack MERN Application

A complete job portal application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, job posting, application management, and file uploads with Cloudinary integration.

## 🚀 Features

- **User Authentication**: Login/Register for job seekers and recruiters
- **Role-based Access Control**: Different dashboards for students and recruiters  
- **Job Management**: Post, edit, and delete job listings
- **Application Management**: Apply for jobs and track applications
- **File Upload**: Resume upload with Cloudinary integration
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Real-time Notifications**: Toast notifications for user actions

## 🛠️ Technology Stack

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary for file storage
- Multer for file handling
- bcryptjs for password hashing

### Frontend  
- React.js with Vite
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Radix UI components
- Axios for API calls

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- MongoDB Atlas account
- Cloudinary account for file storage
- Git

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd JobPortal
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=8000
SECRET_KEY=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
VITE_API_BASE_URL=http://localhost:8000
```

### 4. Running the Application

**Start Backend Server:**
```bash
cd backend
npm run dev
```
Backend will run on http://localhost:8000

**Start Frontend Development Server:**
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:5173

## 🚀 Deployment to Vercel

### Backend Deployment

1. **Prepare for deployment:**
   - Ensure all environment variables are set in `.env`
   - The `vercel.json` configuration is already included

2. **Deploy to Vercel:**
   ```bash
   cd backend
   vercel --prod
   ```

3. **Set Environment Variables in Vercel Dashboard:**
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add the following variables:
     - `MONGO_URI`
     - `SECRET_KEY`
     - `CLOUD_NAME`
     - `API_KEY`
     - `API_SECRET`
     - `NODE_ENV=production`

### Frontend Deployment

1. **Update API URL:**
   - Create `.env.production` file:
   ```env
   VITE_API_BASE_URL=https://your-backend-app.vercel.app
   ```

2. **Deploy to Vercel:**
   ```bash
   cd frontend
   vercel --prod
   ```

3. **Update CORS Configuration:**
   - After frontend deployment, update the backend's CORS configuration
   - Replace `your-frontend-app.vercel.app` with your actual frontend URL in `backend/index.js`

## 🔐 Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/jobportal
PORT=8000
SECRET_KEY=your_secure_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
NODE_ENV=production
```

### Frontend (.env)
```env
VITE_API_BASE_URL=https://your-backend-app.vercel.app
```

## 📁 Project Structure

```
JobPortal/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── index.js
│   ├── package.json
│   └── vercel.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── utils/
│   │   └── hooks/
│   ├── public/
│   ├── package.json
│   └── vercel.json
└── README.md
```

## 🐛 Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure frontend URL is added to CORS configuration in backend
2. **Environment Variables**: Make sure all required env vars are set in Vercel
3. **Build Errors**: Check that all dependencies are properly installed
4. **Authentication Issues**: Verify JWT secret is consistent across environments

### Development Tips:

- Use `npm run dev` for development with hot reload
- Check browser console for frontend errors
- Monitor Vercel function logs for backend issues
- Test API endpoints using tools like Postman

## 📝 API Endpoints

### Authentication
- `POST /api/v1/user/register` - User registration
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/logout` - User logout
- `POST /api/v1/user/profile/update` - Update user profile

### Jobs
- `GET /api/v1/job/get` - Get all jobs
- `POST /api/v1/job/post` - Post new job (recruiter only)
- `GET /api/v1/job/get/:id` - Get job by ID
- `GET /api/v1/job/getadminjobs` - Get recruiter's jobs

### Companies
- `POST /api/v1/company/register` - Register company
- `GET /api/v1/company/get` - Get user's companies
- `GET /api/v1/company/get/:id` - Get company by ID
- `PUT /api/v1/company/update/:id` - Update company

### Applications
- `POST /api/v1/application/apply/:id` - Apply for job
- `GET /api/v1/application/get` - Get user's applications
- `GET /api/v1/application/:id/applicants` - Get job applicants
- `POST /api/v1/application/status/:id/update` - Update application status

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please open an issue in the repository.
