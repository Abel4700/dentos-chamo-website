# Dentos Chamo | Premium Dental Solutions

Welcome to the **Dentos Chamo** corporate website project! This project is the official digital presence for Dentos Chamo, showcasing a comprehensive catalog of premium dental supplies, an integrated chatbot, and comprehensive ISO-compliant product architectures.

## 🚀 Current State of Development

The website has progressed into a robust, modern Single Page Application (SPA). Here's where we currently stand:

### 1. **Core Architecture**
- **Tech Stack:** Vanilla JavaScript (ES Module-based), HTML5, CSS3, built with [Vite](https://vitejs.dev/) for an optimized development and production experience.
- **Routing:** Implemented a custom client-side router (`src/router.js`) mapping paths to dynamically rendered pages (Home, About, Products, ProductDetails, Blog, Contact, Media).
- **Componentized Structure:** Modular UI components (`src/components/`) including a dynamic Header, Footer, Hero Slider, and an interactive Chatbot.

### 2. **Product Catalog & Integrations**
- **Data Source:** A structured JavaScript data store (`src/data/products.js`) currently serving as the central hub for our products, including data scraped and collated from Prevest Direct and the existing Dentos Chamo catalogs.
- **Compliance Architecture:** The product presentation layer is being structured to support ISO 15223-1 visual badges, robust API validation standards, and compliance features like technical data sheets and batch verification.
- **Dynamic Product Pages:** Catalog integration allowing users to click through individual products to view comprehensive technical specifications (`ProductDetails.js`).

### 3. **Interactive Features**
- **Advanced Chatbot:** A sophisticated, custom-built chatbot featuring decision tree logic to guide users through product inquiries and company information smoothly.
- **Modern UI/UX:** Responsive layouts utilizing FontAwesome icons, engaging sliders, and a polished corporate color palette aligned with Dentos Chamo's brand identity.

---

## 📁 Project Structure

```text
dentos-chamo-website/
├── index.html            # Main entry point (HTML skeleton)
├── package.json          # Project dependencies & scripts
├── vite.config.js        # Vite build configuration (if applicable)
├── public/               # Static assets (favicons, etc.)
└── src/
    ├── main.js           # Core application bootstrapper
    ├── router.js         # Client-side routing logic
    ├── style.css         # Global styles and CSS variables
    ├── assets/           # Images, fonts, and vector graphics
    ├── components/       # Reusable UI components
    │   ├── Header.js
    │   ├── Footer.js
    │   ├── Slider.js
    │   └── Chatbot.js
    ├── pages/            # View models for application routes
    │   ├── Home.js
    │   ├── About.js
    │   ├── Products.js
    │   ├── ProductDetails.js
    │   ├── Contact.js
    │   ├── Blog.js
    │   └── Media.js
    └── data/             # Structured data layers
        └── products.js   # Scraped product catalog with ISO metadata
```

## 🛠️ Setup & Local Development

This project uses `npm` for package management and Vite as the development server.

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   *The server should be running on `http://localhost:5173`.*

3. **Build for Production**
   ```bash
   npm run build
   ```
   *This compiles optimized static assets into the `/dist/` directory.*

## 🔮 Future Roadmap
- Complete implementation of ISO 13485/20417 compliance standards (Technical Data Sheets).
- Enhance the chatbot NLP/decision making processes.
- Implement more robust backend/API logic for real-time inventory and document generation (if needed).
- Performance audit and SEO optimization prior to final public deployment.
