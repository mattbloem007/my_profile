import React from 'react';
import { Link, graphql } from 'gatsby'


import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/react.jpg';
import pic2 from '../assets/images/wordpress.png';
import pic3 from '../assets/images/seo.jpg';
import config from '../../config';

class IndexPage extends React.Component {
  render() {
    return (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        {/**<ul className="actions special">
                  <li>
                    <Scroll type="id" element="one">
                      <a href="/#" className="button primary">
                        Explore
                      </a>
                    </Scroll>
                  </li>
                </ul>*/}
      </div>
      <Scroll type="id" element="one">
      <Link to="/#" className="more">Learn More</Link>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Freelance Web Developer - Dynamic and stunning websites
          </h2>
          <p>
            Have a fully operational website built to your specifications. I am using the latest technologies that optimize the way your website flows. ReactJS + Wordpress + SEO =  A Unique, Dynamic website.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon major style1">
            <i size={100} className="fab fa-react major style1"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
            <i className="fab fa-wordpress major style1"></i>
            </span>
          </li>
          <li>
            <span className="icon fa-code major style1">
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Why ReactJS?
          </h2>
          <p>
            ReactJS is highly adaptable, with endless possibilities. 
            <br/>
            Large scale web applications or websites are incredibly fast and optimal, 
            <br/>
            capable of loading real-time data instantly.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Wordpress as a Content Managment System (CMS)
          </h2>
          <p>
            Easy for all clients to create their own content. 
            <br/>
            Reliable, familiar and simple to learn. 
            <br /> 
            Great for adding in plugins to the client's desire.
            <br />
            Can be accessed from  any computer for updates and editing.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Whole Site SEO optimized
          </h2>
          <p>
            Allow your website to be seen worldwide across the internet.
            <br/> 
            Bring more traffic and awareness to your website.
            <br /> 
            Although it is an extra cost, an optimized site with SEO will get your money back as your website analytics sky rocket!
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Work Experience</h2>
          <p>
            Web and application development is fun. My work speaks for itself.
            <br />
            This is what I have been up to after achieving my degree in Computer Science.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-laptop">
            <h3>Application Developer - Xicon Solutions</h3>
            <p>
              Xicon Solutions and I have developed a tool that assists in integrating an Organ of State's supplier database with that of the National Treasury's CSD (Central Supplier Database). 
              <br/>
              <br/>
              According to section 217 of the constitution, all Organs of State must be CSD compliant, hence 
              <br/>
              Xicon Solutions' tool offers an effortless solution for Organs of State. 
              <br/>
              <br/>
              The Central Supplier Database (CSD) SAP Integration Solution consists of three separate solutions: 
              <br/>
              the CSD & SAP Supplier number Match and Sync; 
              <br/>
              the Real-time CSD Status checks from SAP; 
              <br/>
              and the bulk batch file download and sync. 
              <br/>
              <br/>
              It is designed to always keep a company's database accurate, updated and in sync with the CSD
              <br/>
              <br/>
              Technologies used: ReactJS, NodeJS, Docker, mysql, elasticsearch, SAP
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Web Application Developer - IOS Group</h3>
            <p>
              Developed a functioning website for IOS Group to capture, store and interact with all sports clubs in the whole of South Africa.
              <br/>
               Retaining all the information of the different clubs and allowing one to know more detail about sports clubs in their region.
               <br/>
               <br/>
                Used React and Node.js to implement a website to capture the data of all the learners that are part of IOS Group.
                <br/>
                <br/>
                Developed a Learning management system for IOS Group to create courses for students who want to take a course to become a coach in a certain field of sport. On this platform courses are uploaded and enrolled by learners
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Website Developer - Private Client </h3>
            <p>
              Below is an example of a website that I am currently working on for a client. 
              <br/>
              <br />
              You are more than welcome to browse what is there to get a feel of my work:

              <a href="https://lah-hallah.netlify.com/"> Click here </a> 
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
          <div className="inner">
            <header>
              <h2>Hire me</h2>
              <p>
                Contact me for more details.
                <br/>
                <br />
                 I am available to help share your vision with the world.
                <br />
                <br />
                WhatsApp: 083 293 5904
                <br />
                <br />
                Email: <a href="mailto:mattb007@gmail.com"> mattb007@gmail.com </a>
              </p>
            </header>
            <ul className="actions stacked">
              <li>
              <Link to="/Generic" className="button fit primary">About Me</Link>
              </li>
            </ul>
          </div>
        </section>
  </Layout>
)
  }
}

export default IndexPage;
