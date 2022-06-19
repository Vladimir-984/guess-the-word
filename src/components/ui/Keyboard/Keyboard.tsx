import React from 'react'
import { classNames } from '@vkontakte/vkui'

import './Keyboard.css'
interface KeyboardProps {}

export const Keyboard: React.FC<KeyboardProps> = () => {
   return <div className={classNames('Keyboard')}></div>
}
