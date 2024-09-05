# Nerve Lab Email Manager

An email management tool for administrators to create accounts, create emails, and have email threads that include mutlitple replies.

### Technologies:
- Next.js 14 App Router
- PostgreSQL Database
- Next-Auth for Role based Authentication
- Tailwind CSS

*The purpose for this tool is for users to log in with a set number of accounts to read different users emails to find clues for the associated video game "Vector Ball"*

## Introduction
For a brief background, Nerve Lab is a game studio, and their game "Vector Ball" is a PC game available on Steam. Within Vector Ball there is an underlying story of how the main A.I. instructor is starting to change underlying Nerve Lab and Vector Ball infrastructure without the game studio's consent. The email Manager tool was created to give game users access to Nerve Lab's "emails" to find clues that are usable for in game easter eggs, and continue the overall story of the A.I. taking over the game studio's systems.

## Features
- To get started an Admin Account has been seeded to the SQL database.  This is done because account creation is only possible from an Admin account, since the application has a fixed number of user accounts to account for each Nerve Lab employee email login.
- Once logged in as an Admin, new users can be created in the Admin Portal by clicking "Add User".
<img width="1724" alt="Screenshot 2024-09-05 at 11 30 16 AM" src="https://github.com/user-attachments/assets/12ba78f1-48c1-40a8-9c33-bb54f7b547db">
