import React from 'react'
import { FixedLayout, Separator } from '@vkontakte/vkui'

export const PanelHeaderSeparator: React.FC = () => {
   return (
      <FixedLayout vertical='top'>
         <Separator wide />
      </FixedLayout>
   )
}
