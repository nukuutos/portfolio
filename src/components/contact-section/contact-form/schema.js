import * as Yup from 'yup';

const name = Yup.string()
  .trim()
  .required('Required!')
  .min(2, 'Minimum length is 2 symbols!')
  .max(40, 'Maximum length is 40 symbols!')
  .matches(/^[а-яё a-z]+$/gi, 'Only latin and cyrillic symbols!');

const company = Yup.string()
  .trim()
  .min(2, 'Minimum length is 2 symbols!')
  .max(40, 'Maximum length is 40 symbols!');

const message = Yup.string().trim().required('Required!').min(5, 'Minimum length is 5 symbols!');

const email = Yup.string().required('Required!').email();

export const schema = Yup.object().shape({
  name,
  email,
  company,
  message,
});

export const initialValues = { name: '', company: '', email: '', message: '' };
