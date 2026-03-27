import styles from '../styles/components/Footer.module.css';
import { Link } from 'react-router-dom';
import { Kanika_logo, Mail_icon, Facebook, Instagram, Twitter, Basketball, Pinterest } from '../assets/images/icons/icons_export.js';
import { playstore } from '../assets/images/logo/logo_export.js';

export default function Footer() {

  const top_categories = [
    {
      name: "Rings",
      link: '/'
    },
    {
      name: 'Earring',
      link: '/'
    }

  ]
  const information = [
    {
      name: "About",
      link: '/about'
    },
    {
      name: 'Contact Us',
      link: '/contact'
    },
    {
      name: 'Store',
      link: '/shop'
    },

  ]
  const quick_links = [
    {
      name: "My Account",
      link: '/account'
    },
    {
      name: 'Catagories',
      link: '/catagories'
    },
    {
      name: 'Cart',
      link: '/'
    },
    {
      name: 'Wishlist',
      link: '/wishlist'
    },

  ]
  const policies = [
    {
      name: "Terms & Conditions",
      link: '/policy/terms_and_condition'
    },
    {
      name: 'Privacy Policy',
      link: '/policy/privacy_policy'
    },
    {
      name: 'Return Policy',
      link: '/policy/return_policy'
    },
    {
      name: 'Shipping Policy',
      link: '/policy/shipping_policy'
    },

  ]

  const social_medias = [
    {
      name: "Facebook",
      icon: Facebook,
      link: ""
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: ""
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: ""
    },
    {
      name: "Basketball",
      icon: Basketball,
      link: ""
    },
    {
      name: "Pinterest",
      icon: Pinterest,
      link: ""
    },
  ]

  return (
    <footer>
      <div className={styles['container']}>
        <div className={styles['inner-container']}>
          <section className={styles['logo-section']}>
            <div className={styles['logo']}>
              <Link to={'/'}>
                <img src={Kanika_logo} alt='#' />
              </Link>
            </div>
            <div className=''>
              Explore our unique collection of limit editions. Find the streetwear brands you’ve been searching for!
            </div>
            <div className={styles['email']}>
              <div className={styles['mail-logo']}>
                <img src={Mail_icon} alt='#' width={'17px'} />
              </div>
              <div>
                <h3>Email</h3>
                <p>info@kanikadiamonds.com.au</p>
              </div>
            </div>
          </section>
          <section className={styles['redirect-pages']}>
            <div>
              <section className={styles['top-categories']}>
                <h3>Top category</h3>
                <ul>
                  {top_categories.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
              <section className={styles['information']}>
                <h3>Information</h3>
                <ul>
                  {information.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
              <section className={styles['quick-link']}>
                <h3>Quick Links</h3>
                <ul>
                  {quick_links.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
              <section className={styles['policies']}>
                <h3>Policies</h3>
                <ul>
                  {policies.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <div className={styles['social-links']}>
              <div className={styles['playstore']}>
                <p>Download app:</p>
                <img src={playstore} alt='' />
              </div>
              <div className={styles['social-media']}>
                <p>Follow Us: </p>
                <div>
                  {social_medias.map((item, index) => (
                    <Link to={item.link} key={index}>
                      <img src={item.icon} alt='#' />
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        © 2026 <span>Kanika Diamonds & Decor</span> . All Rights Reserved.
      </div>
    </footer>
  )
}