import React from 'react'
import {
   classNames,
   NavIdProps,
   Panel,
   PanelHeader,
   PanelHeaderBack,
   PanelHeaderButton,
   PromoBanner,
   PromoBannerProps,
} from '@vkontakte/vkui'
import { Icon28SettingsOutline } from '@vkontakte/icons'
import { useRouter } from '@happysanta/router'
import { PAGE_OPTIONS } from 'router/pages'
import { Keyboard } from 'components/ui/Keyboard/Keyboard'

export const PanelGame: React.FC<NavIdProps> = ({ nav }) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }
   const onClickOptions = () => {
      router.pushPage(PAGE_OPTIONS)
   }
   return (
      <Panel nav={nav} className={classNames('Panel--no-tabbar')}>
         <PanelHeader
            before={<PanelHeaderBack onClick={onClickBack} />}
            after={
               <PanelHeaderButton onClick={onClickOptions} aria-label='s'>
                  <Icon28SettingsOutline />
               </PanelHeaderButton>
            }
            separator={false}
         >
            Уровень 1
         </PanelHeader>

         <div style={{ display: 'flex' }}>
            {Array.from(Array(12)).map((_) => {
               const size = (window.innerWidth - 15 * 4) / 15
               return (
                  <div style={{ width: size, height: size, marginLeft: 4, borderRadius: 3, border: '1px solid' }}>
                     A
                  </div>
               )
            })}
         </div>
         <div style={{ flex: '1' }} />
         <Keyboard />
         <PromoBanner bannerData={bannerData} onClose={() => {}} />
      </Panel>
   )
}

const bannerData: PromoBannerProps['bannerData'] = {}
