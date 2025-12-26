# E-Shop

**A fully adaptable e-commerce platform powered by Wix Headless and Next.js.**

E-Shop allows businesses to launch their own online stores quickly and efficiently, providing essential e-commerce functionality with a modern frontend.

---

**Deployed:** [live](e-shop-cyan-kappa.vercel.app)

---


## Overview
E-Shop is designed for businesses looking to create their own e-commerce website without building everything from scratch. While primarily a learning project, it demonstrates a full-stack e-commerce setup with **Next.js**, **TailwindCSS**, and **Wix Headless CMS**.  

The key strength of E-Shop is its **adaptability** — the frontend can be easily customized for any business.

---

## Features
- **User Authentication:** Email/password login integrated with Wix.
- **Product Listing:** Dynamic products fetched from Wix CMS.
- **Shopping Cart:** Add/remove products, view cart total.
- **Checkout & Payments:** Fully functional checkout with payment integration.
- **Responsive Design:** Works across devices and screen sizes.
- **Adaptable for Businesses:** Can be rebranded and reused for different products.

*Planned Enhancements:*  
- Admin dashboard for product management.  
- Order management and analytics.  
- Improved UI/UX and theme customization options.  

---

## Tech Stack
- **Frontend:** Next.js, TailwindCSS, custom CSS  
- **Backend/Headless CMS:** Wix Studio (Wix Headless)  
- **Database:** Wix  
- **Authentication:** Wix Auth  
- **Deployment:** Vercel  
- **Package Manager:** npm  

---

## Getting Started

### Prerequisites
- Node.js (v18+)  
- npm  

### Installation
1. Clone the repository:  
   ```bash
   git clone <repo-url>
   cd eshop
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Create `.env` file based on `.env.example` and add your Wix credentials.

### Running Locally
```bash
npm run dev
```
Visit `http://localhost:3000` to see the app in action.

---

## Screenshots & Demo
- Screenshots and demo videos are available in the `/assets` folder.  
- Live demo: [Site](e-shop-cyan-kappa.vercel.app)

---

## Known Limitations
- UI can be improved for better user experience.  
- Currently relies entirely on Wix Headless; backend flexibility is limited.  
- No automated tests implemented.  

---

## Future Improvements
- Refactor UI for modern, polished look.  
- Add an admin panel for easier product and order management.  
- Implement advanced features like analytics and notifications.  

---

## Contributing
Contributions are **encouraged**. If you want to suggest features or improvements:  
1. Fork the repository  
2. Create a feature branch  
3. Submit a pull request  

---

## License
This project is open-source under the **MIT License**. Others are free to use, modify, and contribute.