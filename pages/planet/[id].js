import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";

export default function Planet(props) {
  // const router = useRouter();
  // console.log(props.data.results);
  return (
    <Layout>
      {props.data.results.map((value, i) => {
        return (
          <div key={i} className="planets-wrapper">
            <h3>{value.name}</h3>
            <div>
              <h5>
                <span> rotation_period :- </span> {value.rotation_period}
              </h5>
              <h5>
                <span>orbital_period :- </span> {value.orbital_period}
              </h5>
              <h5>
                <span>diameter :- </span> {value.diameter}
              </h5>
              <h5>
                <span>climate :- </span> {value.climate}
              </h5>
              <h5>
                <span>gravity :- </span> {value.gravity}
              </h5>
              <h5>
                <span>terrain :- </span> {value.terrain}
              </h5>
              <h5>
                <span>surface_water :- </span> {value.surface_water}
              </h5>
              <h5>
                <span>population :- </span> {value.population}
              </h5>
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .planets-wrapper {
          width: 200px;
          height: auto;
          margin: 50px;
          border: 1px solid grey;
          background-color: #fff;
          border-radius:5px;
          box-shadow: 2px 2px 5px #0044ff,-2px -2px 5px #0044ff;
          text-align: left;
          padding: 10px;
        }
        h5 span {
          color: blue;
        }
      `}</style>
    </Layout>
  );
}

Planet.getInitialProps = async function(context) {
  console.log(context);
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/planets/?search=${id}`);
  const data = await res.json();

  console.log(`Fetched show: ${data}`);

  return { data };
};
