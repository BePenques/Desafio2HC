import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Clientes from './pages/Clientes';
import Produtos from './pages/Produtos';
import Home from './pages/Home';
import Navbar from './components/Navbar'

export default function Routes(){
    return(
    
        <BrowserRouter>
           <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/clientes' exact component={Clientes}/>
                <Route path='/produtos' exact component={Produtos}/>
            </Switch>
        </BrowserRouter>
       
    )
}