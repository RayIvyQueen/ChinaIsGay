// LGBTQ+ in China Trivia Game
// Extended, thought-provoking browser-based quiz game with Chinese-socialist visual theme and deeper context

const questions = [
  {
    question: "Approximately how many LGBTQ+ people live in China?",
    options: ["10 million", "30 million", "70–90 million", "Over 150 million"],
    answer: 2,
    explanation: "Estimates suggest around 70–90 million LGBTQ+ people live in China, about 5–6% of the population."
  },
  {
    question: "Does the PRC have anti-discrimination laws protecting LGBTQ+ people?",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "There are no national anti-discrimination protections for LGBTQ+ people in the PRC."
  },
  {
    question: "Can LGBTQ+ people legally marry in China?",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "Same-sex marriage is not legally recognized in the PRC."
  },
  {
    question: "Is there a government LGBTQ+ committee in the PRC?",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "There is no official LGBTQ+ committee within the Chinese government."
  },
  {
    question: "Can transgender individuals change their legal gender in China without surgery?",
    options: ["Yes", "No"],
    answer: 1,
    explanation: "Legal gender changes require full sex reassignment surgery in China."
  },
  {
    question: "What is a common survival strategy for LGBTQ+ people under family and legal pressure in China?",
    options: ["Leaving the country", "Entering cooperative marriages", "Changing their names", "Moving to small towns"],
    answer: 1,
    explanation: "Cooperative marriages between gay men and lesbian women are often arranged to satisfy societal expectations and family pressure."
  },
  {
    question: "Can LGBTQ+ activists freely organize public Pride events in China?",
    options: ["Yes", "Only in Beijing", "Only with government permission", "No, they risk shutdown or arrest"],
    answer: 3,
    explanation: "Public LGBTQ+ events are often shut down by authorities or never granted permission to begin."
  },
  {
    question: "What legal risk do LGBTQ+ Chinese face when using online platforms for community?",
    options: ["Their profiles are verified by the state", "They are offered legal protection", "They are at risk of surveillance or censorship", "They are banned from using them"],
    answer: 2,
    explanation: "Online LGBTQ+ communities are often targeted by censorship, with keywords, forums, and WeChat groups shut down."
  },
  {
    question: "Why is self-medication with hormones common among trans people in China?",
    options: ["Because it is safer", "Because it is more affordable", "Because doctors are unavailable or require psychiatric approval and parental consent even for adults", "Because hospitals promote it"],
    answer: 2,
    explanation: "Access to medically supervised HRT is limited and often requires psychiatric diagnosis and parental approval, even for adults, pushing many to self-medicate."
  },
  {
    question: "What does it mean to be LGBTQ+ in a system that doesn’t acknowledge your identity?",
    options: ["You are invisible to the law", "You are safe but ignored", "You are protected privately", "You are fully accepted socially"],
    answer: 0,
    explanation: "Without legal recognition or protection, LGBTQ+ individuals in China are rendered invisible in official systems." 
  }
];

let currentQuestion = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "option-button";
    btn.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  const result = document.getElementById("result");
  if (selected === q.answer) {
    result.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
  } else {
    result.innerHTML = `<strong>Incorrect.</strong> ${q.explanation}`;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(showQuestion, 2500);
  } else {
    setTimeout(() => {
      document.getElementById("quiz").innerHTML = `
        <h2>Thank you for learning.</h2>
        <p style='margin-top: 20px; font-size: 1.2em;'>Let us always remember the tens of millions of LGBTQ+ individuals in China who are being actively hidden and ignored. Their existence is real. Their dignity is sacred. They are part of our community. The world must no longer pretend they do not exist. Awareness is resistance. Dignity is truth.</p>
        <p style='margin-top: 30px; font-size: 1em; color: #666;'>Want to make a difference? We are working on turning this game into an app where all income supports trusted underground LGBTQ+ advocacy and medical access initiatives in China. Stay tuned for updates or contact us to collaborate.</p>
      `;
    }, 3000);
  }
}

document.addEventListener("DOMContentLoaded", showQuestion);

// Themed styling remains unchanged
const style = document.createElement('style');
style.innerHTML = `
  body {
    background-color: #f2f2f2;
    font-family: 'Noto Sans SC', sans-serif;
    text-align: center;
    color: #222;
    padding: 40px;
    background-image: linear-gradient(180deg, #ffdecb 0%, #fff1e6 100%);
  }
  h1 {
    color: #b40000;
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }
  #quiz {
    border: 4px solid #b40000;
    border-radius: 8px;
    padding: 20px;
    max-width: 600px;
    margin: auto;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
  .option-button {
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    background-color: #e63946;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .option-button:hover {
    background-color: #b40000;
  }
  #result {
    margin-top: 20px;
    font-size: 1.1em;
  }
`;
document.head.appendChild(style);