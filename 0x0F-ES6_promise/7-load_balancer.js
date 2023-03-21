export default function loadBalancer(chinaDownload, USDownload) {
  return new Promise((resolve) => {
    chinaDownload.then((data) => {
      resolve(data);
    });
    USDownload.then((data) => {
      resolve(data);
    });
  });
}
