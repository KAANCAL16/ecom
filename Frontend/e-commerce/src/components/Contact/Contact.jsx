import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.54550133143!2d-80.31186018498568!3d25.78238429268999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20Florida%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1725959148245!5m2!1str!2str"
            width="100%"
            height="500"
            style={{
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Contact with us</h4>
            <h2>Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              laudantium dicta libero sunt. Dolore dolor earum vitae atque ad?
              Corrupti quos aliquam excepturi, ex explicabo distinctio nulla
              fuga est eum. Ratione quidem similique magnam sint quasi
              voluptatem sapiente, reiciendis cum culpa veniam?
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                   Name - Surname
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Email Address
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Title
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Message
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-contact">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
