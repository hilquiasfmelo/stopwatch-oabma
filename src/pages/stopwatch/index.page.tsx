import { Play } from 'phosphor-react'

export default function Stopwatch() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <form action="" className="flex flex-col items-center gap-20">
        <div className="w-full flex items-center justify-center gap-2 text-zinc-700 font-bold flex-wrap">
          <label htmlFor="people">Com a palavra o Senhor(a)</label>
          <input
            type="text"
            id="people"
            placeholder="Digite o nome completo"
            list="people-suggestions"
            className="bg-transparent focus:border-zinc-950 flex-1 border-0 h-10 text-center text-2xl text-zinc-950 font-bold py-0 px-2 outline-none border-b-2 border-white"
          />

          <datalist id="people-suggestions">
            <option value="Hilquias Ferreira Melo" />
            <option value="Tasso Chaves de Oliveira" />
            <option value="Ivanilson Verde das Neves" />
            <option value="Eliudo Lopes Soares" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <input
            type="number"
            id="minutesAmount"
            placeholder="00"
            min={3}
            max={10}
            className="bg-transparent focus:border-zinc-950 border-0 h-10 w-16 text-center text-2xl text-zinc-950 font-bold py-0 px-2 outline-none border-b-2 border-white"
          />

          <span>minutos.</span>
        </div>

        <div className="font-roboto text-[10rem] leading-[8rem] flex gap-4 drop-shadow-xl">
          <span className="bg-sky-500 py-8 px-4 rounded-md border border-white">
            0
          </span>
          <span className="bg-sky-500 py-8 px-4 rounded-md border border-white">
            0
          </span>
          <span className="text-zinc-100 py-6 px-0 w-16 flex justify-center">
            :
          </span>
          <span className="bg-sky-500 py-8 px-4 rounded-md border border-white">
            0
          </span>
          <span className="bg-sky-500 py-8 px-4 rounded-md border border-white">
            0
          </span>
        </div>

        <button
          type="submit"
          disabled
          className="w-full p-4 rounded-lg flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 font-semibold disabled:opacity-70 disabled:bg-green-600 disabled:cursor-not-allowed"
        >
          <Play size={24} />
          Iniciar
        </button>
      </form>
    </main>
  )
}
