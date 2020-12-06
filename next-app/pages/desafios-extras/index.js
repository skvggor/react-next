import Head from 'next/head'

function DesafiosExtras() {
  return (
    <div class="desafios-extras">
      <Head>
        <title>Desafios Extras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="desafios-extras_container">
        <div class="desafios-extras_controles">
          <button>Girar</button>
        </div>

        <div class="desafios-extras_roleta">
          <div class="desafios-extras_roleta--container">
            <div class="desafios-extras_roleta--desafio">Desafio 1</div>
            <div class="desafios-extras_roleta--desafio">Desafio 2</div>
            <div class="desafios-extras_roleta--desafio">Desafio 3</div>
            <div class="desafios-extras_roleta--desafio">Desafio 4</div>
            <div class="desafios-extras_roleta--desafio">Desafio 5</div>
            <div class="desafios-extras_roleta--desafio">Desafio 6</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesafiosExtras
