import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import SortableList from 'react-native-sortable-list';


export default class _SortableList extends SortableList {
    static propTypes = {
      data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
      order: PropTypes.arrayOf(PropTypes.any),
      style: ViewPropTypes.style,
      contentContainerStyle: ViewPropTypes.style,
      innerContainerStyle: ViewPropTypes.style,
      sortingEnabled: PropTypes.bool,
      scrollEnabled: PropTypes.bool,
      horizontal: PropTypes.bool,
      showsVerticalScrollIndicator: PropTypes.bool,
      showsHorizontalScrollIndicator: PropTypes.bool,
      refreshControl: PropTypes.element,
      autoscrollAreaSize: PropTypes.number,
      snapToAlignment: PropTypes.string,
      rowActivationTime: PropTypes.number,
      manuallyActivateRows: PropTypes.bool,
      keyboardShouldPersistTaps: PropTypes.oneOf(['never', 'always', 'handled']),
      scrollEventThrottle: PropTypes.number,
      decelerationRate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      pagingEnabled: PropTypes.bool,
      nestedScrollEnabled: PropTypes.bool,
      disableIntervalMomentum: PropTypes.bool,
  
      renderRow: PropTypes.func.isRequired,
      renderHeader: PropTypes.func,
      renderFooter: PropTypes.func,
  
      onChangeOrder: PropTypes.func,
      onActivateRow: PropTypes.func,
      onReleaseRow: PropTypes.func,
      onScroll: PropTypes.func,
    };
    /*
    _renderRows() {
      const {horizontal, rowActivationTime, sortingEnabled, renderRow} = this.props;
      const {animated, order, data, activeRowKey, releasedRowKey, rowsLayouts} = this.state;
  
  
      let nextX = 0;
      let nextY = 0;
  
      return order.map((key, index) => {
        const style = {[ZINDEX]: 0};
        const location = {x: 0, y: 0};
  
        if (rowsLayouts) {
          if (horizontal) {
            location.x = nextX;
            nextX += rowsLayouts[key] ? rowsLayouts[key].width : 0;
          } else {
            location.y = nextY;
            nextY += rowsLayouts[key] ? rowsLayouts[key].height : 0;
          }
        }
  
        const active = activeRowKey === key;
        const released = releasedRowKey === key;
  
        if (active || released) {
          style[ZINDEX] = 100;
        }
  
        return (
          <Row
            key={uniqueRowKey(key)}
            ref={this._onRefRow.bind(this, key)}
            horizontal={horizontal}
            activationTime={rowActivationTime}
            animated={animated && !active}
            disabled={!sortingEnabled}
            style={style}
            location={location}
            onLayout={!rowsLayouts ? this._onLayoutRow.bind(this, key) : null}
            onActivate={this._onActivateRow.bind(this, key, index)}
            onPress={this._onPressRow.bind(this, key)}
            onRelease={this._onReleaseRow.bind(this, key)}
            onMove={this._onMoveRow}
            manuallyActivateRows={this.props.manuallyActivateRows}>
            {renderRow({
              key,
              data: data[key],
              disabled: !sortingEnabled,
              active,
              index,
            })}
          </Row>
        );
      });
    }*/
}