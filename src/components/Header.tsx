import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ClockCounterClockwise, Timer } from 'phosphor-react'
import Tooltip from '@mui/material/Tooltip'

import { HomeProps } from '@/pages/index.page'

import logoOAB from '../assets/logo-oabma.png'

type HeaderProps = {
  onChangeComponent: React.Dispatch<React.SetStateAction<HomeProps>>
}

export function Header({ onChangeComponent }: HeaderProps) {
  function handleSetPageStopwatch() {
    onChangeComponent('stopwatch')
  }

  function handleSetPageHistory() {
    onChangeComponent('history')
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-center drop-shadow-lg">
        <Image
          src={logoOAB}
          width={140}
          height={140}
          quality={100}
          priority
          alt=""
        />
        <span className="drop-shadow-lg font-extrabold text-xl -m-3">
          MARANHÃO
        </span>
      </div>

      <nav className="flex items-center gap-5">
        <Tooltip title="Cronômetro" placement="top" arrow>
          <Link href="" onClick={handleSetPageStopwatch}>
            <Timer
              size={30}
              className="text-zinc-100 drop-shadow-lg border-b-2 border-transparent hover:border-rose-700"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Histórico" placement="top" arrow>
          <Link href="" onClick={handleSetPageHistory}>
            <ClockCounterClockwise
              size={30}
              className="text-zinc-100 drop-shadow-lg border-b-2 border-transparent hover:border-rose-700"
            />
          </Link>
        </Tooltip>
      </nav>
    </div>
  )
}
