import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import SiteBreadcrumb from "../../BreadCumb/SiteBreadcrumb";
import SidePostBar from "./sidePostBar";
import SinglePostSix from "./SinglePostSix";
const cardItems = [
  {
    src: "/blog1.jpeg",
    title: "LIFERAY SSO INTEGRATION",
    desc: "Single sign-on (SSO) is a property of access control of multiple related, but independent software systems. With this property a user logs in once ...",
    link: "/blog1",
  },
  {
    src: "/blog2.jpeg",
    title: "OPEN LDAP ON UBUNTU",
    desc: "Step 1: Open terminal: Step 2: abc@abc-laptop :-$ sudo –s [sudo] password for abc: Step 3: root@abc-laptop:-$ apt-get install ...",
    link: "",
  },
  {
    src: "/blog3.jpeg",
    title: "WHY LIFERAY IS THE NEXT BEST THING IN WEB PORTAL DEVELOPMENT",
    desc: "Liferay is an online platform that will allow your website development company to engineer flexible, robust and intuitive websites for ...",
    link: "",
  },
  {
    src: "/blog4.jpeg",
    title: "MULTI-COLOUR THEMES",
    desc: "In Liferay 6.1 Quick note is an Default Portlet is there from That Portlet Three buttons are placed on Top right corner of the portlet, in that ...",
    link: "",
  },
  {
    src: "/blog5.jpeg",
    title: "HOW TO HIRE THE BEST FOR YOUR WEB PORTAL DEVELOPMENT",
    desc: "In the modern business market, keeping up with the competitive atmosphere is a true challenge. To make the most of the business ...",
    link: "",
  },
  {
    src: "/blog6.jpeg",
    title: "LIFERAY A MODERN WEB DEVELOPMENT TECHNOLOGY WITH GREAT FEATURES",
    desc: "Business needs a good advertisement and promotion along with a perfect website. A website is like an informational online brochure ...",
    link: "",
  },
  {
    src: "/blog7.jpeg",
    title: "LIFERAY - THE OPEN SOURCE WEB PORTAL FRAMEWORK",
    desc: "Liferay is a software-based private company whose first product was Liferay Portal created in the year 2000. Liferay is a company which provides ...",
    link: "",
  },
  {
    src: "/blog8.jpeg",
    title: "BENEFITS OF PROFESSIONAL WEB AND ANDROID DEVELOPMENT FOR BUSINESS",
    desc: "Professionals help is very necessary for businesses to prosper. This professional help is required in making proper websites and mobile apps ...",
    link: "",
  },
  {
    src: "/blog9.jpeg",
    title: "HOW CAN MOBILE APP BENEFIT YOUR E-COMMERCE STORE?",
    desc: "Single sign-on (SSO) is a property of access control of multiple related, but independent software systems. With this property a user logs in once ...",
    link: "",
  },
  {
    src: "/blog10.jpeg",
    title: "WHY DEVELOPING A MOBILE APP FOR HOSPITAL CAN BE BENEFICIAL?",
    desc: "With the rapid progression in technology, the medical world has also moved ahead. The diseases which had no cure back 15 years, now have ...",
    link: "",
  },
  {
    src: "/blog11.jpeg",
    title:
      "WHY LIFERAY IS THE BEST TOOL FOR WEBSITE AND MOBILE APP DEVELOPMENT?",
    desc: "Liferay Consulting is an open-source company that provides enterprise software development platform for your website development ...",
    link: "",
  },
  {
    src: "/blog12.jpeg",
    title: "TRENDS THAT ARE TAKING ROUNDS IN MOBILE APP DEVELOPMENT",
    desc: "The invention of the mobile phone was a huge technical achievement for the human race. This is the device that ensured that communication ...",
    link: "",
  },
  {
    src: "/blog13.jpeg",
    title:
      "6 WAYS A PROFESSIONAL WEB PORTAL DESIGN COMPANY CAN BRING YOU MORE CUSTOMERS",
    desc: "For any business or a company, the clients stand as the backbone. If there is no customer then there won’t be anyone to serve and when there ...",
    link: "",
  },
  {
    src: "/blog14.jpeg",
    title: "WHY YOU SHOULD USE LIFERAY FOR WEB AND APP DEVELOPMENT",
    desc: "Liferay provides you with a very flexible and robust platform to develop your website quickly and serve it to your potential clients ...",
    link: "",
  },
  {
    src: "/blog15.jpeg",
    title: "WHY YOUR BUSINESS WOULD REAP PROFITS WITH MOBILE APP DEVELOPMENT?",
    desc: "Now almost every 7 out of 10 people use a smartphone and they depend a lot on the various apps. These mobile applications are good as ...",
    link: "",
  },
  {
    src: "/blog16.jpeg",
    title: "WHY USE MOBILE APPS OVER RESPONSIVE E-COMMERCE WEBSITES?",
    desc: "A few years earlier, E-commerce was a budding platform where you can buy and sell your products on a virtual platform where you can buy ...",
    link: "",
  },
  {
    src: "/blog17.jpeg",
    title: "BENEFITS OF LIFERAY DEVELOPMENT & LIFERAY MIGRATION",
    desc: "Liferay has set its main focus on the developers and for that, this platform has been rebuilt for a couple of time. Liferay Development Company ...",
    link: "",
  },
  {
    src: "/blog18.jpeg",
    title: "LIFERAY ONE-STOP SOLUTION FOR ALL KIND OF WEB PORTAL DEVELOPMENT",
    desc: "Be it a Website Development or mobile app development, any types of solutions are available at Liferay ...",
    link: "",
  },
  {
    src: "/blog19.jpeg",
    title:
      "POINTS TO NOTE WHILE PICKING THE RIGHT WEB PORTAL DEVELOPMENT COMPANY",
    desc: "Creativity, management, and advertisement skills can redefine your business structure. For that, you will need a proper firm to look after all such ...",
    link: "",
  },
  {
    src: "/blog20.jpeg",
    title: "TIPS FOR CHOOSING THE RIGHT DEVELOPMENT COMPANY FOR YOUR NEEDS",
    desc: "You should make sure that you are finding the right business of experts who can help you with everything that you need done like ...",
    link: "",
  },
  {
    src: "/blog21.jpeg",
    title: "QUESTIONS TO ASK A WEB DESIGN COMPANY WHILE YOU HIRE",
    desc: "This is the age of the internet big time! The e-commerce and the M-commerce are driven by the smart phones of the current times ...",
    link: "",
  },
  {
    src: "/blog22.jpeg",
    title: "WHAT IS LIFERAY TECHNOLOGY ALL ABOUT?",
    desc: "The Internet is a worldwide system of interconnected computer networks to link devices worldwide. It was started by US army ...",
    link: "",
  },
  {
    src: "/blog23.jpeg",
    title: "MOST COMMON LIFERAY FEATURES OFFERINGS BY EXPERTS",
    desc: "You would want to ensure that you are aware of the most common offerings by the liferay experts so that you can consider what they can help ...",
    link: "",
  },
  {
    src: "/blog24.jpeg",
    title: "3 REASONS WHY YOU SHOULD CHOOSE LIFERAY FOR WEB PORTAL DEVELOPMENT",
    desc: "It supports all the languages such as Java, C++, PHP, .NET and lets you customize your website according to the needs of the business ...",
    link: "",
  },
  {
    src: "/blog25.jpeg",
    title: "TIPS FOR PICKING THE RIGHT LIFERAY CONSULTING COMPANY",
    desc: "When it comes to your business you want to ensure that you are choosing the right experts to help you with all of your Liferay related ...",
    link: "",
  },
  {
    src: "/blog26.jpeg",
    title: "WHY CHOOSE LIFERAY?",
    desc: "Liferay is one of the most renowned and leading enterprise portal, that too an open source portal. Also, it has secured a large ...",
    link: "",
  },
  {
    src: "/blog27.jpeg",
    title: "HOOK - CUSTOMIZING LOGIN",
    desc: "What is Hooks.? Hooks, allow overriding the portal core functionality. Hooks is a feature to catch hold of the properties ...",
    link: "",
  },
  {
    src: "/blog28.jpeg",
    title: "INTER PORTLET COMMUNICATION",
    desc: "Liferay Inter Portlet Communication (IPC) is mechanism to communicating one Portlet to other Portlet. JSR 168/ Portlet 1.0 have very limited ...",
    link: "",
  },
];

const DisplayNone = {
  display: "none",
};
const Blogs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const NormalCardData = cardItems.map((item: any, i: any) => {
    return (
      <div className="col-lg-12 mb-30 md-mb-20" key={i}>
        <SinglePostSix
          blogImage={item.src}
          blogTitle={item.title}
          blogDesc={item.desc}
          blogButtonClass="blog-button"
          blogButtonText="Continue Reading"
          linkPage={item.link}
        />
      </div>
    );
  });

  return (
    <React.Fragment>

      <SiteBreadcrumb
        pageTitle={
          <>
            <span>Blogs</span>
          </>
        }
        displayNone={DisplayNone}
        breadcrumbsImg="/blogmain.jpeg"
      />

      <div className="rs-blog-inner-pages orange-style pt-100 pb-100 md-pt-70 md-pb-80">
      <Helmet>
        <title>Blogs</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest industry insights and trends by exploring our blogs."
        />
         <link rel="canonical" href="http://esquareinfo.com/Blogs"/>
      </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 order-last">
              <div className="widget-area">
                <SidePostBar />
              </div>
            </div>

            <div className="col-lg-8 pr-50 md-pr-16">
              <div className="row">
                {/* <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage="/blog1.jpeg"
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='University while the lovely valley team work'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage="/blog1.jpeg"
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='High school program starting soon 2021'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage="/blog1.jpeg"
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='Modern School the lovely valley team work'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage="/blog1.jpeg"
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='While the lovely valley team work'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage="/blog1.jpeg"
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='This is a great source of content for anyone…'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage="/blog1.jpeg"
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='While the lovely valley team work'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage="/blog1.jpeg"
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='The Expenses You Are Thinking'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12'>
                                <SinglePostSix
                                    blogImage="/blog1.jpeg"
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='This is a great source of content for anyone…'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div> */}
                {NormalCardData}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blogs;
