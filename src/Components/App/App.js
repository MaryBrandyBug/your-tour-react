import './App.scss';

import Header from '../Header';
import ChooseTourSection from '../ChooseTourSection';
import Form from '../Form';
import ReviewsSection from '../ReviewsSection';
import TravelPhotoSection from '../TravelPhotoSection';
import TravelStoriesSection from '../TravelStoriesSection';
import MailSection from '../MailSection';
import Footer from '../Footer';

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
      <Footer />
    </div>
  );
}

export default App;
