import React from 'react'
import { useRouter } from '@happysanta/router'
import { Card, CardGrid, Group, NavIdProps, Panel, PanelHeader, PanelHeaderSubmit, SimpleCell } from '@vkontakte/vkui'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { PAGE_SETTINGS } from 'router/pages'

export const PanelOptions: React.FC<NavIdProps> = ({ nav }) => {
   const router = useRouter()

   const onClickSubmit = () => {
      router.popPage()
   }
   return (
      <Panel nav={nav}>
         <PanelHeader separator={false} after={<PanelHeaderSubmit onClick={onClickSubmit} />}>
            Опции
         </PanelHeader>
         <PanelHeaderSeparator />
         <Group>
            <SimpleCell
               expandable
               onClick={() => {
                  router.pushPage(PAGE_SETTINGS)
               }}
            >
               Настройки
            </SimpleCell>
            {/* <CardGrid size='l'>
               <Card>
               </Card>
            </CardGrid> */}
         </Group>
      </Panel>
   )
}
