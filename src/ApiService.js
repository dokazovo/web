export default class ApiService {
  static baseUrl = process.env.REACT_APP_API_HOST ?? ''

  static async searchMedications(query) {
    const url = `${this.baseUrl}/api/search?query=${query}`
    const response = await fetch(url)
    return await response.json()
  }

  static async getMedication(id) {
    const url = `${this.baseUrl}/api/medications/${id}`
    const response = await fetch(url)
    return await response.json()
  }

  static async getMedications() {
    const url = `${this.baseUrl}/api/medications`
    const response = await fetch(url)
    return await response.json()
  }
}