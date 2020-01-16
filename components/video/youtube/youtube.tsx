import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import YouTube, { YouTubeProps } from "react-youtube";

import { actionCreators } from "../actions";

type Props = YouTubeProps & {
  videoId: string;
};

const YoutubeVideo = (props: Props) => {
  const dispatch = useDispatch();
  const videoStatus = useSelector(state => state[props.videoId]);
  const [player, setPlayer] = useState();

  useEffect(() => {
    if (videoStatus === "stopped") {
      console.log(player);
      player && player.pauseVideo();
    }
  }, [videoStatus]);

  const onReady = useCallback(
    event => {
      setPlayer(event.target);
    },
    [props.videoId]
  );
  const onPlay = useCallback(() => {
    dispatch(actionCreators.playVideoAction(props.videoId));
  }, [props.videoId]);
  const onPause = useCallback(() => {
    dispatch(actionCreators.stopVideoAction(props.videoId));
  }, [props.videoId]);

  return (
    <YouTube {...props} onReady={onReady} onPlay={onPlay} onPause={onPause} />
  );
};

export default YoutubeVideo;
