import { useLocation } from '@happysanta/router'
import { NavIdProps, View } from '@vkontakte/vkui'
import React from 'react'
import { PANELS } from 'router/panels'
import { VIEWS } from 'router/views'
import { PanelOptions } from '../panels/PanelOptions'
import { PanelSettings } from '../panels/PanelSettings'

export const ViewOptions: React.FC<NavIdProps> = ({ nav }) => {
   const activePanel = useLocation().getViewActivePanel(VIEWS.OPTIONS) || PANELS.OPTIONS
   return (
      <View activePanel={activePanel} nav={nav}>
         <PanelOptions nav={PANELS.OPTIONS} />
         <PanelSettings nav={PANELS.SETTINGS} />
      </View>
   )
}
