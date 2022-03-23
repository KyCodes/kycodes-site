import React, { Fragment } from 'react';
import { Helmet } from "react-helmet"
import Header from '../components/Header';
import Main from '../components/Main';

export default function IndexPage() {
  return (
    <Fragment>
      <Helmet>
        <title>KyCodes</title>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="KyCodes offers unique, optimized, and accessible application development so you can make more." />
        <meta name="keywords" content="HTML, CSS, JS, JavaScript, React, React Native, Website, App" />
        <meta name="author" content="Kyler Fullerton" />
      </Helmet>
      <Header />
      <Main />
    </Fragment>
  );
}
