import * as yup from 'yup';
import 'yup-phone-lite';

export default yup.object().shape({
  name: yup.string().required(),
  phoneNumber: yup.string().phone('RU').required(),
  direction: yup.string().required(),
  email: yup.string().email().required(),
  comment: yup.string(),
  dateSince: yup.date().min(new Date()).required(),
  dateUntil: yup.date().min(yup.ref('dateSince')).required(),
});
