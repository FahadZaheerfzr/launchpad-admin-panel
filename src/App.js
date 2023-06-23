import { BrowserRouter as Router } from 'react-router-dom'
import WebRouter from './route'
import { ModalProvider } from 'react-simple-modal-provider'
import modals from './components/Modal'

function App() {
  return (
    <div className="">
        <ModalProvider value={modals}>
            <Router>
              <WebRouter />
            </Router>
        </ModalProvider>
    </div>
  )
}

export default App
