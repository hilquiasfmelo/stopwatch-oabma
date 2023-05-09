import { Microphone, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const stopwatchFormSchema = z.object({
  people: z.string().min(1, 'Informe o nome completo.'),
  minutesAmount: z
    .number()
    .min(1, 'Início mínimo de 01 minuto.')
    .max(15, 'Limite máximo de 15 minutos.'),
})

type StopwatchFormData = z.infer<typeof stopwatchFormSchema>

export default function Stopwatch() {
  const [people, setPeople] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<StopwatchFormData>({
    resolver: zodResolver(stopwatchFormSchema),
    reValidateMode: 'onSubmit',
  })

  function handleStartStopwatch(data: StopwatchFormData) {
    setPeople(data.people)

    reset()
  }

  const filledField = watch('people')
  const isSubmitDisabled = !filledField

  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <form
        className="flex flex-col items-center gap-14"
        onSubmit={handleSubmit(handleStartStopwatch)}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-full flex items-center justify-center gap-2 text-sky-950 font-bold flex-wrap">
            <label htmlFor="people">Com a palavra o Senhor(a)</label>
            <input
              type="text"
              id="people"
              placeholder="Digite o nome completo"
              list="people-suggestions"
              {...register('people')}
              className="bg-transparent focus:border-sky-950 flex-1 border-0 h-10 text-center text-2xl text-sky-950 font-bold py-0 px-2 outline-none border-b-2 border-white"
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
              {...register('minutesAmount', { valueAsNumber: true })}
              className="bg-transparent focus:border-sky-950 border-0 h-10 w-16 text-center text-2xl text-sky-950 font-bold py-0 px-2 outline-none border-b-2 border-white"
            />

            <span>minutos.</span>
          </div>

          {/* Dispara um erro caso exista */}
          {errors.minutesAmount && (
            <span className="text-red-800 font-semibold text-sm">
              {errors.minutesAmount.message}
            </span>
          )}
        </div>

        {people && (
          <span className="text-slate-900 text-2xl font-semibold uppercase drop-shadow-xl flex items-center justify-center gap-2">
            {people}
            <Microphone
              size={35}
              weight="fill"
              className="text-red-700 drop-shadow-xl animate-pulse duration-75"
            />
          </span>
        )}

        <div className="font-roboto text-[10rem] leading-[8rem] flex gap-4 drop-shadow-xl">
          <span className="bg-sky-950 py-8 px-4 rounded-md border border-white">
            0
          </span>
          <span className="bg-sky-950 py-8 px-4 rounded-md border border-white">
            0
          </span>
          <span className="text-zinc-100 py-6 px-0 w-16 flex justify-center">
            :
          </span>
          <span className="bg-sky-950 py-8 px-4 rounded-md border border-white">
            0
          </span>
          <span className="bg-sky-950 py-8 px-4 rounded-md border border-white">
            0
          </span>
        </div>

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="w-full p-4 rounded-lg flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 font-semibold disabled:opacity-70 disabled:bg-green-600 disabled:cursor-not-allowed"
        >
          <Play size={24} weight="fill" />
          Iniciar
        </button>
      </form>
    </main>
  )
}
