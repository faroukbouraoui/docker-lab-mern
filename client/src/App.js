import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Signup from './components/Signup';
import Signin from './components/Signin';

import UserRoute from './components/UserRoute';
import AdminRoute from './components/AdminRoute';
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard';
import Services from './components/Services';
import Addservice from './components/Addservice';
import UpdateService from './components/UpdateService';
import Offres from './components/Offres';
import AddOffre from './components/AddOffre';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';
import UpdateBlog from './components/UpdateBlog';
import Contact from './components/Contact';
import AddTemplate from './components/AddTemplate'
import templates from './components/Tempteles'
import AdminCategory from './components/AdminCategory';
import AddCategory from './components/AddCategory';

import Home from './components/pages/HomePage/Home';
import GlobalProcess from './components/GlobalProcess';
import StepContext from './StepContext'
import Leads from './components/Leads';








function App() {

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('user'));
		if (items) {
		  console.log(items)
		}else{
			console.log('empty')
		}
	  }, []);

  return (
		<BrowserRouter>
		
			<main>
		
				<Switch>
			
					
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/signin' component={Signin} />
					
					
          <AdminRoute  path="/services" component={Services} />
          <AdminRoute  path="/post-service" component={Addservice} />  
          <AdminRoute path="/updateservice/:id" component={UpdateService} />
		  <AdminRoute path="/offres" component={Offres} />
		  <AdminRoute path="/leads" component={Leads} />
          <AdminRoute path="/add-offre" component={AddOffre}/>
          <AdminRoute path='/blogs' component={Blogs} />
          <AdminRoute path='/add-blog' component={AddBlog}  />
          <AdminRoute path='/update-blog/:id' component={UpdateBlog} />
		  <AdminRoute path='/contact' component={Contact} />
		  <AdminRoute path="/Add-template" component={AddTemplate} />
		  <AdminRoute path="/templates" component={templates} />
		  <AdminRoute path ="/categories" component={AdminCategory} />
		  <AdminRoute path="/add-category" component={AddCategory} />
	<Route exact path='/' component={UserDashboard} />
	  <AdminRoute
		  exact
		  path='/admin'
		  component={AdminDashboard}
	  />
	  <StepContext>
      <Route  path="/process" ><GlobalProcess /></Route>
      </StepContext>
			
				</Switch>
			</main>
		</BrowserRouter>
	);
}

export default App ;
