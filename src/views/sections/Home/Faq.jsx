import React, { useState } from 'react';

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className="card">
      <div className="heading">
        <button className="toggleButton" onClick={toggleIsOpen}>
          {question}
          <i className={`fa-regular fa-chevron-down ${isOpen ? 'open' : ''}`}></i>
        </button>
      </div>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};



const Faq = () => {
  const faqData = [
    {
      question: 'Is any of my personal information stored in the App?',
      answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
    },
    {
      question: 'What formats can I download my transaction history in?',
      answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
    },
    {
      question: 'Can I Schedule future transfer?',
      answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
    },
    {
      question: 'When can I use Banking App services?',
      answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
    },
    {
      question: 'Can I create my own password that is easy for me to remember?',
      answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
    },
    {
      question: 'What happens if I forget or lose my password?',
      answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.'
    },
  ];

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="information-bottom-left-side">
            <h2>Any questions?<br />Check out the FAQs</h2>
            <p className="get-in-touch">
              Still have unanswered questions and need to get<br />in touch?
            </p>
            <div className="contact-options">
              <div className="have-questions">
                <i className="fa-solid fa-phone-volume"></i>
                <p>Still have questions?</p>
                <a href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
              </div>
              <div className="phone-calls">
                <i className="fa-solid fa-comment-dots"></i>
                <p>Don't like phone calls?</p>
                <a href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="dropdowns">
            {faqData.map((faq, index) => (
              <FaqCard key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
