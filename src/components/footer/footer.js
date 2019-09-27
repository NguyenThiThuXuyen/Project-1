import React from 'react';
import './footer.scss';
import { locale } from '../../config/locale';

class FooterElement extends React.Component {
    render() {
        return (
            <div className="app-footer">
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href=""> Green Academy.com</a>
                </div>
            </div>
        )
    }
}

export default FooterElement;