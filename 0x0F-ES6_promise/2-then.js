export default function handleResponseFromAPI(promise) {
  return new Promise((resolve) => {
    if (promise) {
      resolve({ status: 200, body: "success" });
      console.log("Got a response from the API");
    } else {
      resolve(Error());
      console.log("Got a response from the API");
    }
  });
}
