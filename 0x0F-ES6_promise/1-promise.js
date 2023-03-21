export default function getResponseFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      resolve(new Error('The fake API is not working currently'));
    }
  });
}
