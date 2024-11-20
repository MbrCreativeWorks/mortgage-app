// This function is used to scroll to the target section when a link is clicked
const handleLinkClick = (href) => {
    const targetSection = document.querySelector(href);
    if (targetSection) {
      const offset = 80; // Adjust this value to scroll a few pixels above the target to be in the view
      const topPosition =
        targetSection.getBoundingClientRect().top + window.scrollY - offset;
  
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  export default handleLinkClick;