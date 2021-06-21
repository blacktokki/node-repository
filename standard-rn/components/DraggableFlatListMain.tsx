
import React from "react";
import { View, TouchableOpacity, Dimensions, Platform, StyleProp, ViewStyle } from "react-native";
import { useHeaderHeight } from '@react-navigation/stack';
import DraggableAccordion, {RenderItemParams, RenderItemOuterParams} from './DraggableAccordion'

const renderItemSort = ({ item, index, drag, isActive, children }:RenderItemOuterParams<React.ReactNode>) => {
    return (
        <TouchableOpacity
        style={{
          backgroundColor: isActive ? "red" : "white",
          marginRight: Platform.OS == 'web'? 0 : 5,
          alignItems: "center",
          justifyContent: "center",
        }}
        onLongPress={drag}
      >
        {children}
    </TouchableOpacity>
    )
}
const renderItemUnsort = ({ item, index, drag, isActive, children }:RenderItemOuterParams<React.ReactNode>) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginRight: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  )
}
const renderItemHeader = ({item, index, drag, isActive}:RenderItemParams<DraggableSection>) =>{
  return item.header
}
const renderItemBody = ({item, index, drag, isActive}:RenderItemParams<DraggableSection>) =>{
  return item.body
}

type Props = {
  children: React.ReactNode,
  itemStyles?: {[key:string]:StyleProp<ViewStyle>},
  scrollEnabled?: boolean, 
  sortEnabled?: boolean, 
  addTitle?: string, 
  addElement?:(data:DraggableSection[])=>DraggableSection,
  dataCallback:(data:DraggableSection[])=>void
}

export type DraggableSection = {
  header:React.ReactNode
  body:React.ReactNode | null
}

export default function DraggableFlatListMain(props:Props){
    const headerHeight = useHeaderHeight();
    let _data:DraggableSection[] = []
    React.Children.toArray(props.children).forEach((item, index)=>{
      if(index % 2 == 0)
        _data.push({header:item, body:(<View></View>)})
      else
        _data[Math.floor(index/2)].body = item
    })
    let _itemStyles = props.itemStyles || {Panel_Holder:{}, Btn:{}}
    let _sortEnabled = (props.sortEnabled === undefined ? true : props.sortEnabled)
    return (<DraggableAccordion<DraggableSection, {}>
        sortEnabled={_sortEnabled}
        scrollEnabled={props.scrollEnabled}
        height={Dimensions.get("window").height - headerHeight}
        data={_data}
        dataCallback={props.dataCallback}
        itemStyles={_itemStyles}
        renderItemHeader={renderItemHeader}
        renderItemBody={renderItemBody}
        renderItemOuter={_sortEnabled ? renderItemSort : renderItemUnsort}
        keyExtractor={(item:React.ReactNode, index:number) => `main-draggable-item-${index}`}
        addElement={props.addElement}
        addTitle={props.addTitle}
    />)
}