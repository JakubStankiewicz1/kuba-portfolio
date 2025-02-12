import { motion } from "framer-motion";
import "./contactPage.css";
import profileImage from "./myPhoto.jpg";

import gmailIcon from "./icons8-gmail-500.png";
import pdfIcon from "./pdf-file.png";
import whatsAppIcon from "./icons8-whatsapp-500.png";
import linkedInIcon from "./icons8-linkedin-500.png";
import gitHubIcon from "./icons8-github-512.png";

import Jakub_Stankiewicz_CV from "./cv_pdf.pdf";

const pageVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const ContactPage = () => {
  return (
    <motion.div
      className="page contactPage"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="contactPageContainer">
        <div className="contactPageContainerLeft">
          <p className="contactPageContainerLeftTop">Jakub Stankiewicz</p>
          <p className="contactPageContainerLeftOne">
            Enthusiastic Cybersecurity student with a strong interest in web
            development and modern technologies.
          </p>
          <p className="contactPageContainerLeftOne">
            Passionate about learning, coding, and exploring new challenges in
            the IT world. Always looking to improve my skills and work on
            exciting projects.
          </p>
          <div className="contactInfo">
            <p>Email: stankiewicz.kuba152@gmail.com</p>
            <p>Phone: +48 690 001 083</p>
          </div>
        </div>

        <div className="contactPageContainerRight">
          <img
            src={profileImage}
            alt="Jakub Stankiewicz"
            className="profileImage"
          />

          <div className="buttonsContainer">
            <div className="contactButtons">
              <a
                href="https://github.com/JakubStankiewicz1"
                target="_blank"
                rel="noopener noreferrer"
                className="contactButton"
              >
                <img src={gitHubIcon} alt="GitHub" className="icon" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kuba-stankiewicz-258381300/"
                target="_blank"
                rel="noopener noreferrer"
                className="contactButton"
              >
                <img src={linkedInIcon} alt="LinkedIn" className="icon" />{" "}
                LinkedIn
              </a>
              <a
                href="mailto:stankiewicz.kuba152@gmail.com"
                className="contactButton"
              >
                <img src={gmailIcon} alt="Gmail" className="icon" /> Email Me
              </a>
              <a href="tel:+48690001083" className="contactButton">
                <img src={whatsAppIcon} alt="WhatsApp" className="icon" /> Call
                Me
              </a>
              <a
                href={Jakub_Stankiewicz_CV}
                download
                className="contactButton download"
              >
                <img src={pdfIcon} alt="PDF" className="icon" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
