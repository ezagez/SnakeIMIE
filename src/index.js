import React from 'react'
import { render } from 'react-dom'
import Button from 'components/Button'
import Input from 'components/Input'

render(
  <div>
    <h1>Hello World !</h1>
    <Button onCLick={() => console.log('Hello from "App" !')} />
    <Input name="test" />
  </div>,
    document.querySelector('#mount')
)
