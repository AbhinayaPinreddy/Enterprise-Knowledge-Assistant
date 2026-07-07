#  Enterprise Knowledge Assistant

### Full-Stack Generative AI \| Multi-Agent RAG \| Enterprise Knowledge Management

![React](https://img.shields.io/badge/React-Frontend-61DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791)
![FAISS](https://img.shields.io/badge/FAISS-VectorDB-orange)
![Groq](https://img.shields.io/badge/Groq-Llama%203.3%2070B-red)
![Multi-Agent](https://img.shields.io/badge/Architecture-Multi--Agent-purple)
![RAG](https://img.shields.io/badge/AI-RAG-success)

------------------------------------------------------------------------

#  Live Demo

**Application:**\
https://enterprise-knowledge-assistant-git-main-enterpriseassistant.vercel.app/

------------------------------------------------------------------------

#  Project Overview

Enterprise Knowledge Assistant is a **Full-Stack Generative AI
application** that enables organizations to upload enterprise documents
and interact with them using natural language.

The application combines **Retrieval-Augmented Generation (RAG)** with a
**Multi-Agent workflow** to retrieve relevant information from
enterprise documents and generate grounded responses using a Large
Language Model.

Instead of relying on the LLM's internal knowledge, the assistant
performs semantic search over uploaded documents and generates answers
strictly from retrieved context.

------------------------------------------------------------------------

#  Features

-   JWT Authentication
-   Role-based Access Control (Admin & Employee)
-   Upload Enterprise PDF Documents
-   Background Document Processing
-   Automatic Document Chunking
-   Semantic Search using FAISS
-   AI-powered Question Answering
-   Dashboard Analytics
-   Document Download & Delete
-   PostgreSQL Metadata Storage
-   Cloud Deployment (Vercel + Railway)

------------------------------------------------------------------------

#  Multi-Agent Architecture

The application follows a modular Multi-Agent workflow.

### Planner Agent

-   Understands the user's intent.
-   Routes the request through the workflow.

### Retrieval Agent

-   Converts the query into embeddings.
-   Retrieves relevant document chunks from FAISS.

### Verification Agent

-   Validates retrieved context.
-   Filters irrelevant information.

### Response Generation Agent

-   Uses Groq Llama 3.3 70B.
-   Generates answers only from retrieved context.

------------------------------------------------------------------------
#  System Architecture Diagram

``` text
                User
                  │
                  ▼
        React + Vite Frontend
                  │
                  ▼
          FastAPI Backend API
                  │
     ┌────────────┴────────────┐
     │                         │
Authentication          Document Upload
     │                         │
     └────────────┬────────────┘
                  ▼
      Background Processing Task
                  │
                  ▼
         PDF Text Extraction
                  │
                  ▼
      Recursive Text Chunking
                  │
                  ▼
 SentenceTransformer Embeddings
                  │
                  ▼
         FAISS Vector Database
                  │
                  ▼
          Multi-Agent Workflow
      Planner → Retrieval → Verification
                  │
                  ▼
       Groq Llama 3.3 70B LLM
                  │
                  ▼
          Context-aware Response
```

------------------------------------------------------------------------

#  Tech Stack

## Frontend

-   React
-   Vite
-   React Router
-   Axios
-   React Hot Toast

## Backend

-   FastAPI
-   SQLAlchemy
-   PostgreSQL
-   Background Tasks
-   JWT Authentication

## Generative AI

-   Groq API
-   Llama 3.3 70B Versatile
-   SentenceTransformers (all-MiniLM-L6-v2)
-   FAISS Vector Database
-   LangChain Text Splitter

## Deployment

-   Frontend: Vercel
-   Backend: Railway
-   Database: Railway PostgreSQL

------------------------------------------------------------------------

#  Installation

## Backend

``` bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Frontend

``` bash
cd frontend
npm install
npm run dev
```

------------------------------------------------------------------------

#  Project Structure

``` text
Enterprise-Knowledge-Assistant/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── api/
│   ├── agents/
│   ├── graph/
│   ├── llm/
│   ├── rag/
│   ├── services/
│   ├── tasks/
│   ├── uploads/
│   ├── vector_db/
│   ├── main.py
│   └── requirements.txt
│
└── README.md
```


------------------------------------------------------------------------

# Author

**Abhinaya Pinreddy**

