import React from 'react';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import GlobalStyle from '../styles';

export default function componentName() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <Projects />
      <Bio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
