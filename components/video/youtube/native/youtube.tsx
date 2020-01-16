import React, { useCallback, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-native-youtube";

import { actionCreators } from "../../actions";

type Props = {
  videoId: string;
  videoStatus?: "playing" | "stopped";
};

const YoutubeVideo = (props: Props) => {
  const dispatch = useDispatch();
  const videoStatus = useSelector(state => state[props.videoId]);
  const youtubeElement = useRef(null);

  useEffect(() => {
    if (videoStatus === "stopped" && youtubeElement) {
      youtubeElement.current.pauseVideo();
    }
  }, [videoStatus]);

  const onChangeState = useCallback(
    e => {
      if (e.state === "playing") {
        dispatch(actionCreators.playVideoAction(props.videoId));
      } else if (e.state === "paused") {
        dispatch(actionCreators.stopVideoAction(props.videoId));
      }
    },
    [props.videoId]
  );

  return (
    <YouTube
      ref={youtubeElement}
      {...props}
      onChangeState={onChangeState}
      style={{ alignSelf: "stretch", height: 300 }}
    />
  );
};

export default YoutubeVideo;
