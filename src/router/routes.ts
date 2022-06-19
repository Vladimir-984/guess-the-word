import { Page, RouteList } from '@happysanta/router'
import { PAGE_GAME, PAGE_MAIN, PAGE_OPTIONS, PAGE_PROFILE, PAGE_SETTINGS, PAGE_STATISTICS } from './pages'
import { PANELS } from './panels'
import { ROOTS } from './roots'
import { VIEWS } from './views'

export const routes: RouteList = {
   [PAGE_MAIN]: new Page(PANELS.MAIN, VIEWS.MAIN, ROOTS.MAIN),
   [PAGE_GAME]: new Page(PANELS.GAME, VIEWS.MAIN, ROOTS.MAIN),
   [PAGE_OPTIONS]: new Page(PANELS.OPTIONS, VIEWS.OPTIONS, ROOTS.MAIN),
   [PAGE_SETTINGS]: new Page(PANELS.SETTINGS, VIEWS.OPTIONS, ROOTS.MAIN),

   [PAGE_STATISTICS]: new Page(PANELS.STATISTICS, VIEWS.STATISTICS, ROOTS.STATISTICS),
}
