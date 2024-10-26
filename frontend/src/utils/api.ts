import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: apiUrl ?? 'http://localhost:8008',
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
