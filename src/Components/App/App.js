import './App.scss';

import Header from '../Header/Header';
import ChooseTourSection from '../ChooseTourSection/ChooseTourSection';
import Form from '../Form/Form';
import ReviewsSection from '../ReviewsSection/ReviewsSection';
import TravelPhotoSection from '../TravelPhotoSection/TravelPhotoSection';
import TravelStoriesSection from '../TravelStoriesSection/TravelStoriesSection';
import MailSection from '../MailSection/MailSection';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ChooseTourSection />
      <Form />
      <ReviewsSection />
      <TravelPhotoSection />
      <TravelStoriesSection />
      <MailSection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
