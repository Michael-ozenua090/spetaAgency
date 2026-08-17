import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "8ff356b1-ba3e-4ac8-a221-b95ac8090f8e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <form onSubmit={onSubmit}>
      Name: <input type="text" name="name" required/> <br></br>
      Email: <input type="email" name="email" required/> <br></br>
      Message: <textarea name="message" required></textarea> <br></br>
      <button type="submit">Submit</button> <br></br>
      <p>{result}</p>
    </form>
  );
}