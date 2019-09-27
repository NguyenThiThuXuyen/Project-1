import React from 'react';
import './App.css';
import MainRouter from './config/route';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MenuBar from './components/menu-bar/menu-bar';
import Profile from './pages/profile/profile';
import Cookies from 'universal-cookie';
import { locale } from './config/locale';
import { ListenService } from './services/listen';

class App extends React.Component {
  constructor() {
    super()
    let cookie = new Cookies()
    let lang = cookie.get('lang') === undefined ? 'vi' : cookie.get('lang')
    locale.setLanguage(lang)
  }
  componentDidMount() {
    let self = this
    ListenService.onChangeLang().subscribe(
      () => {
        self.setState({})
      }
    )
  }
  render() {
    return (
      <div className='App'>
        <MenuBar></MenuBar>
        {/* <Header></Header> */}
        <MainRouter></MainRouter>
        <Footer></Footer>
        <div className='footer'></div>
      </div>
    )
  }
}
export default App;