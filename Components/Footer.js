// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/sandhya-c-805289246/"
        target="_blank"
        title="Sandhya's Linkedin Profile"
      >
        Sandhya_C
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Hungry<span>Go</span>
        </strong>
    </div>
  );
};

export default Footer;