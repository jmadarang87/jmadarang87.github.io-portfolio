import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import submit from '../static/js/script.js';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Contact() {
    React.useEffect( ()=> {
        window.scrollTo(0, 0);
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/contact');
        const items = await data.json();
        setItems(items);
    };    

    return (
        <section>
        <div className="nav-title">
          <h2>CONTACT</h2>
        </div>
        <HelmetProvider>
            <Helmet>
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            </Helmet>
        </HelmetProvider>
        <div className="div">
        {
        items.map((item, i) => (
            <div key={i}>
                <p>{item.name}</p>
            </div>
        ))
        }
        </div>
        <br/>
            <div className="form-container">
            <form className="contact-form">
              <fieldset>         
                <legend className="center">I'd love to hear from you,<br/> leave me a message below! 
        </legend>
                <br/>
            <div className="contact-fields">
                <div className="contact-left">
                        <label htmlFor="name">Your Name:</label>
                        <br/>
                        <input type="text" id="visitorName" name="visitorName" />
                        <br/><br/>
                        <label htmlFor="email">Your Email:</label>
                        <br/>
                        <input type="email" id="visitorEmail" name="visitorEmail" />
                        <br/>                

                    </div>
                    <div className="contact-right">
                        <label form="message">Message:</label>
                        <br/>
                        <textarea id="visitorMessage" name="visitorMessage" />
                    </div>
            </div>
            <div className="button-center">
                <div className="g-recaptcha" data-sitekey="6Lda4gQdAAAAADUmUFJQCmWxPv_XBN58J6NTasgt"></div>
                <button type="submit" onClick={ submit }>Submit</button>

            </div>
            </fieldset> 
            </form>

            <div className="contact-container">
            <a href="mailto:jahnemadarang@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-div contact-email"><FaEnvelope size="2em" /></a>

            <a href="https://linkedin.com/in/jahnelmadarang" target="_blank" rel="noopener noreferrer" className="contact-div contact-linkedin"><FaLinkedin size="2em" /></a>

            <a href="https://github.com/jmadarang87" target="_blank" rel="noopener noreferrer" className="contact-div contact-github"><FaGithub size="2em" /></a>
            
            <a href="https://www.instagram.com/jahnelly.codes/" target="_blank" rel="noopener noreferrer" className="contact-div contact-ig"><FaInstagram size="2em" /></a>
        </div>
        </div>
        </section>
    )
}

export default Contact;