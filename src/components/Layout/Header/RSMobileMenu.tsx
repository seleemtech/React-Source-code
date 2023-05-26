import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const RSMobileMenu = (props: any) => {
  const {
    setMenuOpen,
    menuOpen,
    parentMenu,
    headerFullWidth,
  } = props;
  const location = useLocation();

  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [course, setCourse] = useState(false);
  const [pages, setPages] = useState(false);
  const [team, setTeam] = useState(false);
  const [event, setEvent] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [shop, setShop] = useState(false);
  const [otherPages, setOtherPages] = useState(false);
  const [blog, setBlog] = useState(false);
  const [blogSidebar, setBlogSidebar] = useState(false);
  const [blogSingle, setBlogSingle] = useState(false);
  const [contact, setContact] = useState(false);

  const openMobileMenu = (menu: any) => {
    if (menu === "home") {
      setHome(!home);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "about") {
      setHome(false);
      setAbout(!about);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "course") {
      setHome(false);
      setAbout(false);
      setCourse(!course);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "pages") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(!pages);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "team") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(!team);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "event") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(!event);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "gallery") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(!gallery);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "shop") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "otherPages") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(true);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(!otherPages);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "blog") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(!blog);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "blogSidebar") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(true);
      setBlogSidebar(!blogSidebar);
      setBlogSingle(false);
      setContact(false);
    } else if (menu === "blogSingle") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(!blogSingle);
      setContact(false);
    } else if (menu === "contacts") {
      setHome(false);
      setAbout(false);
      setCourse(false);
      setPages(false);
      setTeam(false);
      setEvent(false);
      setGallery(false);
      setShop(false);
      setOtherPages(false);
      setBlog(false);
      setBlogSidebar(false);
      setBlogSingle(false);
      setContact(!contact);
    }
  };
  return (
    <div
      className={
        headerFullWidth ? "container-fluid relative" : "container relative"
      }
    >
      <div className={menuOpen ? "mobile-menu-part open" : "mobile-menu-part"}>
        <div className="mobile-menu">
          <ul className="nav-menu">
           
            <li
              className={
                about
                  ? "menu-item-has-children current-menu-item"
                  : "menu-item-has-children"
              }
            >
              <Link
                to="/Liferay"
                onClick={() => {
                  openMobileMenu("about");
                }}
                className={parentMenu === "about" ? "active-menu" : ""}
              >
                Technologies
              </Link>
              <ul className={about ? "sub-menu current-menu" : "sub-menu"}>
                <li>
                  <Link
                    className={
                      location.pathname === "/Liferay" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/Liferay"
                  >
                    Liferay
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/Java" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/Java"
                  >
                    Java
                  </Link>
                </li>
              
                {/* <li>
                  <Link
                    className={
                      location.pathname === "/BigData" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/BigData"
                  >
                    Big Data
                  </Link>
                </li> */}
                
                <li>
                  <Link
                    className={
                      location.pathname === "/SpringBoot" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/SpringBoot"
                  >
                    Spring Boot
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/MicroServices" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/MicroServices"
                  >
                    Micro Services
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/.Net" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/.Net"
                  >
                    .Net
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/React" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/React"
                  >
                    React
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/Angular" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/Angular"
                  >
                    Angular
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/Android" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/Android"
                  >
                    Android
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className={
                      location.pathname === "/Magento" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/Magento"
                  >
                    Magneto
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/Drupal" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/Drupal"
                  >
                    Drupal
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/Alfresco" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/Alfresco"
                  >
                    Alfresco
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/Joomla" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/Joomla"
                  >
                    Joomla
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/PHP-Framework"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/PHP-Framework"
                  >
                    PHP Framework
                  </Link>
                </li> */}
              </ul>
            </li>
            <li
              className={
                course
                  ? "menu-item-has-children current-menu-item"
                  : "menu-item-has-children"
              }
            >
              <Link
                to="/Portal"
                onClick={() => {
                  openMobileMenu("course");
                }}
                className={parentMenu === "course" ? "active-menu" : ""}
              >
                Solutions
              </Link>
              <ul className={course ? "sub-menu current-menu" : "sub-menu"}>
                <li>
                  <Link
                    to="/Portal"
                    className={
                      location.pathname === "/Portal" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Portal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/CloudComputing"
                    className={
                      location.pathname === "/CloudComputing"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ContentManagement"
                    className={
                      location.pathname === "/ContentManagement"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Content Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/E-commerce"
                    className={
                      location.pathname === "/E-commerce" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Business-Management"
                    className={
                      location.pathname === "/Business-Management"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Business Management
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={
                pages
                  ? "menu-item-has-children current-menu-item"
                  : "menu-item-has-children"
              }
            >
              <Link
                to="/WebPortal"
                onClick={() => {
                  openMobileMenu("pages");
                }}
                className={parentMenu === "/WebPortal" ? "active-menu" : ""}
              >
                Services
              </Link>
              <ul className={pages ? "sub-menu current-menu" : "sub-menu"}>
                <li>
                  <Link
                    className={
                      location.pathname === "/WebPortal" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/WebPortal"
                  >
                    Web Portal DevelopMent
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/WebDesign" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/WebDesign"
                  >
                    Web Designing
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/MobileDevelopment"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/MobileDevelopment"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/CorporateTraining"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/CorporateTraining"
                  >
                    Corporate Training
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className={
                      location.pathname === "/WebHostingServices"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/WebHostingServices"
                  >
                    Web Hosting Services
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      location.pathname === "/OnlineMarketing"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/OnlineMarketing"
                  >
                    Online Marketing
                  </Link>
                </li> */}
                <li>
                  <Link
                    className={
                      location.pathname === "/BusinessConsulting"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    to="/BusinessConsulting"
                  >
                    Business Consulting
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={
                blog
                  ? "menu-item-has-children current-menu-item"
                  : "menu-item-has-children"
              }
            >
              <Link
                to="/Case-Studies"
                onClick={() => {
                  openMobileMenu("blog");
                }}
                className={parentMenu === "/Case-Studies" ? "active-menu" : ""}
              >
                ShowCase
              </Link>
              <ul className={blog ? "sub-menu current-menu" : "sub-menu"}>
                <li>
                  <Link
                    to="/Case-Studies"
                    className={
                      location.pathname === "/Case-Studies" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Clientele"
                    className={
                      location.pathname === "/Clientele" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Clientele
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Brochure"
                    className={
                      location.pathname === "/Brochure" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Brochure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Presentation"
                    className={
                      location.pathname === "/Presentation" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Presentation
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={
                event
                  ? "menu-item-has-children current-menu-item"
                  : "menu-item-has-children"
              }
            >
              <Link
                to="/About-Us"
                onClick={() => {
                  openMobileMenu("event");
                }}
                className={parentMenu === "course" ? "active-menu" : ""}
              >
                About Us
              </Link>
              <ul className={event ? "sub-menu current-menu" : "sub-menu"}>
                <li>
                  <Link
                    to="/About-Us"
                    className={
                      location.pathname === "/About-Us" ? "active-menu" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Outsourcing-Partners"
                    className={
                      location.pathname === "/Outsourcing-Partners"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    OutSourcing Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Marketing-Partners"
                    className={
                      location.pathname === "/Marketing-Partners"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Marketing Partners/Consultants
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Become-A-Partner"
                    className={
                      location.pathname === "/Become-A-Partner"
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Become A Partner
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={
                contact
                  ? "menu-item-has-children current-menu-item"
                  : "menu-item-has-children"
              }
            >
              <Link
                to="/Blogs"
                onClick={() => {
                  openMobileMenu("blogSingle");
                  setMenuOpen(false);
                }}
                className={location.pathname === "/Blogs" ? "active-menu" : "/Blogs"}
              >
                Blogs
              </Link>
            </li>
            <li
              className={
                contact
                  ? "menu-item-has-children current-menu-item"
                  : "menu-item-has-children"
              }
            >
               <a href="https://esquareinfo.zohorecruit.com/careers">Careers</a>
            </li>
            <li
              className={
                contact
                  ? "menu-item-has-children current-menu-item"
                  : "menu-item-has-children"
              }
            >
              <Link
                to="/Contact"
                onClick={() => {
                  openMobileMenu("contact");
                  setMenuOpen(false);
                }}
                className={
                  location.pathname === "/Contact" ? "active-menu" : ""
                }
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RSMobileMenu;
