import { useEffect } from 'react'
import { test } from '@my-app/common'
import { get } from './lib/api'

function App() {
  useEffect(() => {
    const doFetch = async () => {
      const hello = await get('http://localhost:3001/')
      console.log(hello)
    }
    doFetch()
  }, [])

  return (
    <div className="App">
      {test.name} | {test.number}
    </div>
  )
}

export default App
