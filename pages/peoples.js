import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import classes from './peoples.module.css'
import axios from "axios";

const movieId = 45;
class Peoples extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(res =>
      this.setState({
        data: res.data.results
      })
    );
  }

  render() {
    let peoples = <p>Loading</p>;
    if(this.state.data){
      peoples = this.state.data.map((value,i) => {
        return(
          <div key={i} className={classes.Peoples}>
            <h3>{value.name}</h3>
          </div>
        )
      })
    }
    return (
      <>
        <Layout>
            {peoples}
        </Layout>
      </>
    );
  }
}

export default Peoples;
