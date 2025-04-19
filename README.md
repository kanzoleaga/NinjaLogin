# NinjaLogin# 🧪 Login Page Automation - Playwright

This project automates end-to-end testing of the [NinjaOne](https://www.ninjaone.com/) login form using [Playwright](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/).

## ✅ What’s Covered

The automated tests include:

- ⚠️ Validation of empty fields (username and password)
- ❌ Handling of invalid credentials
- 🔁 Verification of UI error messages

---

## 📦 Requirements

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher  
- npm or yarn  
- Git (optional but recommended)

---

## ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-login-tests-repo.git
cd your-login-tests-repo

2. **Install dependencies**

```bash
npm install
```
Or if you use yarn:

```bash
yarn install
```

---

## 🔐 Configure env variables

Create a file `.env` in the project's directory:

```bash
touch .env
```

Add the following to the .env file:

```
LOGIN_URL=https://app.ninjarmm.com/auth/#/login
VALID_EMAIL="<Your user's email>"
VALID_PASSWORD="<Your user's password>"
```

**Important:**  
The file `.env` will be ignored `.gitignore` and won't be uploaded to Github.

---

## 🏃 Execute the test cases

Run all tests:

```bash
npx playwright test
```

Run an specific test:

```bash
npx playwright test tests/login.spec.ts
```

To see the tests report:

```bash
npx playwright show-report
```

---

## 🗂️ Project's structure

```
├── tests/
│   └── login.spec.ts    
├── utils/
│   └── env.ts               
├── .env                     
├── .gitignore
├── package.json
├── playwright.config.ts    
└── README.md
```




