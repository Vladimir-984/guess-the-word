import React from 'react'
import { NavIdProps, View } from '@vkontakte/vkui'
import { useLocation } from '@happysanta/router'

import { VIEWS } from 'router/views'
import { PANELS } from 'router/panels'

import { PanelMain } from '../panels/PanelMain'
import { PanelGame } from '../panels/PanelGame'

export const ViewMain: React.FC<NavIdProps> = ({ nav }) => {
   const activePanel = useLocation().getViewActivePanel(VIEWS.MAIN) || ''
   return (
      <View activePanel={activePanel} nav={nav}>
         <PanelMain nav={PANELS.MAIN} />
         <PanelGame nav={PANELS.GAME} />
      </View>
   )
}
