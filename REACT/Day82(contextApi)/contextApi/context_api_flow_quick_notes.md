# React Context API – Short Notes with Flow Diagram

## What is Context API?
Context API is used to share data globally in a React app without passing props manually at every level (avoids props drilling).

---

## Key Parts (3 things only)
1. **Context** – created using `createContext()` (the connection)
2. **Provider** – supplies data to the context
3. **Consumer** – reads data using `useContext()`

---

## Flow Structure (Diagram)

```
        createContext()
              │
              ▼
        UserContext  (shared channel)
              │
              ▼
     UserContext.Provider
        (UserProvider)
              │   value = "static data"
              ▼
            <App />
              │
              ▼
            <Hero />
              │
              ▼
     useContext(UserContext)
              │
              ▼
          Gets Data
```

---

## Role of Each File

### 1. UserContext.jsx
- Creates the context
- No data, no JSX
- Exported so all files can use the same context

### 2. UserProvider.jsx
- Wraps the app
- Puts data into the context using Provider

### 3. Hero.jsx
- Reads data from context
- Uses `useContext(UserContext)`

---

## Important Rules
- Context is imported in **both Provider and Consumer**
- Provider gives data, Consumer reads data
- Components NEVER import Provider to read data

---

## One-Line Memory Trick

> **Context = wire**
> **Provider = power supply**
> **Component = device using power**

---

## Interview Line (Short)

> "Context API allows data to be shared globally using a Provider and consumed in any component using the useContext hook."

---

## When to Use Context API
- Theme (dark/light)
- User login data
- Language settings

---

(End of notes)