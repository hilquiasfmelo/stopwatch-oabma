import { Status } from '@/components/Status'
import { getCurrentDateInfo } from '@/utils/get-current-date-info'

export default function History() {
  const { day, fullMonth, year } = getCurrentDateInfo()

  return (
    <main className="flex-1 p-2 flex flex-col">
      <h1 className="text-lg text-sky-950 font-bold text-end">
        Ordem dos Advogados do Brasil Seccional do Maranhão
      </h1>
      <h3 className="text-end text-sm text-white">
        São Luís, {day} de {fullMonth} de {year}
      </h3>

      <span className="text-lg text-sky-950 font-bold">
        Consulta de Histórico
      </span>

      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="bg-sky-950 text-left p-4 text-sm rounded-tl-lg">
                Advogado(a)
              </th>
              <th className="bg-sky-950 text-left p-4 text-sm">Duração</th>
              <th className="bg-sky-950 text-left p-4 text-sm">Início</th>
              <th className="bg-sky-950 text-left p-4 text-sm rounded-tr-lg">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-white/90">
              <td className="bg-white/70 border-t-[1px] border-sky-950 p-4 text-sm text-zinc-900 font-bold w-[50%]">
                Kaio Vyctor Saraiva Cruz
              </td>
              <td className="bg-white/70 border-t-[1px] border-sky-950 p-4 text-sm text-zinc-700">
                5 minutos
              </td>
              <td className="bg-white/70 border-t-[1px] border-sky-950 p-4 text-sm text-zinc-700">
                Há cerca de 2 minutos
              </td>
              <td className="bg-white/70 border-t-[1px] border-sky-950 p-4 flex items-start text-left text-sm text-zinc-900 font-bold">
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>

            <tr className="hover:bg-white/90">
              <td className="bg-white/70 border-t-[1px] border-sky-950 p-4 text-sm text-zinc-900 font-bold w-[50%]">
                Kaio Vyctor Saraiva Cruz
              </td>
              <td className="bg-white/70 border-t-[1px] border-sky-950 p-4 text-sm text-zinc-700">
                5 minutos
              </td>
              <td className="bg-white/70 border-t-[1px] border-sky-950 p-4 text-sm text-zinc-700">
                Há cerca de 2 minutos
              </td>
              <td className="bg-white/70 border-t-[1px] border-sky-950 p-4 flex items-start text-sm text-zinc-900 font-bold">
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>

            <tr className="hover:bg-white/90">
              <td className="bg-white/70 border-t-[1px] border-sky-950 p-4 text-sm text-zinc-900 font-bold w-[50%]">
                Kaio Vyctor Saraiva Cruz
              </td>
              <td className="bg-white/70 border-t-[1px] border-sky-950 p-4 text-sm text-zinc-700">
                5 minutos
              </td>
              <td className="bg-white/70 border-t-[1px] border-sky-950 p-4 text-sm text-zinc-700">
                Há cerca de 2 minutos
              </td>
              <td className="bg-white/70 border-t-[1px] border-sky-950 flex items-start p-4 text-sm text-zinc-900 font-bold">
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
