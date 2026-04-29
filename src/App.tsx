import './App.css'
import background from './assets/background.png'
import foto from './assets/debora.png'
import clock from './assets/clock.png'
import  day from './assets/data.png'
import heart from './assets/heart.png'
import local from './assets/local.png'
import data from './assets/calendar.png'
function App() {
  return (
    <main className="min-h-screen bg-cyan-50 flex-col p-4 bg-cover bg-center  bg-fixed" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
<img src={data} className="fixed top-4 left-1/2 -translate-x-1/2 w-1/3 opacity-90  z-0"/>
        <div className="relative w-[70%] m-auto  mt-50" >
          <img
            src={foto}
            className="w-full object-cover rounded-2xl  "
          />
         
        </div>
      <div className="w-full max-w-sm  overflow-hidden   rounded-2xl bg-white z-10 relative m-auto">

        {/* Foto grande no topo */}

        {/* Corpo */}
        <div className="px-6 pb-6 pt-5 text-center">

          <p className="text-cyan-900 text-sm leading-relaxed text-justify mb-3">
            Hoje eu celebro meus 55 anos com o coração leve e cheio de histórias para contar.
            Se aos 15 eu sonhava com o futuro, hoje celebro tudo o que vivi para chegar até aqui.
            Este é <strong>"Meus 15 anos… depois dos 40!"</strong> — com mais coragem, mais sabedoria, menos pressa e muito mais verdade.
          </p>

          <blockquote className="border-l-4 border-cyan-400 bg-cyan-50 rounded-r-xl px-4 py-3 text-left italic text-cyan-700 text-sm mb-3">
            A vida me ensinou que o tempo não tira a beleza — ele transforma, fortalece e ilumina. Hoje eu danço no meu próprio ritmo, sorrio sem medo!
          </blockquote>

          <p className="text-cyan-900 text-sm leading-relaxed text-justify mb-4">
            Que nunca me falte leveza para viver, sonhos para realizar e motivos para comemorar!
            Porque a melhor fase da vida é aquela que a gente decide viver com <strong>alegria!</strong>
          </p>
            <div>
              <p className=" text-xs mb-1">🍽️ Comidas e bebidas serão servidas</p>
              <p className=" text-xs mb-1">🧃 Água · Suco · Refrigerante</p>
              <p className="uma versão dessa image na cor #F45B8F text-xs italic mt-2">🍹 Bebida alcoólica? Traga a sua!</p>
            </div>
      <div className=''>
  <article className='flex justify-around items-start w-[85%] m-auto mb-8 mt-10'>

    {/* Local */}
    <a href='https://www.google.com/maps?q=-7.555777072906494,-37.51935958862305&z=17&hl=pt-BR' className='flex flex-col items-center gap-2'>
      <div className='rounded-full border-2 border-[#F45B8F] bg-white h-12 w-12 flex items-center justify-center overflow-hidden'>
        <img src={local} className='w-6 h-6 object-contain' />
      </div>
      <span className='text-[10px] text-[#c0587e] font-medium text-center leading-tight max-w-[64px]'>
        Chácara três Marias
      </span>
    </a>

    {/* Dia */}
    <div className='flex flex-col items-center gap-2'>
      <div className='rounded-full border-2 border-[#F45B8F] bg-white h-12 w-12 flex items-center justify-center overflow-hidden'>
        <img src={day} className='w-6 h-6 object-contain' />
      </div>
      <span className='text-[10px] text-[#c0587e] font-medium text-center leading-tight max-w-[64px]'>
        Sábado, 9 de maio
      </span>
    </div>

    {/* Horário */}
    <div className='flex flex-col items-center gap-2'>
      <div className='rounded-full border-2 border-[#F45B8F] bg-white h-12 w-12 flex items-center justify-center overflow-hidden'>
        <img src={clock} className='w-6 h-6 object-contain' />
      </div>
      <span className='text-[10px] text-[#c0587e] font-medium text-center leading-tight max-w-[64px]'>
        A partir das 12h
      </span>
    </div>

    {/* Coração */}
    <div className='flex flex-col items-center gap-2 '>
      <div className='rounded-full border-2 border-[#F45B8F] bg-white h-12 w-12 flex items-center justify-center overflow-hidden'>
        <img src={heart} className='w-6 h-6 object-contain' />
      </div>
      <span className='text-[10px] text-[#c0587e] font-medium text-center leading-tight max-w-[64px]'>
        Confirme sua presença
      </span>
    </div>

  </article>

  <a href='https://docs.google.com/forms/d/e/1FAIpQLSeaDjhhr8BcFLJtXwpcJQpSMfTUUVDm2sfSAm75AZ3EJ_Bd_g/viewform' className='bg-[#F45B8F] hover:bg-[#e03d78] active:scale-95 transition-all duration-150 rounded-2xl w-[65%] py-4 text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 m-auto shadow-sm'>
    <svg className='w-4 h-4' fill='none' stroke='white' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'>
      <path d='M20 6L9 17l-5-5'/>
    </svg>
    Confirmar Presença
  </a>
</div>
          {/* Segunda imagem */}

          {/* Info */}
        </div>
      </div>
    </main>
  )
}

export default App
