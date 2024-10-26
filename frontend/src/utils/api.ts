import axios from 'axios';

const api = axios.create({
  baseURL: 'https://495c-2804-26d4-201e-3400-8139-c21-76e9-9c9c.ngrok-free.app',
});

//request on graph route

export async function graphConverter(data: FormData) {
  const response = await api.post('/api/v1/graphs', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.content;
}
