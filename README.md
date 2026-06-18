# Overview

This project is a full-stack music playlist web application built to deepen my software engineering skills in modern JavaScript development. It combines a React + Vite frontend with an Express backend to provide a responsive experience for discovering tracks and managing playlists.

Melodious lets users browse pop tracks fetched from the Jamendo API, view song details, and manage their playlists. Users can log in to access personalized playlist functionality. The login process uses JWT tokens stored in cookies for secure session management. User account information and playlists are persisted in a PostgreSQL database hosted on Render. Only authenticated users can add or remove songs from their playlists. The goal is to practice API integration, frontend routing, backend routing, state management, authentication, and database integration while building a cohesive music discovery experience.

[Software Demo Video](https://youtu.be/qXu9BKjgCN4)

# Development Environment

The software was developed using Node.js and npm, with Visual Studio Code as the primary editor. The frontend uses React, Vite, React Router, and Tailwind CSS. The backend uses Express and CORS to serve API routes and proxy Jamendo requests. Authentication is implemented using JWT tokens, and the database uses PostgreSQL with the backend connected to a Render-hosted instance.

# Useful Websites

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Express Documentation](https://expressjs.com)
- [Jamendo API Documentation](https://developer.jamendo.com/v3.0)
- [TailwindCSS Documentation](https://tailwindcss.com/docs/responsive-design)
- [React Icons](https://react-icons.github.io/react-icons/search/#q=type)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [JWT (JSON Web Tokens) Documentation](https://jwt.io)
