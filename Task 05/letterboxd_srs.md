Software Requirements Specification (SRS):

1. Introduction.
 1.1 Purpose
 This document provides a basic overview of the functional and non-functional requirements for the Letterboxd project, an online platform for film enthusiasts to track movies, share  reviews, and engage in discussions.
 1.2 Scope
 The Letterboxd project aims to deliver a user-friendly application where users can:
  Search for Movie and view their Reviews and other Details.
  Review and rate movies.
  Follow and interact with other users by liking and commenting on their reviews.
 1.3 Target Audience
 The intended audience includes:
  Film enthusiasts and casual movie watchers.
  Movie Reviewrs.
  
2. Functional Requirements.
 2.1 User Registration and Authentication
  Users can create accounts using email or Signin if they are already an member.
  Login/logout functionality must be secure
 2.2 Movie Management
  Users can view or browse their favourite movies form the Films list.
  Users can view reviews of each movie and also review movies they have already watched.
 2.3 Social Features
  Users can write and publish movie reviews.
  Users can follow other reviewers.
 2.4 Discoverability
  User gets the latest and most popular movies of that month in their feed.

3. Non-Functional Requirements.
 3.1 Usability
  Intuitive navigation and responsive design in Desktop.
 3.2 Performance
  Ensure fast loading times (< 3 seconds for main pages).
  Handle up to 10,000 concurrent users initially.
 3.3 Security
 Secure user data with HTTPS and encryption.
 Implement measures against common threats like XSS and CSRF.

4. Basic Design Guidelines
 4.1 UI Design
  Follow a modern, minimalist aesthetic.
  Maintain visual consistency with clear typography and accessible color schemes.
 4.2 Backend
  Use a scalable architecture with APIs to support mobile and web versions.
 4.3 Database
  Relational database design with optimized queries for handling user data and reviews.
5. Assumptions and Constraints
 The project will use open-source libraries where applicable.
 Initial development focuses on features and other basic elements. In future we will focus on the other elements of the application.



