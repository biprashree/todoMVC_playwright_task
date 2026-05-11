# Playwright Take Home Assessment

## Overview

This project contains automated UI tests for the TodoMVC demo application using Playwright with TypeScript.

Application under test:
https://demo.playwright.dev/todomvc

The project demonstrates:
- Playwright installation and configuration
- UI automation using Playwright Test Runner
- Page Object Model structure
- Stable assertions and locator strategies
- TypeScript-based automation framework

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- Cursor AI

---

# Node.js Version

```bash
node -v
v22.15.0
```

```bash
npm -v
10.9.2
```

---

# Project Structure

```text
PLAYWRIGHT-TAKEHOME
│
├── node_modules/
├── pages/
│   └── TodoPage.ts
├── screenshots/
│   └── test-run.png
├── tests/
│   └── todo.spec.ts
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

---

# Prerequisites

Install the following before running the project.

## Install Node.js

Download and install Node.js LTS version from:

https://nodejs.org

Verify installation:

```bash
node -v
npm -v
```

---

# Local Setup Instructions

## Clone Repository

```bash
git clone <repository-url>
```

## Navigate to Project Folder

```bash
cd playwright-takehome
```

## Install Dependencies

```bash
npm install
```

## Install Playwright Browsers

```bash
npx playwright install
```

---

# Playwright Setup Process

The Playwright project was initialized using:

```bash
npm init playwright@latest
```

Selected options during setup:

```text
Language: TypeScript
Tests Folder: tests
GitHub Actions: No
Install Playwright Browsers: Yes
```

---

# Running Tests

## Run All Tests

```bash
npx playwright test
```

## Run Specific Test in Headed Mode

```bash
npx playwright test tests/todo.spec.ts --headed
```

---

# View HTML Report

```bash
npx playwright show-report
```

---

# Test Scenario Covered

The automated test validates the following workflow:

1. Open TodoMVC application
2. Add first todo item:
   - Learn Playwright
3. Verify todo item appears
4. Add second todo item:
   - Write tests
5. Verify total todo count is 2
6. Mark "Learn Playwright" as completed
7. Verify:
   - Completed filter shows completed item
   - Active filter shows only active item
8. Clear completed items (optional cleanup)

---

# Design Decisions

## Page Object Model

A Page Object Model structure was implemented to:
- improve maintainability
- reduce code duplication
- separate UI actions from test logic

## Locator Strategy

Playwright recommended locators were used:
- getByRole()
- getByPlaceholder()
- locator()

This improves:
- readability
- stability
- accessibility alignment

## Assertions

Meaningful assertions were added to validate:
- todo visibility
- item counts
- completed and active filtering behavior

---

# AI Usage

Cursor AI was used during development for:
- initial boilerplate generation
- improving code readability
- refactoring repetitive code
- reviewing Playwright locator strategies

All generated code was manually reviewed and adjusted to ensure:
- correctness
- maintainability
- stable execution

---

# Notes

- TypeScript was used for better type safety and maintainability.
- Playwright auto-waiting was used to avoid unstable synchronization.
- No hardcoded waits or waitForTimeout calls were used.

---

# Screenshot

A screenshot of successful test execution is available in:

```text
screenshots/test-run.png
```
