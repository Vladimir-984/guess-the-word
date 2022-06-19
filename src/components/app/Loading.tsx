import { Panel, Spinner } from '@vkontakte/vkui'
import React from 'react'

export const Loading: React.FC = () => {
   return (
      <Panel centered>
         <Spinner size='large' />
      </Panel>
   )
}
