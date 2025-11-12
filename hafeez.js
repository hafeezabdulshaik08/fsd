2a//
const express = require(express');
const app = express0;
const PORT = 3000;
// Set EJS as the templating engine
app.set('view engine', 'ejs');
// Routes
app.get(/', (req, res) => {
const data = { title: 'Home Page', message: 'Welcome to EJS Example!' };
res.render('sample', data); // Render the 'index.ejs' template
3):
// Start server
app. listen PORT, 0 => {
console.log( Server running at http://localhost:${PORT;*);
3);
server.js
L views/
L index.ejs
Create views/index.ejs
‹!DOCTYPE html >
<html>
<head>
<title><%= title %></title>
</head> <body>
<h1><%= message %></h1>
<p> This page is rendered using the <b> EJS</b> templating engine.</p>
</body> </html>
 
//6a
import React from "react"; 
import Welcome from "./Welcome"; 
function App() { 
return ( 
<div style={{ fontFamily: "system-ui", padding: 20 }}> 
<h2>React Props and State Example</h2> 
{/* Pass data (props) to child component */} 
<Welcome name="Alice" /> 
<Welcome name="Bob" /> 
</div> 
); 
} 
export default App 
Welcome.js 
import React, { useState } from "react"; 
function Welcome({ name }) { 
// State to store number of greetings 
const [count, setCount] = useState(0); 
return ( 
<div 
style={{ 
border: "1px solid #ccc", 
padding: "10px", 
margin: "10px 0", 
borderRadius: "8px", 
}} 
> 
<h3>Hello, {name}  </h3> 
<p>You have greeted {count} times.</p> 
<button onClick={() => setCount(count + 1)}>Say Hello</button> 
</div> 
); 
} 
export default Welcome; 
index.js 
import React, { StrictMode } from "react"; 
import { createRoot } from "react-dom/client"; 
import React, { StrictMode } from "react";
 import { createRoot } from "react
 import "./styles.css"; 
import App from "./App"; 
ateRoot(document.getElementById("root")); 
const root = createRoot(document.getElementById("root"));
 root.render( 
<StrictMode> 
<App /> 
</StrictMode> 
); 
index.html 
<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device
 <title>Document</title> 
</head> 
<body> 
<div id="root"></div> 
</body> 
</html>

//12
import React, { useState } from "react"; 
 
function App() { 
  const questions = [ 
    { 
      question: "What is the capital of France?", 
      options: ["Paris", "London", "Rome", "Berlin"], 
      answer: "Paris", 
    }, 
    { 
      question: "Which planet is known as the Red Planet?", 
      options: ["Earth", "Mars", "Jupiter", "Venus"], 
      answer: "Mars", 
    }, 
    { 
      question: "Which language is used for web apps?", 
      options: ["Python", "JavaScript", "C++", "Java"], 
      answer: "JavaScript", 
    }, 
  ]; 
  const [current, setCurrent] = useState(0); 
  const [score, setScore] = useState(0); 
  const [showScore, setShowScore] = useState(false); 
 
  const handleAnswer = (option) => { 
    if (option === questions[current].answer) { 
      setScore(score + 1); 
    } 
    const next = current + 1; 
    if (next < questions.length) { 
      setCurrent(next); 
    } else { 
      setShowScore(true); 
    } 
  }; 
 
  const resetQuiz = () => { 
    setCurrent(0); 
    setScore(0); 
    setShowScore(false); 
  }; 
  return ( 
    <div style={{ textAlign: "center", padding: 30, fontFamily: "system-ui" }}> 
      <h2>  Simple React Quiz App</h2> 
 
      {showScore ? ( 
        <div> 
          <h3> 
            You scored {score} out of {questions.length} 
          </h3> 
          <button 
            onClick={resetQuiz} 
            style={{ 
              padding: "8px 15px", 
              marginTop: "10px", 
              background: "#4CAF50", 
              color: "white", 
              border: "none", 
              borderRadius: "5px", 
              cursor: "pointer", 
            }} 
          > 
            Restart Quiz 
          </button> 
        </div>) :  
       ( 
        <div> 
          <h3> 
            Question {current + 1}/{questions.length} 
          </h3> 
          <p>{questions[current].question}</p> 
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}> 
            {questions[current].options.map((option, index) => ( 
              <button 
                key={index} 
                onClick={() => handleAnswer(option)} 
                style={{ 
                  margin: "5px", 
                  padding: "8px 15px", 
                  width: "200px", 
                  borderRadius: "5px", 
                  border: "1px solid #ccc", 
                  background: "#f5f5f5", 
                  cursor: "pointer", 
                }} > 
                {option} 
              </button> 
            ))} 
          </div> 
        </div> 
      )} 
    </div> 
  ); 
} 
 
export default App;
