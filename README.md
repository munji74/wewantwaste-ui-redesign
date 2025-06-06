# REMWaste UI Redesign – Skip Size Selector Page

Redesigned the "Choose Your Skip Size" page from https://wewantwaste.co.uk to deliver a more intuitive, modern, and responsive user experience. The redesign maintains core functionality while offering significant UI/UX enhancements.

## 🔗 Live Preview

- 🔴 **Live Site (CodeSandbox):** [https://gjr85p-3000.csb.app/](https://gjr85p-3000.csb.app/)
- 💻 **GitHub Repo:** [https://github.com/munji74/wewantwaste-ui-redesign](https://github.com/munji74/wewantwaste-ui-redesign)

---

## ✅ Challenge Requirements Addressed

### ✨ 1. **Completely Redesigned UI**
- Fully reimagined layout and visuals
- Clean light theme with soft gradients for improved readability
- Modern card design with hover effects and badge indicators

### 📲 2. **Responsive Design**
- Mobile-first layout using Tailwind CSS
- Fluid grid system adapts across phone, tablet, and desktop viewports

### 🔌 3. **Live API Integration**
- Skip size data is fetched from the provided endpoint: https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft  With my postcode being LE10%201SH and area being Hinckley


- Dynamic rendering of size, price, road permission, and waste support

### 🧠 4. **Functional Parity**
- Card selection functionality is preserved
- Visual feedback with ring indicator and persistent selection bar
- "Continue" button appears once a skip is selected

### 🧭 5. **Step Progress Indicator**
- A custom-built stepper bar reflects the user's stage in the process
- Visually consistent with common checkout/booking flows

---

## 🧑‍💻 Tech Stack

- **Framework:** React 
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **API:** Axios

---

## 📂 Folder Structure

src/

├── assets/  Images (skip-placeholder) 

├── components/ # Reusable UI components

│ ├── SkipCard.jsx

│ ├── SkipGrid.jsx

│ └── ProgressSteps.jsx

├── pages/

│ └── SkipSelector.jsx # Main page logic

└── App.jsx


A place holder image was used because the API test did not return images in the response

        "id": 6565,
        "size": 4,
        "hire_period_days": 14,
        "transport_cost": null,
        "per_tonne_cost": null,
        "price_before_vat": 211,
        "vat": 20,
        "postcode": "LE10",
        "area": "Hinckley",
        "forbidden": false,
        "created_at": "2025-04-03T13:51:27.691958",
        "updated_at": "2025-04-07T13:07:10.532",
        "allowed_on_road": true,
        "allows_heavy_waste": true

---

## 📝 Developer Notes

This challenge was completed within the given **72-hour** timeframe. Emphasis was placed on clean, readable code, visually appealing design, and mobile usability.

If given more time, improvements could include:
- Animations between steps
- Skeleton loaders
- Unit testing for card logic and state management

---

## 🙌 Author

**Munjwok James Alala**  
Frontend Developer | React Developer  
[GitHub](https://github.com/munji74) · [LinkedIn](https://www.linkedin.com/in/munjwok-james-alala-4b5416327/)

---

