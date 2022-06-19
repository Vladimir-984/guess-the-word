import React from 'react'
import { AdaptivityProvider, AppRoot, ConfigProvider, Platform, WebviewType } from '@vkontakte/vkui'
import bridge, { VKBridgeSubscribeHandler } from '@vkontakte/vk-bridge'

export const VKUIProvider: React.FC = ({ children }) => {
   // const [appearance, setAppearance] = React.useState<AppearanceType>('light')

   const bridgeHandler = React.useCallback<VKBridgeSubscribeHandler>((e) => {
      if (e.detail.type.startsWith('VK')) {
         console.log(e.detail.type, ' : ', e.detail.data)
      }

      switch (e.detail.type) {
         case 'VKWebAppUpdateConfig': {
            // setAppearance(e.detail.data.)
         }
      }
   }, [])

   React.useEffect(() => {
      bridge.subscribe(bridgeHandler)

      bridge.send('VKWebAppInit')

      return () => {
         bridge.unsubscribe(bridgeHandler)
      }
   }, [bridgeHandler])

   return (
      <ConfigProvider
         platform={Platform.IOS}
         webviewType={WebviewType.INTERNAL}
         // appearance={appearance}
      >
         <AdaptivityProvider>
            <AppRoot mode='full' noLegacyClasses scroll='global'>
               {children}
            </AppRoot>
         </AdaptivityProvider>
      </ConfigProvider>
   )
}
