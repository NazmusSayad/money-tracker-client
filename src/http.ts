import ReactApi from 'use-react-api'
const reactApi = ReactApi({
  withCredentials: true,
  baseURL: 'https://money-tracker-oiw9.onrender.com/',
})

export default reactApi.axiosInstance
export const { useApiOnce, useApi, useDataApi, createSuspense } = reactApi.hooks
