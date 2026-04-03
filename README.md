# Dentose Chamo | Multi-Entity Corporate Platform

Welcome to the **Dentose Chamo Corporate Group** digital platform. What began as a single-page prototype for a dental import company has systematically evolved into a highly robust, multi-entity Vanilla JavaScript SPA representing the entire corporate umbrella.

## 🚀 Current State of Architecture

The platform has been successfully restructured to support multiple, distinct business units operating under the Dentose Chamo group, connected via a sophisticated global navigation system. 

### 1. **Core Technology Stack**
*   **Vite:** Ultra-fast frontend build tooling and development server.
*   **Vanilla JavaScript (ES Modules):** Clean, dependency-free client-side rendering architecture.
*   **Custom Client-Side Router:** Located in `src/router.js`, this handles seamless hash-based SPA transitions without page reloads.
*   **Vanilla CSS3 (Glassmorphism):** Pure CSS implementations of modern design paradigms (overlapping bento-box grids, `--glass-premium` blur textures, and dynamic CSS variables).

### 2. **Multi-Entity Page Structure**
The application now supports an "Omni-Navigation" Header (`Header.js`) featuring an interactive "Our Companies" CSS dropdown, routing users seamlessly between dedicated corporate entities:

*   **Dentose Chamo Import & Export** (`#/companies/dentos-chamo`)
    *   The primary revenue driver. Automatically loads the highly complex `Products.js` module, dividing the UI logically into **Medical Supply** and **Organic Export** categories.
*   **Ora-Dent Oral Cosmetics** (`#/companies/ora-dent`)
    *   A premium sub-entity focused on high-end cosmetic dental solutions and consumer aesthetic product lines.
*   **Akedent Pharmaceutical & Medical Equipment** (`#/companies/akedent`)
    *   An independent business unit focused on heavy, capital hospital equipment and stringent cold-chain pharmaceutical logistics.
*   **Partners & Certifications** (`#/partners`)
    *   A dedicated global partnerships portal outlining EFDA and ISO 9001 compliance standards.

### 3. **The Product Catalog Engine (V1 Prototype)**
For the underlying Dentose Chamo division, we retain the deeply functional `Products.js` and `ProductDetails.js` views.
*   **Data Structure:** Powered directly by `src/data/products.js`, maintaining 44 core products parsed from manufacturing catalogs.
*   **Presentation Layer:** Products are rendered onto dynamic Bento-box stages, utilizing ISO 15223-1 visual trace badges. 
*   **Contact Flow:** Employs a sticky mobile action bar for immediate Request for Quote (RFQ) pipeline generation.

---

## 📁 System Directory Map

```text
dentos-chamo-website/
├── index.html            # Main Entry Skeleton Point
├── package.json          # Node configurations
├── vite.config.js        # Vite bundling commands
├── public/               
│   └── images/           # Corporate logos, product data, slider assets
└── src/
    ├── main.js           # Bootstrapper
    ├── router.js         # Master Routing Engine (handling the multi-entity paths)
    ├── style.css         # Global Glassmorphism & Token design system
    ├── components/       
    │   ├── Header.js     # Dropdown-enabled Multi-Entity Nav System
    │   ├── Footer.js
    │   ├── Slider.js
    │   └── Chatbot.js    # AI-assisted UX
    ├── pages/            
    │   ├── Home.js       # Corporate Group Landing
    │   ├── About.js      # The Unified Corporate Vision & Timeline
    │   ├── OraDent.js    # Ora-Dent Sub-entity 
    │   ├── Akedent.js    # Akedent Sub-entity
    │   ├── Partners.js   # Global Compliance Portal
    │   ├── Products.js   # Dentose Chamo Divisions (Medical/Agriculture)
    │   ├── ProductDetails.js
    │   ├── Contact.js
    │   ├── Blog.js
    │   └── Media.js
    └── data/             
        └── products.js   # The JSON-like static database
```

## 🛠️ Local Development & Deployment

This project uses `npm` and Vite. To run the Multi-Entity platform locally:

1. **Install Dependencies:** `npm install`
2. **Boot Web Server:** `npm run dev` (Spins up on `http://localhost:5173`)
3. **Commit & Deploy:** Run `git add .` to ensure all newly generated dummy pages (`OraDent.js`, etc.) are tracked securely before executing `npm run build` or pushing to **Netlify**, preventing unresolved module import crashes.
