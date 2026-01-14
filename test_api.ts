import { fetchData, postData } from './src/utils/apiHelper';

// Test fetchData with a mock 500 response
async function testFetchData500() {
  try {
    // Mock a URL that returns 500
    const result = await fetchData('https://httpstat.us/500');
    console.log('fetchData success:', result);
  } catch (error) {
    console.log('fetchData error:', (error as Error).message);
  }
}

// Test postData with a mock 500 response
async function testPostData500() {
  try {
    const result = await postData('https://httpstat.us/500', { test: 'data' });
    console.log('postData success:', result);
  } catch (error) {
    console.log('postData error:', (error as Error).message);
  }
}

// Run tests
testFetchData500();
testPostData500();
