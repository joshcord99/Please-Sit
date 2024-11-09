import "../css/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <p1>Links To Creator</p1>
        <ul className="list">
          <li>
            <a
              href="mailto:joshcord99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://github.com/joshcord99"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github{" "}
            </a>
          </li>
        </ul>
        <p1>Created by Joshua Cordial</p1>
      </footer>
    </>
  );
}

export default Footer;
