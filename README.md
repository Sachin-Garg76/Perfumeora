# 🌸 Perfumeora – Premium Perfume Selling Web Application

**Perfumeora** is a modern and stylish perfume-selling web application offering an elegant fragrance shopping experience. With a visually rich UI and seamless product flow, users can browse, view details, and purchase from a curated collection of 6 premium perfumes.


---

## 📌 Features

- 🎨 Responsive and aesthetic frontend design
- 🧴 6+ unique perfume products with individual detail pages
- 🛍️ "Buy Now" buttons redirect to checkout input page
- 🔐 User login system (in progress)
- 📦 Backend API setup using Express.js
- 🧾 MongoDB integration via Mongoose
- 🔄 Smooth navigation with Back buttons and intuitive layout
- 📞 Fully designed footer with contact, social, and support links

---

## 💡 Pages Included

| Page             | Description                                   |
|------------------|-----------------------------------------------|
| `index.html`     | Homepage with featured perfumes               |
| `perfumes.html`  | Signature Collection with all product cards   |
| `product1.html` → `product6.html` | Individual perfume details   |
| `filldata.html`  | Placeholder for checkout/buy-now info         |
| `login.html`     | User login system (front + back in progress)  |
| `about.html`     | About us / mission page (optional)            |

---

## 🧰 Tech Stack

**Frontend:**
- HTML5, CSS3
- Font Awesome Icons
- Responsive Design (Media Queries)

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv (for environment configs)
- CORS (for frontend-backend interaction)

---

## 🔃 Folder Structure
perfumeora/
│
├── index.html
├── perfumes.html
├── product1.html to product6.html
├── login.html, about.html, filldata.html
├── server.js
├── /routes
│ ├── auth.js
│ └── product.js
├── .env
└── /images (e.g., perfume1.jpg to perfume6.jpg)


---

## 🛠️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Sachin-Garg76/perfumeora.git
  cd perfumeora
  npm install
  MONGO_URI=your_mongodb_connection_string
  node server.js



🧪 Sample Perfume Products
| Name         | Price  | Description               |
| ------------ | ------ | ------------------------- |
| Rose Blush   | ₹1,299 | Romantic floral with musk |
| Ocean Breeze | ₹1,499 | Fresh aquatic scent       |
| Mystic Oud   | ₹2,499 | Exotic oud with spices    |
| Citrus Burst | ₹999   | Zesty citrus mix          |
| Amber Night  | ₹1,799 | Amber, vanilla & musk     |
| Woody Spice  | ₹1,899 | Woody cinnamon & clove    |


🖼️ Screenshots
![image](https://github.com/user-attachments/assets/0fc289fd-bd50-4226-a3c7-cff43dcfb982)
![image](https://github.com/user-attachments/assets/29fd28ab-6c7d-468b-8016-b6f686060d6e)
![image](https://github.com/user-attachments/assets/401729a8-cca0-469d-b343-844c1af751e4)
![image](https://github.com/user-attachments/assets/75b35838-a0f5-4199-b78c-908f5ba99c14)


