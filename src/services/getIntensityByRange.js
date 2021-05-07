import { baseUrl } from './config'

const getIntensityByRange = async (url, options) => {
  try {
    const res = await fetch(`${baseUrl}${url}`, options)
    const json = await res.json()
    return { payload: json.data }
  } catch (e) {
    return { error: e }
  }
}

export default getIntensityByRange
