import React from 'react';
import './menu-bar.scss';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { locale } from '../../config/locale';
import Cookies from 'universal-cookie';
import { ListenService } from '../../services/listen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class MenuBar extends React.Component {
    constructor() {
        super()

    }
    switchLanguage = (lang) => { //truyen bien
        let cookie = new Cookies()
        cookie.set('lang', lang)
        locale.setLanguage(lang) // update locale
        this.setState({}) // update request
        ListenService.switchLang(lang)
    }
    checkCurrentLangActive = (lang) => {
        let cookie = new Cookies()
        let lang_ = cookie.get('lang') || 'vi'
        if (lang_ === lang) {
            return <FontAwesomeIcon icon={faCheck} className='icon mr-1' />
        }
    }


    render() {
        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg" className='main-menu'>
                    <Navbar.Brand href="/">Green Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> {locale.home} </Nav.Link>

                            <NavDropdown title={locale.training} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Tiếng Hàn</NavDropdown.Item>
                                <NavDropdown.Item href="#"> Web Design</NavDropdown.Item>
                                <NavDropdown.Item href="#">Mobile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Fullstack Developer</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="./blog">{locale.blog}</Nav.Link>
                            <Nav.Link href="./about">{locale.about}</Nav.Link>
                            <Nav.Link href="./conct">{locale.contact}</Nav.Link>
                            <Nav.Link href="./tuyen-dung">{locale.hire}</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder={locale.search} className="mr-sm-2" />
                            <Button variant="outline-success" className="w100">{locale.search}</Button>
                        </Form>
                        <Nav>
                            <NavDropdown title={locale.lang} id="basic-nav-dropdown">
                                <NavDropdown.Item onSelect={() => this.switchLanguage('vi')} >
                                    {this.checkCurrentLangActive('vi')}
                                    {locale.vi}
                                </NavDropdown.Item>
                                <NavDropdown.Item onSelect={() => this.switchLanguage('en')}>
                                    {this.checkCurrentLangActive('en')}
                                    {locale.en}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">{locale.logout}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </React.Fragment>
        )
    }
}

export default MenuBar