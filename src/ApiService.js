export default class ApiService {
  static baseUrl = 'http://localhost:4000'

  static async searchMedications(query) {
    const url = `${this.baseUrl}/api/medications/search?query=${query}`
    const response = await fetch(url)
    return  response.json()
  }

  static async getMedication(id) {
    const url = `${this.baseUrl}/api/medications/${id}`
    const response = await fetch(url)
    return  response.json()
  }
}