import React from 'react'
import { View } from '@vkontakte/vkui'
// import { useLocation } from '@happysanta/router'
// import { VIEWS } from 'router/views'

export const ViewOnboarding: React.FC = () => {
   const activePanel = ''
   // const activePanel = useLocation().getViewActivePanel(VIEWS.ONBOARDING) || ''
   return <View activePanel={activePanel}></View>
}
