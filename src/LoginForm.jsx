import { useState } from "react";

export default function LoginForm() {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [token, setToken] = useState("");

  const createUser = async (event) => {
    event.preventDefault();

    const response = await fetch("URL or API Here", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
        name: nameInput,
        password: passwordInput,
      }),
    });

    setEmailInput("");
    setNameInput("");
    setPasswordInput("");
  };

  const login = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`URL or API Here/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });
      const tokenObject = await response.json();
      setToken(tokenObject.access_token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        onSubmit={ login }
      >
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={emailInput}
          onChange={(event) => {
            setEmailInput(event.target.value);
          }}
        />
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>

      <h2>Create User</h2>

      <form onSubmit={createUser}>
        <input
          placeholder="email"
          type="email"
          onChange={(event) => {
            setEmailInput(event.target.value);
          }}
          value={emailInput}
        />
        <input
          placeholder="name"
          onChange={(event) => {
            setNameInput(event.target.value);
          }}
          value={nameInput}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(event) => {
            setPasswordInput(event.target.value);
          }}
          value={passwordInput}
        />

        <button>Create Account</button>
      </form>
    </>
  );
}
