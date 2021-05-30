import React from 'react';
import { Route, Switch } from 'router';
import {Home,Option, Note, NoteStudy, NoteDetail} from 'components';
import { Div } from 'components/commons';
import { View, Platform } from 'react-native';

function Main(props) {
  return (
    <View style={{marginTop:props.screen.length>1 && Platform.OS=='web'?100:60}}>
      <Div className="main-content">
        <Switch>
          <Route exact path="/" component={Home}/>
          {/*<Route path="/option" component={Option}/>*/}
          <Route exact path="/note" component={Note}/>
          <Route exact path="/note/:id" component={NoteDetail}/>
          <Route exact path="/note/:id/study" component={NoteStudy}/>
        </Switch>
      </Div>
    </View>
  )
}

export default Main;
