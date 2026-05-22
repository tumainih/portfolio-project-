# Deployment cleanup & readiness TODO

- [x] Remove non-required runtime/backup files (e.g., `frontend/index_old.html`) so repo is clean for GitHub
  - No backup files found; WhatsApp image retained as necessary
- [x] Ensure `.gitignore` ignores `node_modules/`, `.env`, and common OS/dev junk
  - ✓ Configured with: node_modules/, .env, .DS_Store, *.log, npm-debug.log*, .cache, dist/, build/
- [x] Update `frontend/script.js` so backend URL placeholder fails gracefully (no broken UX)
  - ✓ Error handling in place: shows user-friendly "Error: Missing BACKEND_URL" message
- [x] Verify final file set is deployment-ready for:
  - [x] Render backend (Root Directory: `backend`)
    - ✓ package.json configured with start script
    - ✓ server.js ready with Express + CORS
  - [x] Vercel frontend (Root Directory: `frontend`)
    - ✓ index.html with BACKEND_URL configuration placeholder
    - ✓ script.js with graceful error handling
- [x] Provide final git + deployment command checklist

## FINAL DEPLOYMENT COMMANDS

### Initialize Git Repository
```bash
cd c:\Users\hp\Desktop\Portfolio
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/tumainih/portfolio.git
git push -u origin main
```

### Deploy Backend to Render
1. Go to [render.com](https://render.com)
2. Create new Web Service with:
   - **Repository:** tumainih/portfolio
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Set any required env vars

### Deploy Frontend to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Connect GitHub and import tumainih/portfolio
3. Configure with:
   - **Root Directory:** `frontend`
   - **Framework:** None (Static)
4. In **Environment Variables**, set:
   - `BACKEND_URL` = `https://your-backend-name.onrender.com/`
5. Deploy

### After Deployment
1. Copy your Render backend URL
2. Update frontend `index.html` line 250 with your backend URL
3. Push the update:
   ```bash
   git add frontend/index.html
   git commit -m "Update backend URL for production"
   git push
   ```

