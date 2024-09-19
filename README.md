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
### Admin Portal
- To get started an Admin Account has been seeded to the SQL database.  This is done because account creation is only possible from an Admin account, since the application has a fixed number of user accounts to account for each Nerve Lab employee email login.
- Once logged in as an Admin, new users can be created in the Admin Portal by clicking "Add User".  On this page as well, we have the ability to access the edit page if we want to change the Role between "User" & "Admin", the username, or associated email.  The ability to change a password has been intentionally left out since 1 account can be accessed by many users, and we don't want anyone to change passwords, since passwords are found in the video game.
<img width="1724" alt="Screenshot 2024-09-05 at 11 30 16 AM" src="https://github.com/user-attachments/assets/12ba78f1-48c1-40a8-9c33-bb54f7b547db">
<img width="1726" alt="Screenshot 2024-09-05 at 11 40 04 AM" src="https://github.com/user-attachments/assets/d142fcae-d47f-4fe1-b496-92d1b3cef70a">

### Creating an Email
- Once a user has been created, we can create an email to send to another user.  The email can be "sent" between any users, the objective is to allow the Admin to create email chains between 2 different users (Nerve Lab employees) so we don't need to log in as each user to send an email.
- The email creation form includes a rich text editor give our emails the proper appearance of an email and store the email as HTML in the database.
<img width="1725" alt="Screenshot 2024-09-05 at 11 58 44 AM" src="https://github.com/user-attachments/assets/2e9eedff-9916-4010-bad5-22c52f55f162">

### Viewing Sent Emails in Admin Portal
  
- As we can see in the image below, all HTML was preserved by the rich text editor for reading emails.
<img width="1719" alt="Screenshot 2024-09-05 at 12 08 19 PM" src="https://github.com/user-attachments/assets/ddc29213-514c-4c48-aaf6-78cda3cad4e5">

- In this emails page we can also reply to emails, thus creating a full email chain.  Admins can also delete, reply to replies, or reply to the original email (1st email in email chain)
<img width="1714" alt="Screenshot 2024-09-05 at 12 12 23 PM" src="https://github.com/user-attachments/assets/0053a72e-5e8a-4971-8555-eeca6bd5e1d8">
<img width="1709" alt="Screenshot 2024-09-05 at 12 12 59 PM" src="https://github.com/user-attachments/assets/e981a133-7f23-4460-81ad-db579cf0b4da">

## User Portal

- Once a user has found a username and password from the Vector Ball PC Game, the user can log in and will be automatically redirected to the the User Email inbox page.  Here they can view emails sent by this "employee" or recieved.  Clues for in-game storyline are hidden within emails.
<img width="1715" alt="Screenshot 2024-09-05 at 5 52 43 PM" src="https://github.com/user-attachments/assets/5bf633d1-e29b-4ab9-9e97-8ae2ea8c3aa0">

