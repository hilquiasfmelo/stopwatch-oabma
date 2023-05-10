import { HandPalm, Microphone, Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { differenceInSeconds } from 'date-fns'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { z } from 'zod'

const stopwatchFormSchema = z.object({
  people: z.string().min(1, 'Informe o nome completo.'),
  minutesAmount: z
    .number()
    .min(1, 'Início mínimo de 01 minuto.')
    .max(15, 'Limite máximo de 15 minutos.'),
})

type StopwatchFormData = z.infer<typeof stopwatchFormSchema>

interface ICycle {
  id: string
  people: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
}

export default function Stopwatch() {
  const [cycles, setCycles] = useState<ICycle[]>([])
  const [activeCycleID, setActiveCycleID] = useState<string | null>(null)
  // Armazena a quantidade de segundos que já se passaram desde do ínico do ciclo
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

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

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleID)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  function handleStartStopwatch(data: StopwatchFormData) {
    const newCycle: ICycle = {
      id: uuid(),
      people: data.people,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleID(newCycle.id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleID) {
          setActiveCycleID(null)

          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = minutesAmount.toString().padStart(2, '0')
  const seconds = secondsAmount.toString().padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - ${activeCycle?.people}`
    }
  }, [minutes, seconds, activeCycle])

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
              disabled={!!activeCycle}
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
              disabled={!!activeCycle}
              required
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

        {/* Mostra o nome da pessoa com a vez no momento */}
        {activeCycle?.people && (
          <span className="text-slate-900 text-2xl font-semibold uppercase drop-shadow-xl flex items-center justify-center gap-2">
            {activeCycle.people}
            <Microphone
              size={35}
              weight="fill"
              className="text-red-700 drop-shadow-xl animate-pulse duration-75"
            />
          </span>
        )}

        <div className="font-roboto text-[10rem] leading-[8rem] flex gap-4 drop-shadow-xl">
          <span className="bg-sky-950 py-8 px-4 rounded-md border border-white">
            {minutes[0]}
          </span>
          <span className="bg-sky-950 py-8 px-4 rounded-md border border-white">
            {minutes[1]}
          </span>
          <span className="text-zinc-100 py-6 px-0 w-16 flex justify-center">
            :
          </span>
          <span className="bg-sky-950 py-8 px-4 rounded-md border border-white">
            {seconds[0]}
          </span>
          <span className="bg-sky-950 py-8 px-4 rounded-md border border-white">
            {seconds[1]}
          </span>
        </div>

        {activeCycle ? (
          <button
            type="button"
            onClick={handleInterruptCycle}
            className="w-full p-4 rounded-lg flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 font-semibold disabled:opacity-70 disabled:bg-green-600 disabled:cursor-not-allowed"
          >
            <HandPalm size={24} weight="fill" />
            Interromper
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="w-full p-4 rounded-lg flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 font-semibold disabled:opacity-70 disabled:bg-green-600 disabled:cursor-not-allowed"
          >
            <Play size={24} weight="fill" />
            Iniciar
          </button>
        )}
      </form>
    </main>
  )
}
