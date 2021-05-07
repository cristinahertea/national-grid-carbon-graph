import { baseUrl } from './config'

const getIntensityService = async (url, options) => {
  try {
    const res = await fetch(`${baseUrl}${url}`, options)
    return await res.json()
  } catch (e) {
    return { error: e.toString() }
  }
}

export default getIntensityService
