import Card from './Card';
export default class Note {
    constructor({id, title, cardId, cards, questionIds}){
        this.id = id
        this.title = title
        this.cardId = cardId
        this.cards = cards.map((card)=>new Card(card))
        this.questionIds = questionIds
    }
    
    get data(){
        return {
            id: this.id,
            title: this.title,
            cardId: this.cardId,
            cards: this.cards.map((card)=>card.data),
            questionIds: this.questionIds
        }
    }
}
