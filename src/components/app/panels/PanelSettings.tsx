import React from 'react'
import {
   Card,
   CardGrid,
   Group,
   NavIdProps,
   Panel,
   PanelHeader,
   PanelHeaderBack,
   PanelHeaderSubmit,
   SimpleCell,
   Switch,
} from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'

export const PanelSettings: React.FC<NavIdProps> = ({ nav }) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }
   const onClickSubmit = () => {}

   return (
      <Panel nav={nav}>
         <PanelHeader before={<PanelHeaderBack onClick={onClickBack} />} after={<PanelHeaderSubmit />}>
            Настройки
         </PanelHeader>
         <Group>
            <Group mode='plain' separator='hide'>
               <CardGrid size='l'>
                  <Card mode='tint'>
                     <SimpleCell after={<Switch />}>Звуки</SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         </Group>
      </Panel>
   )
}
