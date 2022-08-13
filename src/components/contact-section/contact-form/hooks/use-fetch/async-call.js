const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const asyncCall = async ({ url, data, method = 'POST' }) => {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.text();

    if (!result) return {};

    return JSON.parse(result);
  } catch (error) {
    return null;
  }
};

export default asyncCall;
