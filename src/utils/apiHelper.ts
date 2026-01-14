export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.status === 500) {
      throw new Error('Internal server error. Please try again later.');
    } else if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const postData = async (url: string, data: any) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 500) {
      throw new Error('Internal server error. Please try again later.');
    } else if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Post error:', error);
    throw error;
  }
};
