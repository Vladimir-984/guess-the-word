import React from 'react'
import { NavIdProps, Root } from '@vkontakte/vkui'
import { useLocation } from '@happysanta/router'
import { ViewStatistics } from '../views/ViewStatistics'
import { VIEWS } from 'router/views'

export const RootStatistics: React.FC<NavIdProps> = ({ nav }) => {
   const location = useLocation()
   const activeView = location.getViewId()

   return (
      <Root activeView={activeView} nav={nav}>
         <ViewStatistics nav={VIEWS.STATISTICS} />
      </Root>
   )
}
