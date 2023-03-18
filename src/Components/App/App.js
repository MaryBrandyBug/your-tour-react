import './App.scss';

import Header from '../Header/Header';
import ChooseTourSection from '../ChooseTourSection/ChooseTourSection';
import Form from '../Form/Form';
import ReviewsSection from '../ReviewsSection/ReviewsSection';
import TravelPhotoSection from '../TravelPhotoSection/TravelPhotoSection';
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
      <ReviewsSection />
      <TravelPhotoSection />
      {/* <TravelStories /> */}
      {/* <MailSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
