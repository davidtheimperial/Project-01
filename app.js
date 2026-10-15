const lessons = [
  {
    id: "html-1",
    category: "HTML BASICS",
    language: "html",
    time: 5,
    title: "Your first<br><span>webpage.</span>",
    lead: "Every website starts with a blank page and a little bit of curiosity. Let’s make your very first one.",
    explanation: "<p><strong>HTML</strong> is the building blocks of a webpage. It tells your browser what each thing is: a heading, a paragraph, a picture, a link.</p><p>You write little instructions called <strong>tags</strong>. A tag goes around some content and tells the browser what to do with it.</p>",
    analogy: "<strong>Think of it like this:</strong> HTML is the frame of a house. Before you choose paint or furniture, you need the walls and rooms.",
    exampleDescription: "This is a real little webpage. Press “Run code” to see what the browser makes of it.",
    file: "index.html",
    code: `<h1>Hello, world!</h1>
<p>I made my first webpage.</p>
<button>Say hello</button>`,
    challenge: "Change the heading to your name, then press Run code. You just made your first edit!",
    question: "What does HTML do?",
    options: ["It gives a webpage its structure", "It picks the music on a webpage", "It connects your computer to Wi-Fi"],
    answer: 0,
    feedback: "Exactly! HTML gives a webpage its structure. Nicely done.",
    retry: "Not quite, and that’s okay! HTML gives a webpage its structure. Have another go.",
    tip: "Try changing one thing at a time, then press Run code to see what changed.",
    word: "HTML",
    definition: "The building blocks that tell a browser what’s on a webpage."
  },
  {
    id: "html-2",
    category: "HTML BASICS",
    language: "html",
    time: 6,
    title: "Words &amp;<br><span>links.</span>",
    lead: "Now let’s give your page a little more to say. Headings, paragraphs, and links make a page useful and easy to read.",
    explanation: "<p>HTML has tags for lots of different kinds of content. Use <strong>&lt;h1&gt;</strong> for the main heading, <strong>&lt;p&gt;</strong> for a paragraph, and <strong>&lt;a&gt;</strong> to make a link.</p><p>Most tags come in pairs: an opening tag and a closing tag with a slash, like <strong>&lt;p&gt;words go here&lt;/p&gt;</strong>.</p>",
    analogy: "<strong>Think of it like this:</strong> Tags are labels on boxes. They tell the browser what’s inside and how important it is.",
    exampleDescription: "A link needs an address too. The href part tells it where to go.",
    file: "my-page.html",
    code: `<h1>My little corner</h1>
<p>Some things I like:</p>
<a href="https://example.com">A friendly link</a>`,
    challenge: "Add another paragraph using <p> and </p>. What would you like to tell the world?",
    question: "Which HTML tag makes a clickable link?",
    options: ["<h1>", "<a>", "<p>"],
    answer: 1,
    feedback: "That’s right! The <a> tag makes a link. You’re getting the hang of this.",
    retry: "Almost! The <a> tag makes a clickable link. Give it another try.",
    tip: "HTML tags often come in pairs: an opening tag and a closing tag with a slash.",
    word: "Tag",
    definition: "A small HTML instruction, written between angle brackets, that labels some content."
  },
  {
    id: "html-3",
    category: "HTML BASICS",
    language: "html",
    time: 6,
    title: "Pictures &amp;<br><span>lists.</span>",
    lead: "A picture can tell a story, and a list can make ideas easier to follow. Let’s add both to your page.",
    explanation: "<p>The <strong>&lt;img&gt;</strong> tag puts a picture on a page. It uses <strong>src</strong> to find the picture and <strong>alt</strong> to describe it for people who can’t see it.</p><p>For a list, put each item inside <strong>&lt;li&gt;</strong> tags. Wrap the items in <strong>&lt;ul&gt;</strong> for a bulleted list.</p>",
    analogy: "<strong>Think of it like this:</strong> The src is the picture’s address, alt is its helpful caption, and list tags are the bullet points on your shopping list.",
    exampleDescription: "This page has a picture with a text description and a short list. Try changing a list item.",
    file: "my-page.html",
    code: `<h1>A place I love</h1>
<img src="https://placehold.co/320x120/f1eadb/5c704d?text=A+happy+place"
  alt="A little illustration of a happy place">
<h2>It has:</h2>
<ul>
  <li>Fresh air</li>
  <li>Good company</li>
</ul>`,
    challenge: "Add another <li> item to the list. A good list needs its opening and closing tags!",
    question: "What does the alt attribute do on an image?",
    options: ["Describes the image in text", "Changes the image size", "Adds a new list item"],
    answer: 0,
    feedback: "Exactly! Alt text describes an image for people who can’t see it.",
    retry: "Not quite. Alt text gives a written description of the image.",
    tip: "Write alt text that describes what matters in the picture, not just “image.”",
    word: "Alt text",
    definition: "A written image description that helps people using screen readers."
  },
  {
    id: "css-1",
    category: "CSS BASICS",
    language: "css",
    time: 7,
    title: "Dress up<br><span>your page.</span>",
    lead: "Your page has a shape. Now give it a little personality. CSS changes how things look: colors, fonts, and more.",
    explanation: "<p><strong>CSS</strong> is how you style a webpage. You write a rule that names something on the page, then describe how you’d like it to look.</p><p>For example, <strong>color: tomato;</strong> changes the text color. The word before the curly braces is the thing you’re styling.</p>",
    analogy: "<strong>Think of it like this:</strong> If HTML builds the house, CSS is the paint, wallpaper, and cozy cushions.",
    exampleDescription: "This little style rule turns the heading green. Try changing the color to any color you like!",
    file: "style.css",
    code: `<style>
  h1 {
    color: seagreen;
    font-family: sans-serif;
  }
</style>
<h1>A fresh new look</h1>
<p>Colors make things feel different.</p>`,
    challenge: "Try changing seagreen to coral, royalblue, or a color you know!",
    question: "What do we use CSS for?",
    options: ["Styling how a webpage looks", "Storing photos on your phone", "Writing an email"],
    answer: 0,
    feedback: "You got it! CSS is for styling how a webpage looks.",
    retry: "Have another try! CSS is the part that controls the look and feel.",
    tip: "CSS color names like coral work too, so you don’t need to memorize color codes.",
    word: "CSS",
    definition: "The styling language that makes a webpage look the way you want."
  },
  {
    id: "css-2",
    category: "CSS BASICS",
    language: "css",
    time: 6,
    title: "Give it<br /><span>some space.</span>",
    lead: "A little breathing room goes a long way. With CSS, you can move things around and make a page feel just right.",
    explanation: "<p>CSS can control more than colors. <strong>margin</strong> adds space outside an element; <strong>padding</strong> adds space inside it. You can also round corners and set sizes.</p><p>Try adjusting one number at a time. You’ll see exactly what each change does.</p>",
    analogy: "<strong>Think of it like this:</strong> Padding is the fluffy filling inside a cushion. Margin is the little gap between that cushion and the next one.",
    exampleDescription: "The card below has some padding and rounded corners. Tweak the numbers and see what changes.",
    file: "style.css",
    code: `<style>
  .card {
    padding: 24px;
    margin: 16px;
    border-radius: 14px;
    background: #e8f1e5;
  }
</style>
<div class="card">
  <h2>A comfy card</h2>
  <p>Give me a little room to breathe.</p>
</div>`,
    challenge: "Change the padding to 40px. Does your card feel roomier?",
    question: "Which CSS property adds space inside an element?",
    options: ["margin", "padding", "color"],
    answer: 1,
    feedback: "Correct! Padding is the space inside an element.",
    retry: "Not quite. Padding makes space inside; margin makes space outside.",
    tip: "Change one spacing number at a time so you can spot exactly what it does.",
    word: "Padding",
    definition: "The space between an element’s content and its border."
  },
  {
    id: "css-3",
    category: "CSS BASICS",
    language: "css",
    time: 7,
    title: "Put things<br><span>in a row.</span>",
    lead: "Want a few things to sit side by side? Flexbox is a friendly way to line things up and leave a little space between them.",
    explanation: "<p>When you set <strong>display: flex</strong> on a container, its children line up in a row by default. Add <strong>gap</strong> to give them some breathing room.</p><p>The container controls the layout. You can still style each item separately, too.</p>",
    analogy: "<strong>Think of it like this:</strong> Flexbox is like asking a few friends to stand in a line and leave a little elbow room.",
    exampleDescription: "The three cards are children of one flex container. Try changing the gap or the background color.",
    file: "style.css",
    code: `<style>
  .row {
    display: flex;
    gap: 12px;
  }
  .card {
    padding: 18px;
    border-radius: 10px;
    background: #e8f1e5;
  }
</style>
<div class="row">
  <div class="card">One</div>
  <div class="card">Two</div>
  <div class="card">Three</div>
</div>`,
    challenge: "Change gap from 12px to 24px. The cards will get more elbow room!",
    question: "What does display: flex do by default?",
    options: ["Lines child items up in a row", "Hides all the items", "Changes text into a picture"],
    answer: 0,
    feedback: "That’s right! Flexbox lines up the children in a row by default.",
    retry: "Try again! Flexbox makes it easier to line child items up in a row.",
    tip: "Put display: flex on the parent container, not on each individual card.",
    word: "Flexbox",
    definition: "A CSS layout tool for arranging items in a row or column."
  },
  {
    id: "js-1",
    category: "JAVASCRIPT BASICS",
    language: "js",
    time: 7,
    title: "A little<br /><span>JavaScript.</span>",
    lead: "Want your page to do something? JavaScript makes a webpage interactive. Let’s start with one tiny instruction.",
    explanation: "<p><strong>JavaScript</strong> is a programming language that makes webpages respond and change. You can ask it to do things in order, just like following a recipe.</p><p>For instance, <strong>textContent</strong> lets JavaScript change the words on your page. The browser follows your instruction as soon as it reads it.</p>",
    analogy: "<strong>Think of it like this:</strong> HTML builds a toy, CSS paints it, and JavaScript gives it a wind-up key so it can move.",
    exampleDescription: "The script finds the sentence and swaps it for a new one. Press Run code to see the change.",
    file: "script.js",
    code: `<p id="message">I am learning to code.</p>
<script>
  document.getElementById("message").textContent =
    "Look! JavaScript changed this sentence.";
<\/script>`,
    challenge: "Change the new sentence inside the quote marks. What would you like your page to say?",
    question: "What can JavaScript help a webpage do?",
    options: ["Respond to things and change", "Make paper airplanes", "Charge your laptop"],
    answer: 0,
    feedback: "Exactly! JavaScript helps webpages respond and change.",
    retry: "Try once more! JavaScript helps webpages respond to people and do things.",
    tip: "Text inside quotation marks is a string. Change just the words to personalize your message.",
    word: "JavaScript",
    definition: "The programming language that makes a webpage interactive."
  },
  {
    id: "js-2",
    category: "JAVASCRIPT BASICS",
    language: "js",
    time: 7,
    title: "Listen &amp;<br /><span>respond.</span>",
    lead: "Webpages can listen, too. Let’s make a button that reacts when somebody clicks it.",
    explanation: "<p>Your browser can listen for things a visitor does. A <strong>click event</strong> happens when someone clicks a button; JavaScript can respond right away.</p><p>We tell JavaScript which button to listen to, then what to do when the click happens. Here, it changes a message on the page.</p>",
    analogy: "<strong>Think of it like this:</strong> A button is a doorbell. JavaScript listens for the ring and decides what happens next.",
    exampleDescription: "Click the little button in the preview. You just made an interactive webpage!",
    file: "script.js",
    code: `<button id="hello-button">Say hello</button>
<p id="message">I’m listening…</p>
<script>
  document.getElementById("hello-button")
    .addEventListener("click", function () {
      document.getElementById("message").textContent =
        "Hello, wonderful human!";
    });
<\/script>`,
    challenge: "Change “Hello, wonderful human!” to a message of your own. Then click the button!",
    question: "What happens when a click event listener is added to a button?",
    options: ["The button can react when someone clicks it", "The button becomes a picture", "The page closes"],
    answer: 0,
    feedback: "That’s it! The listener lets the button react to a click.",
    retry: "Not quite. A click listener waits for someone to click, then responds.",
    tip: "Check that the button ID in your code exactly matches its id attribute in the HTML.",
    word: "Event",
    definition: "Something that happens on a page, like a click, that JavaScript can respond to."
  },
  {
    id: "js-3",
    category: "JAVASCRIPT BASICS",
    language: "js",
    time: 7,
    title: "Save a<br><span>value.</span>",
    lead: "Programs often need to remember a piece of information. A variable is a named place to keep a value you might want to use again.",
    explanation: "<p>Use <strong>const</strong> to give a value a name. This value can be text, a number, or other information. The name helps you find and reuse it later.</p><p>Text goes between quotation marks. You can join text and a variable with a plus sign to make a message.</p>",
    analogy: "<strong>Think of it like this:</strong> A variable is a labeled jar. The label helps you remember what you put inside.",
    exampleDescription: "The name variable stores some text. Change the name, then run the code to update the greeting.",
    file: "script.js",
    code: `<p id="greeting"></p>
<script>
  const name = "friend";
  document.getElementById("greeting").textContent =
    "Hello, " + name + "!";
<\/script>`,
    challenge: "Change friend to your name inside the quotes, then press Run code.",
    question: "What does a variable help your program do?",
    options: ["Remember and reuse a value", "Change the computer’s volume", "Make the page load faster"],
    answer: 0,
    feedback: "You got it! A variable gives a value a name so you can use it again.",
    retry: "Almost! A variable gives information a name so your program can remember and reuse it.",
    tip: "Use a clear name like firstName so it’s easy to remember what your variable stores.",
    word: "Variable",
    definition: "A named place in your code to store a value."
  }
];

const storageKey = "little-web-school-progress";
const encouragements = [
  "You’re learning something new, and that’s already something to be proud of.",
  "There’s no perfect pace. Every little step counts.",
  "Curiosity is a superpower. Keep following it.",
  "Mistakes are clues. They help you figure out what to try next.",
  "You don’t need to memorize everything. Practice will help it stick.",
  "Look at you, making a webpage do things!"
];
const lessonLinks = [...document.querySelectorAll(".lesson-link")];
const editor = document.querySelector("#code-editor");
const preview = document.querySelector("#preview-frame");
const completedLessons = new Set();
let activeLesson = lessons[0];
let answeredCorrectly = false;
let encouragementIndex = 0;

try {
  const savedProgress = JSON.parse(localStorage.getItem(storageKey) || "[]");
  if (Array.isArray(savedProgress)) {
    for (const lessonId of savedProgress) {
      if (lessons.some((lesson) => lesson.id === lessonId)) completedLessons.add(lessonId);
    }
  }
} catch (error) {
  console.error("Could not load saved lesson progress.", error);
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...completedLessons]));
  } catch (error) {
    console.error("Could not save lesson progress.", error);
  }
}

function updateProgress() {
  const count = completedLessons.size;
  document.querySelector("#progress-label").textContent = `${count} of ${lessons.length}`;
  document.querySelector("#progress-track").setAttribute("aria-valuemax", String(lessons.length));
  document.querySelector("#progress-track").setAttribute("aria-valuenow", String(count));
  document.querySelector("#progress-fill").style.width = `${(count / lessons.length) * 100}%`;

  for (const link of lessonLinks) {
    const lessonId = link.dataset.lesson;
    const isComplete = completedLessons.has(lessonId);
    link.classList.toggle("is-complete", isComplete);
    link.querySelector(`[data-status="${lessonId}"]`).textContent = isComplete
      ? "✓"
      : String(lessons.findIndex((lesson) => lesson.id === lessonId) + 1).padStart(2, "0");
  }

  const isComplete = completedLessons.has(activeLesson.id);
  const doneButton = document.querySelector("#mark-done-button");
  doneButton.classList.toggle("is-complete", isComplete);
  doneButton.disabled = isComplete;
  document.querySelector("#done-button-label").textContent = isComplete
    ? "Completed — nice work!"
    : "Mark as complete";
  document.querySelector("#completion-note").textContent =
    count === lessons.length ? `You finished all ${lessons.length} lessons. Look at you go!` : "";
}

function updateLineNumbers() {
  const lineCount = editor.value.split("\n").length;
  document.querySelector("#line-numbers").textContent = Array.from(
    { length: lineCount },
    (_, index) => index + 1
  ).join("\n");
}

function closeMobileMenu() {
  document.querySelector("#sidebar").classList.remove("is-open");
  document.querySelector("#mobile-overlay").classList.remove("is-visible");
  document.querySelector("#mobile-overlay").setAttribute("aria-hidden", "true");
  document.querySelector("#mobile-menu").setAttribute("aria-expanded", "false");
}

function renderLesson(lessonId) {
  activeLesson = lessons.find((lesson) => lesson.id === lessonId) || lessons[0];
  answeredCorrectly = false;

  for (const link of lessonLinks) {
    const isActive = link.dataset.lesson === activeLesson.id;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "step");
    else link.removeAttribute("aria-current");
  }

  document.querySelector("#breadcrumb-title").textContent =
    activeLesson.language === "js" ? "MAKE IT DO THINGS"
      : activeLesson.language === "css" ? "MAKE IT PRETTY" : "THE BASICS";
  document.querySelector("#lesson-tag").textContent = activeLesson.category;
  document.querySelector("#lesson-tag").className = `tag tag-${activeLesson.language}`;
  document.querySelector("#lesson-time").innerHTML = `◷ &nbsp; ${activeLesson.time} min`;
  document.querySelector("#lesson-title").innerHTML = activeLesson.title;
  document.querySelector("#lesson-lead").textContent = activeLesson.lead;
  document.querySelector("#lesson-explanation").innerHTML = activeLesson.explanation;
  document.querySelector("#lesson-analogy").innerHTML = activeLesson.analogy;
  document.querySelector("#example-description").textContent = activeLesson.exampleDescription;
  document.querySelector("#file-tab").textContent = activeLesson.file;
  editor.value = activeLesson.code;
  document.querySelector("#challenge-text").textContent = activeLesson.challenge;
  document.querySelector("#quiz-question").textContent = activeLesson.question;
  document.querySelector("#glossary-word").textContent = activeLesson.word;
  document.querySelector("#glossary-definition").textContent = activeLesson.definition;
  document.querySelector("#encouragement-message").textContent =
    encouragements[encouragementIndex % encouragements.length];
  document.querySelector("#lesson-tip").textContent = activeLesson.tip;
  document.querySelector("#welcome-card").hidden = activeLesson.id !== "html-1";
  document.querySelector("#quiz-feedback").textContent = "";
  document.querySelector("#quiz-feedback").classList.remove("is-wrong");
  document.querySelector("#next-lesson-button").disabled =
    lessons.findIndex((lesson) => lesson.id === activeLesson.id) === lessons.length - 1;

  const options = document.querySelector("#quiz-options");
  options.replaceChildren();
  activeLesson.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.setAttribute("aria-pressed", "false");
    const letter = document.createElement("span");
    letter.className = "quiz-option-letter";
    letter.textContent = String.fromCharCode(65 + index);
    button.append(letter, document.createTextNode(option));
    button.addEventListener("click", () => answerQuiz(button, index));
    options.append(button);
  });

  updateLineNumbers();
  updateProgress();
  runCode();
  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function answerQuiz(selectedButton, selectedIndex) {
  if (answeredCorrectly) return;

  const feedback = document.querySelector("#quiz-feedback");
  const buttons = [...document.querySelectorAll(".quiz-option")];
  buttons.forEach((button) => {
    button.classList.remove("is-incorrect");
    button.setAttribute("aria-pressed", String(button === selectedButton));
  });

  if (selectedIndex === activeLesson.answer) {
    answeredCorrectly = true;
    selectedButton.classList.add("is-correct");
    buttons.forEach((button) => { button.disabled = true; });
    feedback.textContent = activeLesson.feedback;
    feedback.classList.remove("is-wrong");
  } else {
    selectedButton.classList.add("is-incorrect");
    feedback.textContent = activeLesson.retry;
    feedback.classList.add("is-wrong");
  }
}

function runCode() {
  preview.srcdoc = editor.value;
  document.querySelector("#preview-status").textContent = "PREVIEW UPDATED";
}

lessonLinks.forEach((link) => {
  link.addEventListener("click", () => renderLesson(link.dataset.lesson));
});

document.querySelector("#run-button").addEventListener("click", runCode);
editor.addEventListener("input", updateLineNumbers);
editor.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.setRangeText("  ", start, end, "end");
    updateLineNumbers();
  }
});

document.querySelector("#mark-done-button").addEventListener("click", () => {
  completedLessons.add(activeLesson.id);
  saveProgress();
  updateProgress();
});

document.querySelector("#another-encouragement").addEventListener("click", () => {
  encouragementIndex = (encouragementIndex + 1) % encouragements.length;
  document.querySelector("#encouragement-message").textContent =
    encouragements[encouragementIndex];
});

document.querySelector("#next-lesson-button").addEventListener("click", () => {
  const nextIndex = lessons.findIndex((lesson) => lesson.id === activeLesson.id) + 1;
  if (nextIndex < lessons.length) renderLesson(lessons[nextIndex].id);
});

document.querySelector("#mobile-menu").addEventListener("click", (event) => {
  const isOpen = document.querySelector("#sidebar").classList.toggle("is-open");
  document.querySelector("#mobile-overlay").classList.toggle("is-visible", isOpen);
  document.querySelector("#mobile-overlay").setAttribute("aria-hidden", String(!isOpen));
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});

document.querySelector("#mobile-overlay").addEventListener("click", closeMobileMenu);
renderLesson(activeLesson.id);
