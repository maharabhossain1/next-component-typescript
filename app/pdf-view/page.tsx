import React from 'react';

async function getData() {
  const apiKey = '0360b30e-5219-47b4-8574-c3971929d6ae';
  const documentId = '891581e4-f0af-4efc-9e17-57e5daff3296';
  const apiUrl = `https://api.digisigner.com/v1/documents/${documentId}`;
  const res = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'x-api-key': apiKey
    }
  });
  console.log('res', res);

  return res;
}

const page = async () => {
  const data = await getData();
  console.log(data);
  return <div>page</div>;
};

export default page;
