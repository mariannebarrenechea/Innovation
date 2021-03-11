import Head from 'next/head'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src = "/portadadanza.jpg" alt="" width="1500" height="100"></img>
      <main>
        <h1 className="title">
                 D A N Z A
        </h1>
        <p className="ejemplo">  Estudiante de Arquitectura, apasionada de todas las formas de arte. </p>
        <p className="description">
          Portafolio de Arquitectura <code>click aquí</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3> B A L L E T &rarr;</h3>
            <p>Conoce mi trayectoria dancística.</p>
            <img src = "/portada.jpg" alt="" width="1500" height="100"></img>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>J A Z Z &rarr;</h3>
            <p>Encuentra aquí las obras en las que he participado.</p>
          </a>

          <a
            href="https://youtu.be/1_7mFsw3WsY"
            className="card"
          >
            <h3> U R B A N O &rarr;</h3>
            <p>Escucha algunas colaboraciones musicales.</p>
          </a>

          <a
            href="https://issuu.com/mariannebarrenecheahutchinson/docs/portafolio_marianne_2_hojas"
            className="card"
          >
           
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        
        code {
          background: #FBCFE8;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-style: italic;
          color: #831843;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 0.5rem;
          flex-basis: 55%;
          padding: 2.5rem;
          text-align: left;
          font-style: bold;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          color: #831843;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #FBCFE8;
          border-color: #831843;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
