import './App.scss';

import Header from '../Header/Header';
import ChooseTourSection from '../ChooseTourSection/ChooseTourSection';
import Form from '../Form/Form';
// import Reviews from './components/ReviewsSection/Reviews/Reviews';
// import TravelPhoto from './components/TravelPhotoSection/TravelPhoto';
// import TravelStories from './components/TravelStoriesSection/TravelStories/TravelStories';
// import MailSection from './components/MailSection/MailSection';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ChooseTourSection />
      <Form />
      {/* <Reviews /> */}
      {/* <TravelPhoto /> */}
      {/* <TravelStories /> */}
      {/* <MailSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
