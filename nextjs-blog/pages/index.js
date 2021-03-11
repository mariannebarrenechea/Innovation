import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Marianne Barrenechea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src = "/portada.jpg" alt="" width="1500" height="100"></img>
      <main>
        <h1 className="title">
                 M A R I A N N E
        </h1>
        <p className="ejemplo">  Estudiante de Arquitectura, apasionada de todas las formas de arte. </p>
        

        <div class="grid grid-cols-4 gap-x-12">
          <div className="ficha">
            <a href="danza/trayectoria">
              <h3>D A N Z A &rarr;</h3>
              <p>Conoce mi trayectoria <br></br> dancística.</p>
            </a>
          </div>

          <div className="ficha">
            <a href="teatro/musicales">
              <h3>T E A T R O &rarr;</h3>
              <p>Encuentra aquí las obras<br></br> en las que he participado.</p>
            </a>
          </div>

          <div className="ficha">
            <a href="https://youtu.be/1_7mFsw3WsY" >
              <h3> M Ú S I C A &rarr;</h3>
              <p>Escucha algunas<br></br> colaboraciones musicales.</p>
            </a>
          </div>

          <div className="ficha">
          <a href="/marianne.pdf">
            <h3>A R Q U I T E C T U R A &rarr;</h3>
            <p>
              Conoce mis proyectos y <br></br> diseños propios.
            </p>
          </a>
          </div>


        </div>
          <div className="grid">
            <a href="danza/trayectoria" className="card">
              <h3>D A N Z A &rarr;</h3>
              <p>Conoce mi trayectoria dancística.</p>
            </a>

            <a href="teatro/musicales" className="card">
              <h3>T E A T R O &rarr;</h3>
              <p>Encuentra aquí las obras en las que he participado.</p>
            </a>

            <a href="https://youtu.be/1_7mFsw3WsY" className="card">
              <h3> M Ú S I C A &rarr;</h3>
              <p>Escucha algunas colaboraciones musicales.</p>
            </a>

            <a href="/marianne.pdf" className="card">
              <h3>A R Q U I T E C T U R A &rarr;</h3>
              <p>
                Conoce mis proyectos y diseños propios.
              </p>
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

    
    </div>
  )
}
