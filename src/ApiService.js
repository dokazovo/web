export default class ApiService {
  static data = [
    {
      id: 1,
      tradeName: 'Paracetamol',
      price: 1180,
      activeIngredients: [
        { id: 1, name: 'Acetaminophen' },
        { id: 2, name: 'Chotoeshe' },
      ],
      score: 3,
      isOverTheCounter: true,
      pharmacologicalGroup: 'НПЗЗ — Похідні пропіонової кислоти',
      reviews: [
        { result: 1, description: 'Acetaminophen присутня в реєстрах FDA.' },
        { result: 1, description: 'Acetaminophen є серед підтверджених Drugbank.' },
        { result: 1, description: 'Acetaminophen має 58 згадок на Cochrane.' },
      ],
      indications: [
        { id: 1, title: 'Анкілозуючий спондиліт' },
        { id: 2, title: 'Артроз неуточнений' },
        { id: 3, title: 'Хвороби м\'яких тканин, пов\'язані з навантаженням, перевантаженням та тиском' },
        { id: 4, title: 'Біль в горлі' },
        { id: 5, title: 'Біль у суглобі' },
      ],
      alternatives: [

      ]
    },
    {
      id: 2,
      tradeName: 'Грип-Гран',
      price: 546,
      activeIngredients: [],
      score: 1,
      isOverTheCounter: false,
      pharmacologicalGroup: 'НПЗЗ — Похідні пропіонової кислоти',
      reviews: [
        { result: -1, description: 'Гомеопатичний препарат не є лікарським засобом.' },
      ],
      indications: [
        { id: 1, title: 'Анкілозуючий спондиліт' },
        { id: 2, title: 'Артроз неуточнений' },
        { id: 3, title: 'Хвороби м\'яких тканин, пов\'язані з навантаженням, перевантаженням та тиском' },
        { id: 4, title: 'Біль в горлі' },
        { id: 5, title: 'Біль у суглобі' },
      ],
      alternatives: [

      ]
    },
    {
      id: 3,
      tradeName: 'Fuflomizin',
      price: 897,
      activeIngredients: [
        { id: 1, name: 'Acetaminophen' },
        { id: 2, name: 'Chotoeshe' },
      ],
      score: 0,
      isOverTheCounter: false,
      pharmacologicalGroup: 'НПЗЗ — Похідні пропіонової кислоти',
      reviews: [
        { result: 1, description: 'Acetaminophen присутня в реєстрах FDA.' },
        { result: 0, description: 'Acetaminophen є серед підтверджених Drugbank.' },
        { result: -1, description: 'Acetaminophen має 58 згадок на Cochrane.' },
      ],
      indications: [
        { id: 1, title: 'Анкілозуючий спондиліт' },
        { id: 2, title: 'Артроз неуточнений' },
        { id: 3, title: 'Хвороби м\'яких тканин, пов\'язані з навантаженням, перевантаженням та тиском' },
        { id: 4, title: 'Біль в горлі' },
        { id: 5, title: 'Біль у суглобі' },
      ],
      alternatives: [

      ]
    }
  ]

  static getMedications() {
    this.data = this.data.map(item => {
      item.alternatives = this.data
      return item
    })
    return this.data
  }

  static getMedication(id) {
    this.data = this.data.map(item => {
      item.alternatives = this.data
      return item
    })
    return this.data.find(ai => ai.id === id)
  }
}