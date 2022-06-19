import React from 'react'
import { ButtonGroup as VKUIButtonGroup, classNames } from '@vkontakte/vkui/'

import './ButtonGroup.css'

interface ButtonGroupProps {}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
   return (
      <div className={classNames('ButtonGroup')}>
         <VKUIButtonGroup stretched mode='vertical' gap='m'>
            {children}
         </VKUIButtonGroup>
      </div>
   )
}
