import ReactApi from 'react-net-kit'
const reactApi = ReactApi({
  withCredentials: true,
  baseURL: 'https://api.money.nazmussayad.com',
})

export default reactApi.axios
export const { useApiOnce, useApi, createSuspense } = reactApi.hooks
