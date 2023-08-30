import classNames from 'classnames/bind';
import styles from './App.scss';

import Header from '../Header';
import ChooseTourSection from '../ChooseTourSection';
import Form from '../Form';
import ReviewsSection from '../ReviewsSection';
import TravelPhotoSection from '../TravelPhotoSection';
import TravelStoriesSection from '../TravelStoriesSection';
import MailSection from '../MailSection';
import Footer from '../Footer';

function App() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('wrapper')}>
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
