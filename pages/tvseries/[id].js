import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";

import classes from './tvseries.module.css'
import axios from "axios";

const Tvseries = props => {
  //   render() {
  return (
    <Layout>
      <div className={classes.tvseries}>
        <h1><span className={classes.heading}>{props.data.name}</span></h1>
        <p className={classes.summaryWrap}>{props.data.summary.replace(/<[/]?[pb]>/g, "")}</p>
        {props.data.image ? <img className={classes.image} src={props.data.image.medium} /> : null}
      </div>
    </Layout>
  );
  //   }
};

export default Tvseries;

Tvseries.getInitialProps = async function(context) {
  console.log(context);
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();
  return { data };
};
