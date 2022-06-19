import React from 'react'
import { Button, NavIdProps, Panel, PanelHeader, PanelHeaderButton } from '@vkontakte/vkui'
import { Icon28SettingsOutline } from '@vkontakte/icons'
import { useRouter } from '@happysanta/router'
import { PAGE_GAME, PAGE_OPTIONS } from 'router/pages'
import { ButtonGroup } from 'components/ui/ButtonGroup/ButtonGroup'
// import { animals } from 'words/animals'
// import { IWord } from 'types/word'
// import { cities } from 'words/cities'
// import { countries } from 'words/countries'
// import { food } from 'words/food'
// import { hobby } from 'words/hobby'
// import { nature } from 'words/nature'
// import { popular } from 'words/popular'
// import { vocabulary } from 'words/vocabulary'

// const MAP_LENGTH: { [key: number]: number } = {}

export const PanelMain: React.FC<NavIdProps> = ({ nav }) => {
   const router = useRouter()

   // React.useEffect(() => {
   //    calc(animals)
   //    calc(cities)
   //    calc(countries)
   //    calc(food)
   //    calc(hobby)
   //    calc(nature)
   //    calc(popular)
   //    calc(vocabulary)

   //    console.log(MAP_LENGTH)
   // }, [])

   // const calc = (arr: IWord[]) => {
   //    arr.forEach((w) => {
   //       if (MAP_LENGTH[w.word.length] !== undefined) {
   //          MAP_LENGTH[w.word.length]++
   //       } else {
   //          MAP_LENGTH[w.word.length] = 1
   //       }
   //    })
   // }

   const onClickOptions = () => {
      router.pushPage(PAGE_OPTIONS)
   }

   const onClickLevel = () => {
      router.pushPage(PAGE_GAME)
   }
   return (
      <Panel nav={nav}>
         <PanelHeader
            separator={false}
            after={
               <PanelHeaderButton aria-label='options' onClick={onClickOptions}>
                  <Icon28SettingsOutline />
               </PanelHeaderButton>
            }
         ></PanelHeader>
         <div style={{ flex: '1' }} />
         <ButtonGroup>
            <Button
               className='Button--round Button--active-opacity'
               stretched
               size='l'
               mode='primary'
               appearance='accent'
               activeEffectDelay={300}
               onClick={onClickLevel}
            >
               Уровень 1
            </Button>
            <Button
               className='Button--round Button--active-opacity'
               stretched
               size='l'
               mode='primary'
               appearance='accent'
               activeEffectDelay={300}
            >
               Новая игра
            </Button>
         </ButtonGroup>
      </Panel>
   )
}
