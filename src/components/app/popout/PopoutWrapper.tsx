import { useLocation } from '@happysanta/router'
import { NavIdProps } from '@vkontakte/vkui'
import React from 'react'

export const PopoutWrapper: React.FC = ({ children }) => {
   const popupId = useLocation().getPopupId()
   const Childs = React.useRef(React.Children.toArray(children) as React.ReactElement<NavIdProps>[])
   const [activePopout, setActivePopout] = React.useState<React.ReactElement | null>(null)

   React.useEffect(() => {
      const idx = Childs.current.findIndex((child) => child.props.nav === popupId)
      if (idx > -1) {
         setActivePopout(Childs.current[idx])
      } else {
         setActivePopout(null)
      }
   }, [popupId])

   return activePopout
}
