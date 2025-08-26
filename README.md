# ✍️ Scribly

Scribly is a modern blogging app built with **Next.js** that provides a clean, distraction-free writing experience powered by the **TipTap editor**.  
It started as a personal learning project to explore different aspects of web development, but it’s also a fully functional app where users can create, format, and publish blog posts.

![Scribly cover](/public/cover.png)

---

## 🚀 Features

- 📝 **Rich Text Editor** (powered by TipTap) for a smooth writing experience  
- 🔐 **Authentication & Authorization** with Better Auth  
- 📂 **Database Management** with Xata + Drizzle ORM  
- ⚡ **Fast & Scalable Frontend** using Next.js  
- 📱 **Responsive Design** for desktop and mobile  
- 🌱 Built with scalability and clean code in mind  

---

## 🛠️ Tech Stack

- **Frontend & Backend**: [Next.js](https://nextjs.org/)  
- **Database Hosting**: [Xata](https://xata.io/)  
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)  
- **Authentication**: [Better Auth](https://better-auth.vercel.app/)  
- **Text Editor**: [TipTap](https://tiptap.dev/)  

---

## ⚙️ Installation

Follow these steps to run Scribly locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/scribly.git

# 2. Go into the project folder
cd scribly

# 3. Install dependencies
npm install
# or
yarn install

# 4. Set up environment variables
cp .env.example .env.local
# (Fill in your Xata DB URL, Better Auth keys, etc.)

# 5. Run the development server
npm run dev
# or
yarn dev
```

Then open http://localhost:3000 in your browser 🚀
