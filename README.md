# Simple Expense Splitter

A lightweight, no-frills expense splitter web app (think **Splitwise-lite**) that helps users track shared expenses and see who owes whom.

This project prioritizes **clarity, correctness, and simplicity** while leaving room to scale with more advanced features later.

---

## Overview

The app allows users to:
- Add expenses
- Split expenses evenly between participants
- See balances showing who owes and who is owed
- View a simple summary of debts

For the initial version, all data is stored locally (no backend, no authentication).

---

## Goals & Non-Goals

### Goals (MVP)
- Add expenses with:
  - Description
  - Amount
  - Payer
  - Participants
- Automatically split expenses evenly
- Show balances per user (owed / owes)
- Generate a simple “who owes who” summary
- Persist data using **local storage**

### Non-Goals (for now)
- Group creation or management
- User authentication
- Real payments or settlements
- Notifications
- Mobile app
- Complex split logic (percentages, shares, etc.)

---

## High-Level Architecture

### Frontend
- React
- Local state management (`useState`)
- Persistence via `localStorage`

### Deployment
- Frontend hosted on **Vercel** or **Netlify**

_No backend in the MVP._

---
