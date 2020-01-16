import React from 'react';
import {ScrollView} from 'react-native';

import {withApollo, createApolloClient, withRedux} from '@graphan/core';
import {VideoList} from '@graphan/components';

const client = createApolloClient();

const App = () => {
  return (
    <ScrollView style={{padding: 10, marginTop: 40, marginBottom: 40}}>
      <VideoList />
    </ScrollView>
  );
};

export default withRedux(withApollo(App)({apolloClient: client}));
