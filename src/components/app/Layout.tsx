import React from 'react'
import { SplitCol, SplitLayout } from '@vkontakte/vkui'
import { useAdaptivityIsDesktop } from '@vkontakte/vkui/dist/hooks/useAdaptivity'
import { ModalRoot } from './modal/ModalRoot'
import { PopoutRoot } from './popout/PopoutRoot'

export const Layout: React.FC = ({ children }) => {
   const isDesktop = useAdaptivityIsDesktop()

   return (
      <SplitLayout modal={<ModalRoot />} popout={<PopoutRoot />}>
         <SplitCol animate={!isDesktop}>{children}</SplitCol>
      </SplitLayout>
   )
}
