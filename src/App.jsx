import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Blog } from './Blog.jsx'
const queryClient = new QueryClient()

export function App() {
  return (
<<<<<<< HEAD
    <QueryClientProvider client={queryClient}>
      <Blog />
    </QueryClientProvider>
=======
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React + Node.js</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
>>>>>>> 3447941e (chore: start ch4)
  )
}
