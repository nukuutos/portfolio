import { Formik } from 'formik';
import { useState } from 'react';
import FormBody from './form-body/form-body';
import useOnSubmit from './hooks/use-on-submit';
import Message from './message/message';
import { schema, initialValues } from './schema';
import Spinner from './spinner/spinner';

const ContactForm = () => {
  const [state, setState] = useState({ isSent: false, result: null });
  const handleSubmit = useOnSubmit({ setState });

  return (
    <Formik validationSchema={schema} initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <>
          {isSubmitting && <Spinner />}
          {!state.isSent && !isSubmitting && <FormBody />}
          {state.isSent && state.result && <Message isSuccess />}
          {state.isSent && !state.result && <Message />}
        </>
      )}
    </Formik>
  );
};

export default ContactForm;
