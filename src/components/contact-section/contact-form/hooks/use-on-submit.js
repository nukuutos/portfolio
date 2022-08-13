import useFetch from './use-fetch/use-fetch';

const useOnSubmit = ({ setState }) => {
  const { asyncAction } = useFetch();

  const handleSubmit = async (data) => {
    const config = { url: '/message', data, method: 'post' };
    const result = await asyncAction(config);
    setState({ isSent: true, result });
  };

  return handleSubmit;
};

export default useOnSubmit;
