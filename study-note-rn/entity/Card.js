export default class Card{
    constructor({id, indent, name, value, isCorrectOnce, isCorrectLast, isRemain}){
        this.id = id
        this.indent = indent || 0
        this.name = name || ""
        this.value = value || ""
        this.isCorrectOnce = isCorrectOnce || false
        this.isCorrectLast = isCorrectLast || false
        this.isRemain = isRemain || true
      }
      get data(){
        return {
            id: this.id,
            indent: this.indent,
            name: this.name,
            value: this.value,
            isCorrectOnce: this.isCorrectOnce,
            isCorrectLast: this.isCorrectLast,
            isRemain: this.isRemain
        }
    }
}
