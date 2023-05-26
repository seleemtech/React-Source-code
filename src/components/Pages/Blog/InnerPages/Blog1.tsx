import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteBreadcrumb from "../../../BreadCumb/SiteBreadcrumb";
import InnerRightSideBar from "../InnerRightSideBar";

const firstParaList = [
  {
    line: "Requirements  For Cas Integration",
  },
  {
    line: "1. Download Cas web application from the below give link:",
  },
  {
    line: "http://www.jasig.org/cas/download",
    links: [
      {
        link: "http://www.jasig.org/cas/download",
      },
    ],
  },
  {
    line: "you can use any of cas3.4.5 or cas3.5.2(latest)",
  },
  {
    line: "2. jar files that will be used in cas Integration with Liferay portal database. Commons-pool-1.6.jar.",
  },
  {
    line: "Link: http://commons.apache.org/proper/commons-pool//download_pool.cgi ",
    links: [
      {
        link: "http://commons.apache.org/proper/commons-pool//download_pool.cgi",
      },
    ],
  },
  {
    line: "Commons-dbcp-1.4.jar",
  },
  {
    line: "Link: http://commons.apache.org/proper/commons-dbcp//download_dbcp.cgi",
    links: [
      {
        link: "http://commons.apache.org/proper/commons-dbcp//download_dbcp.cgi",
      },
    ],
  },
  {
    line: "1. In CAS default authentication mechanism CAS Authenticate Users having same UserName and Password",
  },
  {
    line: "Ex: NetId Username: abc@liferay.com",
  },
  {
    line: "Password: xyz",
  },
  {
    line: "We will also first test our CAS with its default mechanism after that we will configure CAS to use our Liferay portal database to authenticate username and Password with different values.",
  },
  {
    line: "2. CAS authenticates users on HTTPS protocol, For that we have to create our SSL certificate for our localhost port 8443.",
  },
  {
    line: "Now Here are the STEPS we need to follow.",
  },
];

const blockFirstQoute = [
  {
    list: "Enter keystore password: changeit",
  },
  {
    list: "What is your first and last name? ",
  },
  {
    list: "[Unknown]: localhost",
  },
  {
    list: "What is the name of your organizational unit?",
  },
  {
    list: "[Unknown]:",
  },
  {
    list: "What is the name of your organization?",
  },
  {
    list: "[Unknown]:",
  },
  {
    list: "What is the name of your City or Locality?",
  },
  {
    list: "[Unknown]:",
  },
  {
    list: "What is the name of your State or Province?",
  },
  {
    list: "[Unknown]:",
  },
  {
    list: "What is the two-letter country code for this unit?",
  },
  {
    list: "[Unknown]:",
  },
  {
    list: "Is CN=localhost, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown correct?",
  },
  {
    list: "[no]: y",
  },
];

const blockSecQoute = [
  {
    list: "<property name='authenticationHandlers'>",
  },
  {
    list: "<list> ",
  },
  {
    list: "<!--| This is the authentication handler that authenticates services by means of callback via SSL, thereby validating a server side SSL certificate. -->",
  },
  {
    list: "<bean class='org.jasig.cas.authentication.handler.support.HttpBasedService CredentialsAuthenticationHandler'",
  },
  {
    list: "p:httpClient-ref='httpClient' /> ",
  },
  {
    list: "<bean class='org.jasig.cas.adaptors.jdbc.QueryDatabaseAuthenticationHandler'>",
  },
  {
    list: "<property name='dataSource' ref='dataSource' />",
  },
  {
    list: "<property name='sql' value='ELECT password_ FROM User_ WHERE screenName=?' />",
  },
  {
    list: "<property name='passwordEncoder'>",
  },
  {
    list: "<bean class='com.liferay.LiferayPasswordEncoder'>",
  },
  {
    list: "</bean>",
  },
  {
    list: "</property>",
  },
  {
    list: "</bean> ",
  },
  {
    list: "</list>",
  },
  {
    list: "</property>",
  },
  {
    list: "</bean>",
  },
  {
    list: "<!--  after closing of authenticationManager  bean  -->",
  },
  {
    list: "<!-- place database information  settings -->",
  },
  {
    list: "<bean id='dataSource' class='org.apache.commons.dbcp.BasicDataSource'>",
  },
  {
    list: "<property name='driverClassName'>",
  },
  {
    list: "<value>com.mysql.jdbc.Driver</value>",
  },
  {
    list: "</property>",
  },
  {
    list: "<property name='url'>",
  },
];

const blockSecInnerListQoute = [
  {
    list: "<value>jdbc:mysql://localhost:3306/lportal</value>",
  },
  {
    list: "</property>",
  },
  {
    list: "<property name='username'>",
  },
  {
    list: "<value>root</value>",
  },
  {
    list: "</property>",
  },
  {
    list: "<property name='password'>",
  },
  {
    list: "</property>",
  },
  {
    list: "<property name='initialSize' value='1'>",
  },
  {
    list: "</property>",
  },
  {
    list: "<property name='maxIdle' value='5'></property>",
  },
  {
    list: "<property name='maxActive' value='50'></property>",
  },
  {
    list: "<property name='maxWait'  value='10000'></property>",
  },
  {
    list: "<property name='validationQuery'  value='select 1'></property>",
  },
  {
    list: "<property name='testOnBorrow' value='false'></property>",
  },
  {
    list: "<property name='testWhileIdle' value='true'></property>",
  },
  {
    list: "<property name='timeBetweenEvictionRunsMillis'value='10000'></property>",
  },
  {
    list: "<property name='minEvictableIdleTimeMillis' value='30000'></property>",
  },
  {
    list: "<property name='numTestsPerEvictionRun' value='-1'></property>",
  },
  {
    list: "</bean> //",
  },
];

const blockThirdQoute = [
  {
    list: "import java.security.MessageDigest;",
  },
  {
    list: "import java.security.NoSuchAlgorithmException;",
  },
  {
    list: "import java.io.UnsupportedEncodingException; ",
  },
  {
    list: "import org.jasig.cas.authentication.handler.PasswordEncoder;",
  },
  {
    list: "public final class LiferayPasswordEncoder implements PasswordEncoder",
  },
  {
    list: "{",
  },
  {
    list: "public String encode(final String password) {",
  },
  {
    list: "MessageDigest digester = null;",
  },
  {
    list: "try{",
  },
  {
    list: "digester = MessageDigest.getInstance('SHA');",
  },
  {
    list: "digester.update(password.getBytes('UTF-8'));",
  },
  {
    list: "}",
  },
  {
    list: "catch (NoSuchAlgorithmException ex) {",
  },
  {
    list: "System.out.println('encode method exception”+ ex.printStackTrace());}",
  },
  {
    list: "byte[] bytes = digester.digest();",
  },
  {
    list: "return encodeBase64(bytes);",
  },
  {
    list: "}",
  },
  {
    list: "private static char getChar(int sixbit)",
  },
  {
    list: "{",
  },
  {
    list: "if (sixbit >= 0 && sixbit <= 25) { ",
  },
  {
    list: "return (char)(65 + sixbit);",
  },
  {
    list: "}",
  },
  {
    list: "if (sixbit >= 26 && sixbit <= 51) {",
  },
  {
    list: "return (char)(97 + (sixbit - 26));",
  },
  {
    list: "}",
  },
  {
    list: "if (sixbit >= 52 && sixbit <= 61) {",
  },
  {
    list: "return (char)(48 + (sixbit - 52));",
  },
  {
    list: "}",
  },
  {
    list: "if (sixbit == 62) {",
  },
  {
    list: "return '+';",
  },
  {
    list: "}",
  },
  {
    list: "return sixbit != 63 ? '?' : '/';",
  },
  {
    list: "}",
  },
  {
    list: "private static String encodeBase64(byte raw[]) ",
  },
  {
    list: "{",
  },
  {
    list: "StringBuilder encoded = new StringBuilder();",
  },
  {
    list: "for (int i = 0; i < raw.length; i += 3) {",
  },
  {
    list: "encoded.append(encodeBlock(raw, i));",
  },
  {
    list: "}",
  },
  {
    list: "return encoded.toString();",
  },
  {
    list: "}",
  },
  {
    list: "private static char[] encodeBlock(byte raw[], int offset)",
  },
  {
    list: "{",
  },
  {
    list: "int block = 0;",
  },
  {
    list: "int slack = raw.length - offset - 1;",
  },
  {
    list: "int end = slack < 2 ? slack : 2;",
  },
  {
    list: "for (int i = 0; i <= end; i++) {",
  },
  {
    list: "byte b = raw[offset + i];",
  },
  {
    list: "int neuter = b >= 0 ? ((int) (b)) : b + 256;",
  },
  {
    list: "block += neuter << 8 * (2 - i);",
  },
  {
    list: "}",
  },
  {
    list: "char base64[] = new char[4];",
  },
  {
    list: "for (int i = 0; i < 4; i++) {",
  },
  {
    list: "int sixbit = block >>> 6 * (3 - i) & 0x3f;",
  },
  {
    list: "base64[ i ] = getChar(sixbit);",
  },
  {
    list: "}",
  },
  {
    list: "if (slack < 1) {",
  },
  {
    list: "base64[2] = '=';",
  },
  {
    list: "}",
  },
  {
    list: "if (slack < 2) {",
  },
  {
    list: "base64[3] = '=';",
  },
  {
    list: "}",
  },
  {
    list: "return base64;",
  },
  {
    list: "}",
  },
  {
    list: "}",
  },
];

const DisplayNone = {
  display: "none",
};
const ImageStyle = {
  width: "100%",
  height: "400px",
  objectFit: "cover",
};
const spanStyle = {
  fontWeight: "600",
};
const Blog1 = () => {
  //   const normalFirstlist = firstParaList.map((item: any, i: any) => {
  //     return (
  //       <>
  //         {item.line}
  //         <br />
  //         {item?.links?.map((linkItem: any, i: any) => (
  //           <a href={linkItem?.link}>{item.line}</a>
  //         ))}
  //       </>
  //     );
  //   });
  useEffect(() => {
    window.scrollTo({top:0,left:0, behavior: 'smooth',});
  }, []);
  const NormalFirstBlockQoute = blockFirstQoute.map((item: any, i) => {
    return (
      <blockquote key={i}>
        <p>{item.list}</p>
      </blockquote>
    );
  });
  const NormalSecBlockQoute = blockSecQoute.map((item: any, i) => {
    return (
      <blockquote key={i}>
        <p>{item.list}</p>
      </blockquote>
    );
  });
  const NormalSecInnerBlockQoute = blockSecInnerListQoute.map(
    (item: any, i) => {
      return (
        <>
          <p>{item.list}</p>
        </>
      );
    }
  );
  const NormalThirdBlockQoute = blockThirdQoute.map((item: any, i) => {
    return (
      <blockquote key={i}>
        <p>{item.list}</p>
      </blockquote>
    );
  });
  return (
    <React.Fragment>
      <SiteBreadcrumb
        pageTitle={
          <>
            <span>LIFERAY SSO INTEGRATION</span>
          </>
        }
        imagStyle={ImageStyle}
        titleDisplay={DisplayNone}
        displayNone={DisplayNone}
        breadcrumbsImg="/bloginnerimg1.jpeg"
      />

      <div className="rs-blog-inner-pages   orange-style pt-20 pb-100 md-pt-10 md-pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 order-last">
              <div className="widget-area">
                <InnerRightSideBar
                  linkText1="Tips for Picking the Right Liferay Consulting Company"
                  link1=""
                  linkText2="Most Common Liferay Features Offerings By Experts"
                  link2=""
                  linkText3="Why Liferay Is The Best Tool For Website And Mobile App Development?"
                  link3=""
                  linkText4="Liferay A Modern Web Development Technology With Great Features"
                  link4=""
                  linkText5="3 Reasons Why You Should Choose Liferay For Web Portal Development"
                  link5=""
                  linkText6="Liferay One-Stop Solution For All Kind Of Web Portal Development"
                  link6=""
                  linkText7="Liferay A Modern Web Development Technology With Great Features"
                  link7=""
                  linkText8="Why Liferay Is The Next Best Thing In Web Portal Development"
                  link8=""
                  linkText9="Why Liferay Is The Next Best Thing In Web Portal Development"
                  link9=""
                  linkText10="Benefits Of Liferay Development & Liferay Migration"
                  link10=""
                />
              </div>
            </div>
            <div className="col-lg-8 pr-50 md-pr-14">
              <div className="blog-deatails">
                <div className="blog-full">
                  {/* <ul className="single-post-meta">
                    <li>
                      <span className="p-date">
                        {" "}
                        <i className="fa fa-calendar-check-o"></i> April 6, 2022{" "}
                      </span>
                    </li>
                    <li>
                      <span className="p-date">
                        {" "}
                        <i className="fa fa-user-o"></i> Admin{" "}
                      </span>
                    </li>
                    <li className="Post-cate">
                      <div className="tag-line">
                        <i className="fa fa-book"></i>
                        <Link to="/blog">Strategy</Link>
                      </div>
                    </li>
                    <li className="post-comment">
                      {" "}
                      <i className="fa fa-comments-o"></i> 0
                    </li>
                  </ul> */}
                  <div className="blog-desc">
                    <h2 className="title ">LIFERAY SSO INTEGRATION</h2>
                    <h4 className="sm-title">1. What is SSO</h4>
                    <p>
                      <span style={spanStyle}>sign-on(SSO)</span> is a property
                      of access control of multiple related, but independent
                      software systems. With this property a user logs in once
                      and gains access to all systems without being prompted to
                      log in again at each of them.
                    </p>
                    </div>
                    <div className="blog-desc">
                    <h4 className="sm-title" style={{lineHeight:"24px"}}>
                      2. CAS(Centralo Authentication System)
                    </h4>
                    <p>
                      CAS is just a application or a simple web application
                      which provides sso . It also allows web applications to
                      authenticate users without gaining access to a user's
                      security credentials, such as a password. The name CAS
                      also refers to a software package that implements this
                      protocol.
                    </p>
                    <p>
                      Requirements For Cas Integration
                      <br />
                      1. Download Cas web application from the below give link:
                      <br />
                      <a href="http://www.jasig.org/cas/download">
                        http://www.jasig.org/cas/download
                      </a>
                      <br />
                      you can use any of cas3.4.5 or cas3.5.2(latest)
                      <br />
                      2. jar files that will be used in cas Integration with
                      Liferay portal database.
                      <br />
                      Commons-pool-1.6.jar.
                      <br />
                      Link:
                      <a href="http://commons.apache.org/proper/commons-pool//download_pool.cgi">
                        {" "}
                        http://commons.apache.org/proper/commons-pool//download_pool.cgi
                      </a>
                      <br />
                      Commons-dbcp-1.4.jar
                      <br />
                      Link:
                      <a href=" http://commons.apache.org/proper/commons-dbcp//download_dbcp.cgi">
                        {" "}
                        http://commons.apache.org/proper/commons-dbcp//download_dbcp.cgi
                      </a>
                      <br />
                      Note:
                      <br />
                      1. In CAS default authentication mechanism CAS
                      Authenticate Users having same UserName and Password
                      <br />
                      Ex: NetId Username: abc@liferay.com
                      <br />
                      Password: xyz
                      <br />
                      We will also first test our CAS with its default mechanism
                      after that we will configure CAS to use our Liferay portal
                      database to authenticate username and Password with
                      different values.
                      <br />
                      2. CAS authenticates users on HTTPS protocol, For that we
                      have to create our SSL certificate for our localhost port
                      8443.
                      <br />
                      Now Here are the STEPS we need to follow.
                    </p>
                    {/* <p> {normalFirstlist}</p> */}
                  </div>
                  {/* <blockquote>
                    <p>
                      Globally incubate standards compliant channels before
                      scalable benefits. Quickly disseminate superior
                      deliverables whereas web-enabled applications.
                    </p>
                  </blockquote> */}
                  <div className="blog-desc mb-40">
                    <h4 className="sm-title">STEP 1:</h4>
                    <p>
                      Unzip the CAS Web application jar file we have downloaded.
                      Go inside \cas-server-3.4.5-release\cas-
                      <br />
                      server-3.4.5\modules\ you will see a war file
                      CAS-server-webapp-3.4.5.war.
                      <br />
                      Unzip this war file using any tool like- 7-zip File
                      Manager or any.
                      <br />
                      Now rename that to CAS.
                    </p>
                    <h4 className="sm-title">STEP 2:</h4>
                    <p>
                      Put that CAS webapp in your Liferay tomcat server’s webapp
                      folder.
                    </p>
                    <h4 className="sm-title">STEP 3:</h4>
                    <p>
                      Now UnComment the connector port 8443 in your server.xml
                      file available at server\tomcat-6.0.26\conf\server.xml
                      <br />
                      Connector port="8443" protocol="HTTP/1.1"
                      SSLEnabled="true” maxThreads='150' scheme='https'
                      secure='true' clientAuth="false" sslProtocol="TLS"
                    </p>

                    <h4 className="sm-title">STEP 4:</h4>
                    <p>
                      Now we have to create our own Self Signed ssl certificate
                      from our command line tool cmd(in Windows) and terminal(ij
                      ubantu) these are the following steps
                    </p>
                  </div>
                  <blockquote>
                    <p>
                      1. keytool -genkey -alias tomcat -keypass changeit -keyalg
                      RSA
                    </p>
                  </blockquote>

                  <div className="blog-desc">
                    <p>
                      <span style={spanStyle}>Note:</span> Be sure to use the
                      keytool that comes with the Java VM
                      (%JAVA_HOME%/jre/bin/keytool), as on some systems the
                      default points to the GNU version of keytool, where the
                      two seem incompatible.
                      <br />
                      Answer the questions: (note that your firstname and
                      lastname MUST be hostname of your server and cannot be a
                      IP address; this is very important as an IP address will
                      fail client hostname verification even if it is correct)
                    </p>
                  </div>
                  {NormalFirstBlockQoute}
                  <p>
                    2. Now we have to export our certificate we have generated
                    from our personal keystore (In windows your personal
                    keystore is in C:\Documents and Settings\username\.keystore)
                  </p>
                  <blockquote>
                    <p>
                      keytool -export -alias tomcat -keypass changeit -file
                      %FILE_NAME%
                    </p>
                  </blockquote>
                  <p>
                    For %FILE_NAME% you can give server.cert.
                    <br />
                    3. Finally import the cert into Java's keystore with this
                    command. Tomcat uses the keystore in your JRE
                    (%JAVA_HOME%/jre/lib/security/cacerts)
                  </p>
                  <blockquote>
                    <p>
                      keytool -import -alias tomcat -file %FILE_NAME% -keypass
                      changeit -keystore %JAVA_HOME%/jre/lib/security/cacerts
                    </p>
                  </blockquote>
                  <p>
                    4. After Creating the ssl certificate we will refer our
                    created Keystore and TrustStore from our server.xml File.
                    Here how I have Implemented
                    <br />
                    1. put your keystore file in servers
                    \liferay-portal-6.1.1-ce-ga2\tomcat-7.0.27\conf
                    <br />
                    2. Refer Your javas Default truststore.
                    <br />
                    Connector SSLEnabled="true" clientAuth="false"
                    keystoreFile="conf/.keystore" keystorePass="tomcat123"
                    maxThreads="150" enableLookups="false"
                    disableUploadTimeout="true" port="8443"
                    protocol="org.apache.coyote.http11.Http11NioProtocol"
                    scheme="https" secure="true" sslProtocol="TLS"
                    maxHttpHeaderSize="8192"
                    truststoreFile="C:/Java/jdk1.7.0/jre/lib/security/cacerts"
                    acceptCount="100"
                  </p>
                  <div className="blog-desc mb-40">
                    <h4 className="sm-title">STEP 5:</h4>
                    <p>
                      Now We have to Configure our Liferay portal to Enable CAS
                      Authentication
                      <br />
                      1. Login as Admin in your portal.
                      <br />
                      2. goto Control Panel --{">"}Portel Settings --{">"}
                      Authentication--{">"}CAS
                      <br />
                      3. Configure the fields and don’t ever forgot to chaeck
                      the Enable Checkbox. And save the configuration
                    </p>
                  </div>
                  <div className="blog-desc mb-40">
                    <h4 className="sm-title">STEP 6:</h4>
                    <p>
                      Now create a user from portal with same emailed and
                      password.and SignOut.
                      <br />
                      Ex: email = abc@liferay.com
                      <br />
                      Password = xyz
                    </p>
                  </div>
                  <div className="blog-desc mb-40">
                    <h4 className="sm-title">STEP 7:</h4>
                    <p>
                      Now Sign In through Sign In Button On your Liferay Portal
                      home Page it will redirect you to CAS Login page. Like
                    </p>
                  </div>
                  <div className="blog-desc mb-40">
                    <h4 className="sm-title">STEP 8:</h4>
                    <p>
                      Now try to login with the same username and password of
                      the user you have created.
                      <br />
                      You will be redirected to the Liferay portal asking You to
                      set New username and Password.
                    </p>
                  </div>
                  <div className="blog-desc mb-40">
                    <h4 className="sm-title">STEP 9:</h4>
                    <p>
                      After that try to Logout, You will find something like
                      this
                      <br />
                      Congratulation you have configured Liferay with CAS
                      default functionality.
                      <br />
                      Now We will configure CAS to authenticate users from our
                      Liferay portal database. For that we have to edit a file
                      available in CAS webapp in our server. File resides here:
                      Liferay-portal-6.1.1-ce-ga2\tomcat7.0.27\webapps\cas\WEBINF\deployerConfigContext.xml.By
                      default CAS is using
                      SimpleTestUsernamePasswordAuthenticationHandler. Replace
                      the above-mentioned authentication handler inside
                      authentication handlers property like structure mention
                      below.
                      <br />
                      <span style={spanStyle}>Note:</span> If you want to
                      authenticate ByEmailAddress change the sql query in
                      deployerConfigContext.xml as bellow.
                      <br />
                      {" <property"} name="sql" value="SELECT password_ FROM
                      User_ WHERE emailAddress=?" {"/>"}
                    </p>
                    {NormalSecBlockQoute}
                    <blockquote>{NormalSecInnerBlockQoute}</blockquote>
                  </div>
                  <div className="blog-desc mb-40">
                    <h4 className="sm-title">STEP 10:</h4>
                    <p>
                      Now Create LiferayPassword Encoder class that will
                      implement PasswordEncoder (While compiling it will need
                      CAS-server-core-3.3.5.jar that is available inside
                      CAS/WEB-INF/lib) package com. liferay inside
                      WEB-INF/classes
                      <br />
                      And compile it
                    </p>
                  </div>
                  {NormalThirdBlockQoute}
                  <div className="blog-desc mb-40">
                    <h4 className="sm-title">STEP 11:</h4>
                    <p>
                      Now Jars we have downloaded in cas/WEB-INF/lib
                      <br />
                      Commoms-pool-1.6.jar .
                      <br />
                      Commons-dbcp-1.4.jar
                      <br />
                      CAS-server-support-jdbc-3.4.5(This jar is available in
                      your CAS package you have downloaded inside
                      CAS-server-3.4.5-release\cas-server-3.4.5\modules)
                    </p>
                  </div>
                  <div className="blog-desc mb-40">
                    <h4 className="sm-title">STEP 12:</h4>
                    <p>
                    Now you are ready to test your CAS authentication with Liferay using your own Portal database.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog1;
