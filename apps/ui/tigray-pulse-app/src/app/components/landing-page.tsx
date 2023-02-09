import { Component } from 'react';

import MainPage from './main-page';
import HeaderComponent from './header';
import FooterComponent from './footer';
import NavbarComponent from './navbar';

class LandingPage extends Component {
    state = {
      searchText: ''
    }

    handleSearchUpdate = (searchText: string) => {
      this.setState({searchText});
    }

    render() {
        return (
          <>
            <NavbarComponent handleSearchUpdate={this.handleSearchUpdate}/>
            <HeaderComponent />
            <MainPage searchText={this.state.searchText}/>
            <FooterComponent />
          </>
        );
    }

}

export default LandingPage;
