# Portfolio Project - Deployment Guide

## ✅ Completed: Project Structure & Files

Your portfolio project has been successfully set up with the following structure:

```
Portfolio/
├── index.html          (✓ Updated)
├── style.css           (✓ Updated)
├── script.js           (✓ Updated)
├── .gitignore          (✓ Created)
├── DEPLOYMENT_GUIDE.md (This file)
└── backend/
    ├── server.js       (✓ Created)
    ├── package.json    (✓ Created)
    └── .gitignore      (✓ Created)
```

---

## 📋 Next Steps

### STEP 1: Test Backend Locally

1. **Install Node.js** (if not already installed): [Download Node.js](https://nodejs.org)

2. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Start the backend server:**
   ```bash
   npm start
   ```
   
   You should see: `Server running on port 3000`

4. **Test in browser:**
   - Open: `http://localhost:3000`
   - You should see: `{"message":"Hello from backend API"}`

---

### STEP 2: Upload to GitHub

1. **Install Git** (if not already installed): [Download Git](https://git-scm.com)

2. **Configure Git** (first time only):
   ```bash
   git config --global user.email "your-email@example.com"
   git config --global user.name "Your Name"
   ```

3. **Create GitHub repository:**
   - Go to [GitHub](https://github.com)
   - Click "New Repository"
   - Name it: `portfolio-project`
   - Click "Create Repository"

4. **Push code to GitHub:**
   ```bash
   cd c:\Users\hp\Desktop\Portfolio
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-project.git
   git push -u origin main
   ```

---

### STEP 3: Deploy Backend on Render

1. **Go to [Render.com](https://render.com)**
2. **Login with GitHub**
3. **Click "New Web Service"**
4. **Select your `portfolio-project` repository**
5. **Configure:**
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Keep default settings
6. **Click "Create Web Service"**
7. **Wait for deployment** (2-3 minutes)
8. **Copy the URL** - It will look like: `https://portfolio-backend.onrender.com`

---

### STEP 4: Connect Frontend to Backend

1. **Edit `script.js`:**
   ```javascript
   async function getMessage() {
       const response = await fetch("https://portfolio-backend.onrender.com");
       const data = await response.json();
       document.getElementById("message").innerText = data.message;
   }
   ```

2. **Replace `YOUR_RENDER_URL` with your actual Render URL**

3. **Test the button:**
   - Open your portfolio locally
   - Click "Get Backend Message"
   - You should see: "Hello from backend API"

4. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Connect frontend to backend"
   git push
   ```

---

### STEP 5: Deploy Frontend on Vercel

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login with GitHub**
3. **Click "Import Project"**
4. **Select your `portfolio-project` repository**
5. **Configure:**
   - **Framework Preset:** Select "Other"
   - **Root Directory:** `./` (or leave empty for root)
   - Click "Deploy"
6. **Wait for deployment** (1-2 minutes)
7. **Your deployed portfolio URL** will be displayed
   - Example: `https://portfolio-project.vercel.app`

---

## 🎉 Submission Links

Once deployed, collect these three links for submission:

1. **Frontend (Vercel):** `https://portfolio-project.vercel.app`
2. **Backend (Render):** `https://portfolio-backend.onrender.com`
3. **GitHub Repository:** `https://github.com/YOUR_USERNAME/portfolio-project`

---

## ✨ Extra Improvements to Consider

To earn extra marks, add any of these features:

- 🌙 Dark mode toggle
- ✨ Animations on scroll
- 📱 Responsive design (mobile/tablet)
- 🖼️ Project images and thumbnails
- 📥 Download CV button
- 📧 Contact form with email functionality
- 🔗 Social media links
- 👤 Profile photo

---

## 🐛 Troubleshooting

### Backend not connecting?
- Verify Render URL is correct in `script.js`
- Check Render deployment status on dashboard
- Ensure CORS is enabled (it already is in `server.js`)

### Page not loading on Vercel?
- Check Vercel build logs
- Ensure `Root Directory` is set correctly
- Verify all file paths are correct

### Git/GitHub issues?
- Make sure Git is installed: `git --version`
- Check GitHub authentication with SSH or Personal Access Token
- Verify repository URL is correct

---

**Good luck with your portfolio! 🚀**
