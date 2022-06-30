import './footer.styles.css';

const Footer = () => {
  return (
    <div className="footer">
      <div class="column left">
        <p>Home</p>
        <p>About</p>
        <p>Portfolio</p>
      </div>
      <div class="column middle">
        <p>Industries</p>
        <p>References</p>
        <p>Partnerships</p>
      </div>
      <div class="column right">
        <p>Careers</p>
        <p>Locations</p>
        <p>imprint</p>
      </div>
      <p>@2021 NETCONOMY</p>
    </div>
  );
};

export default Footer;
