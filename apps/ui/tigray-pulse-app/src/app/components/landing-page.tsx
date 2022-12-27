import { Component } from 'react';

import MainPage from './main-page';
import ContentPage from './content-page';
import HeaderComponent from './header';
import FooterComponent from './footer';
import NavbarComponent from './navbar';

class LandingPage extends Component {
    render() {
        return (
          <>
            <NavbarComponent />
            <HeaderComponent />
            <MainPage>
              <ContentPage />
            </MainPage>
            <FooterComponent />
          </>
        );
    }

}

export default LandingPage;
