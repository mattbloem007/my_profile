import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About Me</h2>
        <p>A little bit about my background</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <p>
            My name is Matthew Bloemetje. I am a 24 year old, Coloured male. I am available to create a dynamic website for your business or yourself.

After receiving a BSc in Computer Science at Stellenbosch University, I took the understandings of software development to teach myself React.js and Node.js to learn how to create full stack websites. These newer approaches are more efficient and highly scalable compared to older ways of developing websites. I am implementing react and nodejs into my current projects and have found a massive increase in productivity, efficiency of website and a lot more features that can be added to a dynamic website.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
