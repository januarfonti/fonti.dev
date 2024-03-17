'use client'

import React from 'react'
import Typed from 'typed.js'

function Typing() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    // @ts-ignore
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000
    })
    // @ts-ignore
    return () => typed.current.destroy()
  }, [])

  return (
    <h1 className="font-medium text-2xl mb-8 tracking-tighter">
      hello, i&apos;m fonti -{' '}
      <ul id="bios" className="hidden">
        <li>a cyclist.</li>
        <li>a coffee lover.</li>
        <li>a traveller.</li>
        <li>a photography enthusiast.</li>
        <li>a web developer.</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </h1>
  )
}

export default Typing