import React from 'react'
import { Tabbar as VKUITabbar, TabbarItem } from '@vkontakte/vkui'
import { Icon28HomeOutline, Icon28Profile, Icon28StatisticsOutline } from '@vkontakte/icons'
import { useLocation, useRouter } from '@happysanta/router'
import { ROOTS } from 'router/roots'
import { PAGE_PROFILE, PAGE_MAIN, PAGE_STATISTICS } from 'router/pages'
import { PANELS } from 'router/panels'

const MAP_PAGES = {
   [ROOTS.MAIN]: PAGE_MAIN,
   [ROOTS.STATISTICS]: PAGE_STATISTICS,
}

export const Tabbar: React.FC = () => {
   const router = useRouter()
   const location = useLocation()
   const activeStory = location.getRootId()
   const activePanel = location.getPanelId()

   if (activePanel === PANELS.GAME) return null

   const onClickStory = (story: string) => (e: React.MouseEvent) => {
      if (activeStory === story) {
         if (window.scrollY >= 30) {
            return window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
         }
         return
         // return router.popPageTo(PAGE_PROFILE)
      }
      return router.pushPage(MAP_PAGES[story] ?? PAGE_MAIN)
      // router.pushPage(page)
   }

   return (
      <VKUITabbar shadow itemsLayout='vertical'>
         <TabbarItem text='Главная' selected={activeStory === ROOTS.MAIN} onClick={onClickStory(ROOTS.MAIN)}>
            <Icon28HomeOutline />
         </TabbarItem>
         <TabbarItem
            text='Статистика'
            selected={activeStory === ROOTS.STATISTICS}
            onClick={onClickStory(ROOTS.STATISTICS)}
         >
            <Icon28StatisticsOutline />
         </TabbarItem>
         {/* <TabbarItem text='Профиль' selected={activeStory === ROOTS.PROFILE} onClick={onClickStory(ROOTS.PROFILE)}>
            <Icon28Profile />
         </TabbarItem> */}
      </VKUITabbar>
   )
}
