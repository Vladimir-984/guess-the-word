import React from 'react'
import { useLocation } from '@happysanta/router'
import { Epic } from '@vkontakte/vkui'
import { Tabbar } from './Tabbar'

import { ROOTS } from 'router/roots'

import { RootMain } from './roots/RootMain'
import { RootStatistics } from './roots/RootStatistics'

export const Main: React.FC = () => {
   const activeStory = useLocation().getRootId()

   React.useEffect(() => {
      import('eruda/index').then((eruda) => {})
   }, [])
   return (
      <Epic activeStory={activeStory} tabbar={<Tabbar />}>
         <RootMain nav={ROOTS.MAIN} />
         <RootStatistics nav={ROOTS.STATISTICS} />
      </Epic>
   )
}
