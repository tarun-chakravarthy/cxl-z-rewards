# Rewards Carousel Demo

## 🚀 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/tarun-chakravarthy/cxl-z-rewards.git
cd cxl-z-rewards
```

2. **Install dependencies**

```bash
npm install
```

3. **Run locally**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

## 🛠 Tech Stack Used

# React + TypeScript + Vite
- **Vercel** for deployment

## 📌 Assumptions

- Points are assigned per user, so query params (`uid` and `points`) are used to show locked/unlocked products.
- A sample deployment was created using **Vercel**.
- Demo access is done via query params in the URL:

  ```
https://cxl-z-rewards.vercel.app/?uid=1&points=500
```

## 📝 Notes

- **Fonts**: 'Sweet Sans Pro Bold' is a premium Adobe font. For development, a downloaded version was used.
- **Product Assets**: Images were exported directly from the provided Figma file. Products without valid images are filtered out from the carousel.
- To keep the output clean and human-authored, **no external UI libraries** were used for the carousel or milestone marker. All components are hand-rolled using Tailwind CSS.

---

## 📦 Deployment

This project uses **Vercel** for deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/vite-react&template=vite-react)

Live demo: https://cxl-z-rewards.vercel.app/?uid=1&points=500

You can also deploy from your terminal using the [Vercel CLI](https://vercel.com/download):

```bash
vercel
```

---
Feel free to fork or adapt this project based on your own data source or brand assets.