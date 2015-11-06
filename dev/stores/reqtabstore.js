//author @huntbao
'use strict'

import AppConstants from '../constants/constants'
import AppDispatcher from '../dispatcher/dispatcher'
import Events from 'events'

const CHANGE_EVENT = 'change'
const DEFAULT_ACTIVE_INDEX = 0
const DEFAULT_ITEMS = {
    //url: 'http://www.baidu.com/',
    //url: 'https://note.sdo.com/notecategory/list?_=1446469270609',
    url: 'http://nei.hz.netease.com/api/dashboard/getAllData',
    rurl: '',// rurl is the request url, it's path variable is replaced (done in tabConActions.checkReqSend(), see@reqtabconstore.js )
    method: 'POST',
    name: 'New tab',
    urlError: false
}

let tabs = {
    items: [Object.assign({}, DEFAULT_ITEMS)],
    activeIndex: DEFAULT_ACTIVE_INDEX
}

let actions = {
    changeIndex(activeIndex) {
        tabs.activeIndex = activeIndex
    },

    addTab() {
        tabs.items.push(Object.assign({}, DEFAULT_ITEMS))
    },

    removeTab(tabIndex) {
        tabs.items.splice(tabIndex, 1)
    },

    changeTab(tab) {
        tab.name = tab.name || DEFAULT_ITEMS.name
        tabs.items[tabs.activeIndex] = Object.assign(tabs.items[tabs.activeIndex], tab)
    }
}


let ReqTabStore = Object.assign({}, Events.EventEmitter.prototype, {

    getAll() {
        return {
            reqTab: {
                tabs: tabs.items,
                activeIndex: tabs.activeIndex
            }
        }
    },

    getActiveIndex() {
        return tabs.activeIndex
    },

    getTab(tabIndex) {
        return tabs.items[tabIndex]
    },

    getTabUrl(tabIndex) {
        return tabs.items[tabIndex].url
    },

    setTabUrl(tabIndex, tabUrl) {
        tabs.items[tabIndex].url = tabUrl
        tabs.items[tabIndex].name = tabUrl || DEFAULT_ITEMS.name
    },

    emitChange() {
        this.emit(CHANGE_EVENT)
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
})

AppDispatcher.register((action) => {

    switch (action.actionType) {
        case AppConstants.REQ_TAB_CHANGE_ACTIVE_INDEX:
            actions.changeIndex(action.activeIndex)
            ReqTabStore.emitChange()
            break

        case AppConstants.REQ_TAB_ADD:
            actions.addTab()
            ReqTabStore.emitChange()
            break

        case AppConstants.REQ_TAB_REMOVE:
            actions.removeTab(action.tabIndex)
            ReqTabStore.emitChange()
            break

        case AppConstants.REQ_TAB_CHANGE:
            actions.changeTab(action.tab)
            ReqTabStore.emitChange()
            break

        default:
            break
    }

})

export default ReqTabStore
