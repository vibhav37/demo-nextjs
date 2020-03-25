import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

export default function Planets(props) {
  const router = useRouter();
  // console.log(props.data.results);
  return (
    <Layout side="<--server-side-->">
      {props.data.results.map((value, i) => {
        return (
          <Link href="/planet/[id]" as={`/planet/${value.name}`} key={i}>
            <div className="planet-wrapper">
              <h4>Planet :- {value.name}</h4>
            </div>
          </Link>
        );
      })}
      <style jsx>{`
        .planet-wrapper {
          width: 200px;
          height: auto;
          margin: 50px;
          border: 2px solid grey;
          background-color: #E1E7EC;
          color:#000;
          // border-radius:5px;
          text-align: center;
        }
        .planet-wrapper:hover {
          color: #4D7CEA;
          background-color: #fff;
          border-radius:5px;
          box-shadow: 2px 2px 5px #0044ff,-2px -2px 5px #e90505;
          cursor: pointer;
          user-select: none;
        }
      `}</style>
    </Layout>
  );
}

Planets.getInitialProps = async function() {
  const res = await fetch("https://swapi.co/api/planets/");
  const data = await res.json();

  return {
    data: data
  };
};
