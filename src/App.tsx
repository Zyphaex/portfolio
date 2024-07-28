import "./App.css";

function App() {
  return (
    <>
      <main>
        <h1>Sam Hillier</h1>
        <h2>Full Stack Developer</h2>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <section>
          <p>
            I'm a Computer Science graduate from Nottingham Trent University, a
            Full-Stack Web Developer and Software Engineer with a proven record
            of academic and project success.
            <br />
            If you're interested in working with me or have a question, please
            feel free to get in touch.
          </p>
        </section>
      </main>
      <footer>
        <section>
          <a
            href="https://github.com/Zyphaex"
            target="_blank"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/samhillier"
            target="_blank"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a href="https://x.com/Zyphaex" target="_blank" aria-label="X">
            X
          </a>
          <a
            href="https://instagram.com/Zyphaex"
            target="_blank"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </section>
        <section>
          <iframe
            src="https://github.com/sponsors/Zyphaex/button"
            id="sponsor"
            title="GitHub Sponsor"
            height="32"
            width="114"
            style={{ border: 0, borderRadius: "6px" }}
          ></iframe>
        </section>
        <section>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <p>© 2024 Sam Hillier. All Rights Reserved.</p>
        </section>
      </footer>
    </>
  );
}

export default App;
