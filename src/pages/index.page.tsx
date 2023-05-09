import { useState } from 'react'

import { Header } from '@/components/Header'
import Stopwatch from './stopwatch/index.page'
import History from './history/index.page'

export type HomeProps = 'stopwatch' | 'history' | null

export default function Home() {
  const [changeComponent, setChangeComponent] = useState<HomeProps>('stopwatch')

  return (
    <main className="flex flex-col gap-10 my-40 mx-auto max-w-[1184px] p-14 border border-white bg-white/50 rounded-sm drop-shadow-2xl">
      <Header onChangeComponent={setChangeComponent} />
      {changeComponent === 'stopwatch' && <Stopwatch />}
      {changeComponent === 'history' && <History />}
    </main>
  )
}
