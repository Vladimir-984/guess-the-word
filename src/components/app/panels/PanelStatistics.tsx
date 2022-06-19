import { Icon28Notification, Icon28Notifications } from '@vkontakte/icons'
import { Group, Header, NavIdProps, Panel, PanelHeader, SimpleCell, Switch } from '@vkontakte/vkui'
import React from 'react'

export const PanelStatistics: React.FC<NavIdProps> = ({ nav }) => {
   return (
      <Panel nav={nav}>
         <PanelHeader separator={false}></PanelHeader>
         <Group>
            {/* <Group separator='hide' mode='plain' header={<Header>Настройки</Header>}></Group>
            <Group mode='plain'>
               <SimpleCell disabled before={<Icon28Notification />} after={<Switch />}>
                  Оповещения
               </SimpleCell>
               
            </Group> */}
         </Group>
      </Panel>
   )
}
