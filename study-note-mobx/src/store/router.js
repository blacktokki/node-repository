import { RouterStore as _RouterStore } from 'mobx-react-router';

export default class RouterStore extends _RouterStore{
    constructor(root){
        super()
        this.root = root
    }
}