import { FC } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Welcome from '../../views/Welcome'

const Router: FC = () => {
    return (
        <BrowserRouter>
      <Routes>
      <Route path="/" element={<Welcome />}></Route>

      </Routes>
      </BrowserRouter>
    )
}
export default Router
