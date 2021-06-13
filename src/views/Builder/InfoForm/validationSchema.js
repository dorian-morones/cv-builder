import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  subtitle: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  birthdate: Yup.date(),
  address1: Yup.string(),
  address2: Yup.string(),
  city: Yup.string().required('Required'),
  zipcode: Yup.string(),

  phoneNumber: Yup.string().required('Required'),
  website: Yup.string().url(),

  email: Yup.string().email('Invalid email').required('Required'),

  objectiveHeadign: Yup.string(),
  objectiveSummary: Yup.string(),
});