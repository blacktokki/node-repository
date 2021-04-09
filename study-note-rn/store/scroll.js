import {decorate, observable, action } from 'mobx';
export default class ScrollStore {
  refs = []
  curScrollData = {}
  isHasMeasure = true
  onScrollListener = (event) => {
    const nativeEvent = event.nativeEvent
    this.curScrollData = {
        totalHeight: nativeEvent.contentSize.height,
        windowHeight: nativeEvent.layoutMeasurement.height,
        offsetY: nativeEvent.contentOffset.y,
        hasScroll: true,
    }
    if (nativeEvent.contentOffset.y !== 0) this.isHasMeasure = true;
  }
}


decorate(ScrollStore, {
    curScrollData: observable,
    isHasMeasure: observable,
    onScrollListener: action,
})