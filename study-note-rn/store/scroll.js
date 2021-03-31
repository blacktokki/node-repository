import {decorate, observable, action } from 'mobx';
export default class ScrollStore {
  refs = []
  curScrollData = {}
  isHasMeasure = true
  headerViewHeight = 0
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
  onLayoutListener = (event) => {
    console.log(event)
    const nativeEvent = event.nativeEvent
    this.headerViewHeight = nativeEvent.layout.y
  }
}

decorate(ScrollStore, {
    curScrollData: observable,
    isHasMeasure: observable,
    headerViewHeight: observable,
    onScrollListener: action,
    onLayoutListener: action
})