# 📧 Spam Tester

A simple and interactive **Email Subject Line Spam Tester** built with **React + Vite**.  
It helps marketers and developers quickly test subject lines for **spam keywords**, **length quality**, and **inbox preview look**, while also integrating with the **Postmark SpamCheck API** for an additional spam score. Currently running Fallback analysis as Postmark Spamcheck API requires a backend setup. Using the API in frontend results in a CORS error as Postmark block direct requests from browsers.

---

## 🚀 Features

- ✍️ **Subject Line Input** – Enter an email subject line and analyze instantly.  
- 📨 **Inbox Preview** – See how your subject line would appear in a subscriber’s inbox.  
- 📏 **Length Analysis** – Detects whether your subject line is **too short**, **optimal**, or **too long** (20–60 characters is ideal).  
- 🚫 **Spam Keyword Detection** – Flags common spammy terms like *FREE, WIN, OFFER, CASH, PRIZE, CLICK*.  
- 🧮 **Spam Score** – Calculates a score (`0–10`) using keyword matches + optional integration with **Postmark SpamCheck API**.  
- ⚡ **Fast & Modern Stack** – Built with **React, Vite, TailwindCSS**, and **Lucide Icons**.

---

## 📂 Project Structure

```
├── index.html
├── package.json
├── vite.config.js
├── src
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── InboxPreview.jsx
│   │   ├── InputForm.jsx
│   │   ├── LengthAnalysis.jsx
│   │   └── SpamScore.jsx
│   ├── pages/
│   │   └── Home.jsx
│   └── utils/
│       ├── api.js         # SpamCheck API integration
│       └── spamHelper.js  # Local spam keyword checker
└── public/
    └── vite.svg
```

---

## 🛠️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/Nayan1509/Spam-Tester.git
   cd Spam-Tester
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser 🎉

---

## 📖 Usage

1. Enter a subject line in the **input box**.  
2. Click **“Test Subject Line”**.  
3. Instantly see:
   - Inbox preview
   - Subject line length analysis
   - Spam score (with spammy word highlights)  
4. Optionally, configure **Postmark SpamCheck API** in `utils/api.js` for external scoring.

---

## 🧩 Technologies Used

- **React + Vite** → Frontend framework & build tool  
- **TailwindCSS** → Modern utility-first styling  
- **Lucide React** → Beautiful icons  
- **Axios** → API requests (Postmark SpamCheck)  

---

## 📌 Example Spam Keywords Checked

- FREE  
- WIN  
- OFFER  
- MONEY  
- CASH  
- PRIZE  
- CLICK  


