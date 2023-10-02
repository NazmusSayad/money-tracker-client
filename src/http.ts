import ReactApi from 'react-net-kit'
const reactApi = ReactApi({
  withCredentials: true,
  baseURL: 'https://money-tracker-oiw9.onrender.com/',
})

export default reactApi.axios
export const { useApiOnce, useApi, createSuspense } = reactApi.hooks
