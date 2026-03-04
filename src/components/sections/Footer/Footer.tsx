import './Footer.css';

const Footer = () => {
  const footerColumns = [
    {
      title: 'Shop',
      links: [
        { label: 'New Arrivals', href: '#' },
        { label: 'Clothing', href: '#' },
        { label: 'Accessories', href: '#' },
        { label: 'Shoes', href: '#' },
        { label: 'Sale', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Story', href: '#' },
        { label: 'Sustainability', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Stores', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '#' },
        { label: 'Shipping Info', href: '#' },
        { label: 'Returns', href: '#' },
        { label: 'Size Guide', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: '+33 1 42 86 87 88', href: 'tel:+33142868788' },
        { label: 'hello@maisonelite.com', href: 'mailto:hello@maisonelite.com' },
        { label: '12 Rue du Faubourg', href: '#' },
        { label: 'Saint-Honoré, Paris', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { label: 'IN', href: '#' },
    { label: 'FB', href: '#' },
    { label: 'TW', href: '#' },
    { label: 'PT', href: '#' },
  ];

  const paymentMethods = ['VISA', 'MC', 'AMEX', 'PP'];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Settings', href: '#' },
  ];

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <span className="logo serif">MAISON ÉLITE</span>
          <p className="footer-desc">
            Curating timeless elegance for the modern woman. Where exceptional
            craftsmanship meets contemporary design.
          </p>
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="social-link">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="footer-column">
            <h4>{column.title}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2024 MAISON ÉLITE. ALL RIGHTS RESERVED.
        </div>

        <div className="footer-payments">
          {paymentMethods.map((method) => (
            <div key={method} className="payment-icon">
              {method}
            </div>
          ))}
        </div>

        <div className="footer-legal">
          {legalLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
