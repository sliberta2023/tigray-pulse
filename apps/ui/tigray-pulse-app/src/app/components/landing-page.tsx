import MainPage from './main-page';
import Navbar from './navbar';
import Header from './header';
import Footer from './footer';
import ContentPage from './content-page';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Header />
      <MainPage>
        <ContentPage />
      </MainPage>
      <Footer />
    </>
  );
}

export default LandingPage;
