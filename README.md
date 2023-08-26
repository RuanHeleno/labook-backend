# API LaBook Backend

## Table of contents

- [Overview](#overview)
  - [Demo](#demo)
- [Features](#features)
  - [Signup](#signup)
  - [Login](#login)
  - [Get all Users](#get-all-users)
  - [Edit User By Email](#edit-user-by-email)
  - [Delete User By Email](#delete-user-by-email)
  - [Create new Post](#create-new-post)
  - [Get all Posts](#get-all-posts)
  - [Edit Post By ID](#edit-post-by-id)
  - [Edit Post Like/Dislike](#edit-post-like-dislike)
  - [Delete Post By ID](#delete-post-by-id)
- [Process](#process)
  - [Built with](#built-with)
- [Author](#author)

## :mega: Overview

A API to my portfolio made based on a Social Media backend. See more below :)

### Demo

[Click here to see more](https://documenter.getpostman.com/view/17432210/2s946eADNj)

## :computer: Features

- Users CRUD
- Posts CRUD
- Like Dislikes Post requisition

### SignUp

```
// Request POST /users/signup
// body JSON
{
    "name": "teste",
    "email":"teste@email.com",
    "password":"12345678"
}

// Response
// status 201 CREATED
{
    "message": "Cadastro realizado com sucesso",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Mzc0MTAzLTExZjgtNDFiZi04MDVmLTkzNDQyZDM3OWE1OCIsInJvbGUiOiJOT1JNQUwiLCJuYW1lIjoidGVzdGUiLCJpYXQiOjE2OTI4NzYwNzksImV4cCI6MTY5MzQ4MDg3OX0.OJmQkbyGKPE19QbDWpnP3zq3YTaBCKLQ-pw3RvhH4HU"
}
```

---

### Login

```
// Request POST /users/login
// body JSON
{
    "email":"ruan@email.com",
    "password":"12345678"
}

// Response
// status 200 OK
{
    "message": "Login realizado com sucesso",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJuYW1lIjoicnVhbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5Mjg3NjEyMiwiZXhwIjoxNjkzNDgwOTIyfQ.pUNmQ5jONin6-4YsYGpHmmmXd8rGwJcMrJXRnPQaOhE"
}
```

---

### Get all Users

```
// Request GET /users
// headers.authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJuYW1lIjoicnVhbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5Mjg3NjEyMiwiZXhwIjoxNjkzNDgwOTIyfQ.pUNmQ5jONin6-4YsYGpHmmmXd8rGwJcMrJXRnPQaOhE"

// Response
// status 200 OK
[
    {
        "id": "u001",
        "name": "ruan",
        "email": "ruan@email.com",
        "role": "ADMIN",
        "createdAt": "2023-08-23 18:26:37"
    },
    {
        "id": "644c26a5-db53-43d5-a4b3-eb779c3849a7",
        "name": "joão",
        "email": "joao@gmail.com.br",
        "role": "NORMAL",
        "createdAt": "2023-08-23 21:03:21"
    },
    {
        "id": "cf896e5a-a154-4eee-9bfd-7cfe50c81b5f",
        "name": "joão",
        "email": "joao@email.com",
        "role": "NORMAL",
        "createdAt": "2023-08-23 21:03:46"
    }
]
```

---

### Edit User By Email

```
// Request PUT /users/teste@gmail.com
// path params = :email
// headers.authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJuYW1lIjoicnVhbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5Mjg3NjEyMiwiZXhwIjoxNjkzNDgwOTIyfQ.pUNmQ5jONin6-4YsYGpHmmmXd8rGwJcMrJXRnPQaOhE"

// body JSON
{
    "password": "123456789@"
}

// Response
// status 200 OK
{
    "message": "Usuário alterado com sucesso!"
}
```

---

### Delete User By Email

```
// Request DELETE /users/teste@gmail.com
// path params = :email
// headers.authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJuYW1lIjoicnVhbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5Mjg3NjEyMiwiZXhwIjoxNjkzNDgwOTIyfQ.pUNmQ5jONin6-4YsYGpHmmmXd8rGwJcMrJXRnPQaOhE"

// Response
// status 200 OK
{
    "message": "Usuário deletado com sucesso!"
}
```

---

### Create new Post

```
// Request POST /posts
// headers.authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJuYW1lIjoicnVhbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5Mjg3NjEyMiwiZXhwIjoxNjkzNDgwOTIyfQ.pUNmQ5jONin6-4YsYGpHmmmXd8rGwJcMrJXRnPQaOhE"

// body JSON
{
    "content": "Partiu happy hour!"
}

// Response
// status 201 CREATED
{
    "content": "Partiu happy hour!"
}
```
---

### Get all Posts

```
// Request GET /products
// headers.authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJuYW1lIjoicnVhbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5Mjg3NjEyMiwiZXhwIjoxNjkzNDgwOTIyfQ.pUNmQ5jONin6-4YsYGpHmmmXd8rGwJcMrJXRnPQaOhE"

// Response
// status 200 OK
[
    {
        "id": "92f2bf62-7ed4-4890-9350-932276018145",
        "content": "Partiu happy hour lá no point de sempre!",
        "likes": 0,
        "dislikes": 0,
        "createdAt": "2023-08-23 17:19:05",
        "updatedAt": "2023-08-23 18:58:54",
        "creator": {
            "id": "u001",
            "name": "ruan"
        }
    },
    {
        "id": "3e677500-deed-42e2-8180-b53fa361015b",
        "content": "Partiu happy hour!",
        "likes": 0,
        "dislikes": 0,
        "createdAt": "2023-08-23 21:05:31",
        "updatedAt": "2023-08-23 21:05:31",
        "creator": {
            "id": "cf896e5a-a154-4eee-9bfd-7cfe50c81b5f",
            "name": "joão"
        }
    },
    {
        "id": "6ed7fc66-9ea1-4923-89bb-a104bc8a07e4",
        "content": "Partiu happy hour!",
        "likes": 0,
        "dislikes": 0,
        "createdAt": "2023-08-23 21:07:08",
        "updatedAt": "2023-08-23 21:07:08",
        "creator": {
            "id": "u001",
            "name": "ruan"
        }
    },
    {
        "id": "6c02f39f-0c65-467d-8fe0-558ff8f2c086",
        "content": "Partiu happy hour! Ruan",
        "likes": 0,
        "dislikes": 0,
        "createdAt": "2023-08-23 21:08:28",
        "updatedAt": "2023-08-23 21:08:28",
        "creator": {
            "id": "u001",
            "name": "ruan"
        }
    },
    {
        "id": "6185caec-5808-4f1c-a503-f737f34e4307",
        "content": "Partiu happy hour!",
        "likes": 0,
        "dislikes": 0,
        "createdAt": "2023-08-24 18:15:23",
        "updatedAt": "2023-08-24 18:15:23",
        "creator": {
            "id": "u001",
            "name": "ruan"
        }
    }
]
```

---

### Edit Post By ID

```
// Request PUT /posts/6185caec-5808-4f1c-a503-f737f34e4307
// path params = :id
// headers.authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJuYW1lIjoicnVhbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5Mjg3NjEyMiwiZXhwIjoxNjkzNDgwOTIyfQ.pUNmQ5jONin6-4YsYGpHmmmXd8rGwJcMrJXRnPQaOhE"

// body JSON
{
    "content": "Partiu happy hour lá no point de sempre!"
}

// Response
// status 200 OK
{
    "content": "Partiu happy hour lá no point de sempre!"
}
```

---

### Edit Post Like Dislike

```
// Request PUT /posts/6185caec-5808-4f1c-a503-f737f34e4307/like
// path params = :id
// headers.authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJuYW1lIjoicnVhbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5Mjg3NjEyMiwiZXhwIjoxNjkzNDgwOTIyfQ.pUNmQ5jONin6-4YsYGpHmmmXd8rGwJcMrJXRnPQaOhE"

// body JSON
{
    "like": true
}

// Response
// status 200 OK
```

```
// Request PUT /posts/6185caec-5808-4f1c-a503-f737f34e4307/like
// path params = :id
// headers.authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJuYW1lIjoicnVhbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5Mjg3NjEyMiwiZXhwIjoxNjkzNDgwOTIyfQ.pUNmQ5jONin6-4YsYGpHmmmXd8rGwJcMrJXRnPQaOhE"

// body JSON
{
    "like": false
}

// Response
// status 200 OK
```

---

### Delete Post By ID

```
// Request DELETE /posts/6185caec-5808-4f1c-a503-f737f34e4307
// path params = :id
// headers.authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJuYW1lIjoicnVhbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY5Mjg3NjEyMiwiZXhwIjoxNjkzNDgwOTIyfQ.pUNmQ5jONin6-4YsYGpHmmmXd8rGwJcMrJXRnPQaOhE"

// Response
// status 200 OK
{
    "message": "Post deletado com sucesso!"
}
```

---

## :newspaper: Process

### Built with

- [Typescript](https://www.typescriptlang.org)
- [SQLite](https://www.sqlite.org/index.html)
- [Knex](https://knexjs.org)
- [Zod](https://zod.dev/)

### :man: Author

<table>
  <tr>
    <td align="center">
        <img 
            src="https://github.com/RuanHeleno.png" 
            width="100px;" 
            alt="Foto do Ruan Heleno no GitHub" 
        /> <br />
        <sub> <a href="https://github.com/ruanHeleno"> <b>Ruan Heleno</b> </a> </sub>
    </td>
  </tr>
</table>

- [Portfolio](https://ruanheleno.github.io)
- [LinkedIn](https://www.linkedin.com/in/ruanheleno/)
