import React from 'react'
import { ModalRoot as VKUIModalRoot } from '@vkontakte/vkui'
import { useLocation } from '@happysanta/router'

export const ModalRoot: React.FC = () => {
   const activeModal = useLocation().getModalId()

   return <VKUIModalRoot activeModal={activeModal}></VKUIModalRoot>
}
