//author @huntbao
'use strict'

import './index.styl'
import React from 'react'
import SideTabStore from '../../stores/sidetabstore'
import ReqTabStore from '../../stores/reqtabstore'
import Search from '../search/search.jsx'
import SideTab from '../sidetab/sidetab.jsx'
import History from '../history/history.jsx'
import Collections from '../collections/collections.jsx'
import ReqTab from '../reqtab/reqtab.jsx'

function getAppStates() {
    return Object.assign({}, SideTabStore.getAll(), ReqTabStore.getAll())
}

let Index = React.createClass({

    getInitialState: function () {
        return getAppStates()
    },

    componentDidMount() {
        SideTabStore.addChangeListener(this.onChange)
        ReqTabStore.addChangeListener(this.onChange)
    },

    componentWillUnmount() {
        SideTabStore.removeChangeListener(this.onChange)
        ReqTabStore.removeChangeListener(this.onChange)
    },

    render() {
        return (
            <div className="main-wrap">
                <div className="side">
                    <Search />
                    <SideTab sideTab={this.state.sideTab} />
                    <History sideTab={this.state.sideTab} />
                    <Collections sideTab={this.state.sideTab} />
                </div>
                <div className="bd">
                    <ReqTab tabs={this.state.reqTabs} />
                </div>
            </div>
        )
    },

    onChange() {
        this.setState(getAppStates())
    }

})


export default Index