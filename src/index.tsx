import * as React from 'react'
import { HeaderWithMenu } from './components'

interface Props {
  text: string
}

// export { HeaderWithMenu, HeaderWithSearch }

export function ExampleComponent({ text }: Props) {
  return (
    <React.Fragment>
      <HeaderWithMenu />
      <h1>{text}</h1>
    </React.Fragment>
  )
}
