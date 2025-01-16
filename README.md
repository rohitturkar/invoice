# Invoice Application

## Overview

The **Invoice Application** is a powerful tool designed to help users efficiently manage invoices. It features an intuitive frontend interface for seamless user interaction and a robust backend API for handling invoice processing, user authentication, and data management. The application is tailored to simplify the creation, tracking, and management of invoices.



### Frontend
- **User-Friendly Interface**: Sign in, create and edit invoices, and manage account settings with ease.
- **Invoice Management**: View, edit, and delete invoices as needed.
- **User Authentication**: Secure sign-in and account management.

### Backend
- **RESTful API**: A comprehensive set of endpoints that manage authentication and invoice operations.
- **Invoice Management**: Seamlessly create, retrieve, edit, and delete invoices.
- **Authentication**: A secure and flexible authentication system, supporting multiple sign-in and password recovery mechanisms.

## API Endpoints

### Authentication APIs
- **SignIn API**: Authenticates the user and provides a session token for subsequent requests.
- **SignUp API**: Allows new users to register by providing necessary account details.
- **Reset Password API**: Enables users to reset their passwords.
- **Forget Password API**: Sends a password reset link to the user’s registered email.
- **OTP API**: Generates a one-time password for extra verification during login or password recovery.

### Invoice APIs
- **Create Invoice API**: Allows users to create a new invoice by providing required details.
- **GET All Invoices API**: Retrieves a list of all invoices for the authenticated user.
- **GET Invoice by ID API**: Retrieves a specific invoice by its unique ID.
- **Edit Invoice API**: Allows users to modify an existing invoice.
- **Delete Invoice API**: Enables deletion of an invoice by its ID.

## Data Models

### User Schema
- **Full Name**: The user's complete name.
- **Username**: A unique username for the user.
- **Password**: User’s password (hashed for security).
- **Email**: User's email address for notifications and recovery.
- **Company Name** (optional): The company the user represents.
- **Company Logo** (optional): Logo image for the user's company, stored in Supabase storage.

### Invoice Schema
- **Invoice Number**: Unique identifier for the invoice.
- **Date**: The creation date of the invoice.
- **Due Date**: The payment due date for the invoice.
- **Bill From**: Sender's billing information, including:
  - Name
  - Phone number
  - Email address
  - Physical address
- **Bill To**: Recipient's billing information, including:
  - Name
  - Phone number
  - Email address
  - Physical address
- **Items Description**: List of items billed in the invoice, including:
  - Item name
  - Quantity
  - Cost per item
- **Tax Rate**: The applicable tax rate for the items.
- **Discount**: Any discount applied to the total amount.
- **Subtotal**: The total cost of items before tax and discount.
- **Total**: The final invoice amount after applying tax and discounts.
- **Notes**: Optional field for additional comments or instructions.

## Getting Started


