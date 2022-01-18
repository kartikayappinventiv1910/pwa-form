import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth as dbAuth, database } from "../firebase";
import { set, ref, update, onValue, remove } from "firebase/database";
// import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
// import { createUserProfileDocument, auth } from "../firebase";

export default function Signup() {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [country, setCountry] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conpassword, setConPassword] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== conpassword) {
      return setError("Passwords do not match");
    }
    console.log(email, password, conpassword, "details");

    createUserWithEmailAndPassword(
      dbAuth,
      email,
      password,
      name,
      mobile,
      country
    ).then((userData) => {
      set(ref(database, `Users/${userData.user.uid}`), {
        uid: userData.user.uid,
        name: name,
        mobile: mobile,
        country: country,
        email: email,
        createdAt: +new Date(),
      });
    });
    history.push("/");

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user);
    //   history.push("/");
    //   setEmail("");
    //   setPassword("");
    //   setConPassword("");
    // } catch (error) {
    //   console.error(error);
    // }

    // try {
    //   setError("");
    //   setLoading(true);
    //   setName(nameRef.current.value);

    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     nameRef.current.value,
    //     emailRef.current.value,
    //     passwordRef.current.value
    //   );

    //   await createUserProfileDocument(user, { name });
    //   // await signup(nameRef.current.value,emailRef.current.value, passwordRef.current.value)
    //   history.push("/");
    // } catch {
    //   setError("Failed to create an account");
    // }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            {/* <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group> */}
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                value={conpassword}
                onChange={(e) => setConPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
