# 📰 **AST Consulting Assignment – Shreya Khanna**

## ✨ **Project Overview**
This is a **simplified clone of the LiveHindustan front page** built using:  
**Next.js + TailwindCSS + TypeScript**  

Instead of fetching data from a live API, it uses **local JSON data** to avoid rate-limit issues and ensure faster, predictable development.

---

## 🚀 **Features**
- 🏆 **Hero Section** – Highlights the top story  
- 🗂️ **Grid Layout** – Displays latest news articles  
- 📱 **Responsive Design**  
  - Desktop → 3 columns  
  - Tablet → 2 columns  
  - Mobile → 1 column  
- 🧩 **Reusable Components** – Navbar, Hero, NewsCard, NewsGrid, Footer  
- 🔗 **Dynamic Routing** – View full articles (`/news/[id]`)  
- ⚠️ **Error Handling** – Fallback UI for missing data or broken links  
- 🎨 **TailwindCSS Styling** – Consistent design and spacing  

---

## 🌐 **Live Demo**
[**View Live Project on Vercel**](YOUR_VERCEL_LINK_HERE)

---

## 💻 **Installation & Running Locally**
1. **Clone the repo**
bash
git clone https://github.com/Shreya2004Khanna/AST_CONSULTING_ASSIGNMENT_SHREYA_KHANNA.git
Navigate into the project

bash
Copy code
cd AST_CONSULTING_ASSIGNMENT_SHREYA_KHANNA
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser

🗂️ File Structure
bash
Copy code
/data/news.json       → Local JSON file containing article data
/components           → Reusable components (Navbar, Hero, NewsCard, Footer)
/pages                → Next.js pages
/public/images        → Local images
/styles               → TailwindCSS custom styles
🛠️ Tech Stack
Next.js – React framework with SSR & routing

TailwindCSS – Utility-first CSS framework

TypeScript – Strongly typed JavaScript

JSON – Local mock data

⚡ Key Features & Implementation
Fallback placeholder images for missing article images

Handles very long headlines using Tailwind line-clamp

Shows “No news available” if JSON is empty

Dynamic routing handled via:

ts
Copy code
newsData.find(article => article.id === Number(params.id))
🏋️‍♀️ Challenges & Solutions
Image paths breaking → Fixed by storing images in /public/images

Dynamic routing without API → Used JSON lookup by ID

Responsive grid issues → Tailwind grid-cols-1 md:grid-cols-2 lg:grid-cols-3

Handling missing fields → Optional chaining & fallback text

📸 Screenshots / Wireframe
Add screenshots or sketches here to visualize your layout

👩‍💻 Author
Shreya Khanna – Final Year B.Tech CSE
📍 Shri Ramswaroop Memorial University, Lucknow
🔗 LinkedIn
📄 Resume

📝 Notes
Local JSON used instead of API → no rate-limit issues

All content (Hindi news, images) is manually created

Ready for future expansion: categories, search, bookmarking, pagination

🌟 Future Improvements
Add multiple categories: Sports, India, World, Entertainment

Add search & filter functionality

Bookmark articles using localStorage

Pagination for large datasets

Admin panel to edit JSON or integrate mock backend
