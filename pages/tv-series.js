import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";

import classes from "./tv-series.module.scss";
import Layout from "../components/Layout/Layout";

class TvSeries extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    axios.get("https://api.tvmaze.com/search/shows?q=marvel").then(res =>
      this.setState({
        data: res.data
      })
    );
  }

  render() {
    let series = <p>Loading</p>;
    if (this.state.data) {
      series = this.state.data.map((value,i) => {
        return (
          <Link key={i} href='/tvseries/[id]' as={`/tvseries/${value.show.id}`}>
            <div className={classes.TvSeries}>
              <h3>{value.show.name}</h3>
            </div>
          </Link>
        );
      });
    }
    return <Layout side="<--client-side-->">{series}</Layout>;
  }
}

export default TvSeries;
