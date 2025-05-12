# Omada Custom Voucher Portal

This project is a custom Wi-Fi login portal for TP-Link Omada, using Node.js (API) and MySQL for logging voucher usage.

## 🛠 How it works

- User submits a voucher code via `index.html`
- Code is logged to a MySQL database via `api/login.js`
- User is redirected to Omada’s portal login endpoint

## 🌍 Deployment

Deploy this on Vercel:

1. Import this repo to Vercel
2. Set the following environment variables:
   - `DB_HOST`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
3. Set your Omada Controller's External Portal URL to:
   ```
   https://your-vercel-project.vercel.app
   ```

## 🛡 Environment

Do **not** store credentials in code. Use Vercel's Environment Variables settings.
