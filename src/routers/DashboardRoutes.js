import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AboutUs } from '../components/AboutUs/AboutUs'
import { AñadirProductos } from '../components/AñadirProducts/AñadirProductos'
import { MenuScreen } from '../components/Menu/MenuScreen'
import { Navbar } from '../components/ui/navBar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            
            <div>
                <Switch>
                    <Route exact path="/menu" component={MenuScreen}/>
                    <Route exact path="/añadir" component={AñadirProductos}/>
                    <Route exact path="/aboutus" component={AboutUs}/>
                    
                    <Redirect to="/menu"/>
                </Switch>
            </div>
        </>
    )
}
