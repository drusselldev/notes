function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ Dave Russell {year}</p>
    </footer>
  );
}

export default Footer;
