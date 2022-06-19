import React from 'react'
import { NavIdProps, View } from '@vkontakte/vkui'
import { useLocation } from '@happysanta/router'

import { VIEWS } from 'router/views'
import { PANELS } from 'router/panels'

import { PanelStatistics } from '../panels/PanelStatistics'

export const ViewStatistics: React.FC<NavIdProps> = ({ nav }) => {
   const activePanel = useLocation().getViewActivePanel(VIEWS.STATISTICS) || ''
   return (
      <View activePanel={activePanel} nav={nav}>
         <PanelStatistics nav={PANELS.STATISTICS} />
      </View>
   )
}
