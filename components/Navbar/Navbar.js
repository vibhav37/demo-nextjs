import Head from "next/head";
import Link from "next/link";
import classes from './Navbar.module.scss'

const Navbar = props => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js💖</title>
      </Head>
      <nav>
        <Link href="/">
          <a className={classes.home}>❤️ 𝐇𝐎𝐌𝐄 ❤️</a>
        </Link>
        <Link href="/planets">
          <a>Planets</a>
        </Link>
        <Link href="/tv-series">
        <a>Tv Series</a>
        </Link>
        <Link href="/peoples">
          <a>Peoples</a>
        </Link>
      </nav>
      <div id="main">{props.children}</div>
      <style jsx>{`
        nav {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #333;
          font-size: 1rem;
          color: #fff;
          height: 3.5rem;
        }
        nav a {
          flex-grow: 1;
          color: #fff;
          text-decoration: none;
          text-align: center;
          height: 100%;
          line-height: 3.5rem;
        }
        nav a:hover {
          color: #4D7CEA;
          background-color: #fff;
          border-radius:5px;
          box-shadow: 2px 2px 5px #0044ff;
        }
      `}</style>
      {/* <style jsx global>{`
        body {
          margin: 0;
          font-family: "Avenir", Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #2c3e50;
          padding: 3.5rem 0 0;
        }
      `}</style> */}
    </div>
  );
};

export default Navbar;
