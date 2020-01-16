import React from "react";

import VideoList from "@graphan/components/video";

import { withApollo, withRedux } from "../lib";

const Home = () => (
  <div>
    <VideoList />
  </div>
);

export default withRedux(withApollo(Home, { ssr: false }));
