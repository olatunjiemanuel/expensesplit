Simple Expense Splitter – Design Document

Overview

The goal is to build a simple, functional expense splitter web app (think Splitwise-lite) that allows users to:
•	Create groups potentially
•	Add expenses
•	Split expenses evenly between members
•	See who owes whom

The initial version should prioritize clarity, correctness, and simplicity, while being designed in a way that allows easy expansion later (auth, settlements, categories, multi-currency, etc.).

⸻

Goals & Non-Goals

Goals (MVP)
•	Add expenses with:
•	Description
•	Amount
•	Payer
•	Participants
•	Automatically split expenses evenly
•	Show balances per user (owed / owes)
•	Generate a summary of who owes who
•	store data if any in local storage for now



Non-Goals (for now)
•	Create and manage a group
•	Add members to a group
•	No real payments
•	No notifications
•	No mobile app
•	No complex split logic (percentages, shares, etc.)
•	No user authentication (initially)

⸻

User Stories (MVP)
   •	As a user, I can create a new payment ( which includes amount, number of people to split with, details of people to split with)
   •	As a user, I can add an expense paid by one person
   •	As a user, I can see how much each person owes or is owed

⸻

High-Level Architecture

Frontend
•	React
•	Simple state management (local storage / useState)


Initial Deployment
•	Frontend: Vercel / Netlify

⸻

Data Model (Initial)

User (no auth yet)

User
- id (uuid)
- name (string)

Expense

Expense
- id (uuid)
- group_id
- description
- amount (decimal)
- paid_by (user_id)
- created_at

⸻

Expense Splitting Logic

Assumptions (MVP)
•	Expenses are split equally among all participants
•	Can include feature to choose split later on

Example
•	Expense: £60 dinner
•	Paid by: Alice
•	Participants: Alice, Bob, Charlie
•	potential to include percentage share with each participant


Balance Calculation (derived data)

Balances are calculated dynamically, not stored:
For each expense:
•	Calculate per-person share
•	Credit payer
•	Debit participants
Aggregate balances per user

⸻

Frontend Pages (MVP)

Add Expense Modal/Page
   •	Description
   •	Amount
   •	Paid by (dropdown)
   •	Participants (checkbox list)

⸻

Error Handling & Validation
   •	Amount must be > 0
   •	Expense must have at least one participant


Scalability & Future Enhancements

Designed to support:
•	Unequal splits (percentages, shares)
•	Expense categories
•	Settlements & payments
•	Multi-currency support
•	Activity history
•	Mobile app

⸻

Tech Stack Suggestion (Optional)
    •	Frontend: React + TypeScript
    •	Backend: Node.js (Express / Fastify)
    •	Database: PostgreSQL
    •	ORM: Prisma / TypeORM

⸻

MVP Success Criteria
    •	Can add expenses
    •	Balances are correct
    •	App feels simple and understandable
    •	Balances are correct
    •	Generates a simple summary for current expense


