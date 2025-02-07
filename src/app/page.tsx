'use client'
import Loadable from '@loadable/component'
import withUserContainer from './global/containers/WithUserContainer'

const MainContainer = loadable(() => import('./main/containers/MainContainer'))

const MainPage = () => {
  return withUserContainer(MainContainer)
}

export default MainPage
