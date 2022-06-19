import { classNames } from '@vkontakte/vkui'
import React from 'react'
import './Key.css'

interface KeyProps {}
export const Key: React.FC<KeyProps> = ({ children }) => {
   return <div className={classNames('Key')}>{children}</div>
}
