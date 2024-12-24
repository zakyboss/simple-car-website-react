import React from 'react';

function Footer() {
  return (
    <div>
      <footer>
        <hr />
        <h3>Made With Love by Yours Truly 💗</h3>
        <div className="btns">
          <button>
            <a 
              href="https://github.com/zakyboss" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Github
            </a>
          </button>
          <button>
            <a 
              href="https://instagram.com/grimphsyco" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </button>
          <button>
            <a 
              href="https://www.linkedin.com/in/zakariya-mohamed-774531284" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
