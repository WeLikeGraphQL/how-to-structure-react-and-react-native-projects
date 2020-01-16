import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "apollo-client";
import gql from "graphql-tag";

import { Button, Title } from "@graphan/components";
import YoutubeVideo from "./youtube";

export const ALL_VIDEOS_QUERY = gql`
  query allVideos($cursor: String) {
    videosConnection(first: 3, after: $cursor) {
      edges {
        node {
          id
          title
          videoId
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export default function VideoList() {
  const {
    loading,
    error,
    data: { videosConnection } = {},
    fetchMore,
    networkStatus
  } = useQuery(ALL_VIDEOS_QUERY, {
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true
  });

  const loadingMoreVideos = networkStatus === NetworkStatus.fetchMore;

  const loadMoreVideos = () => {
    fetchMore({
      variables: {
        cursor: videosConnection.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }
        const result = {
          // Append the new Videos results to the old one
          videosConnection: {
            edges: [
              ...previousResult.videosConnection.edges,
              ...fetchMoreResult.videosConnection.edges
            ],
            pageInfo: fetchMoreResult.videosConnection.pageInfo
          }
        };
        return result;
      }
    });
  };

  if (error) return <Title title="Error loading Videos." />;
  if (loading && !loadingMoreVideos) return <Title title="Loading" />;

  const { edges: allVideos, pageInfo } = videosConnection;
  const areMoreVideos = pageInfo.hasNextPage;

  return (
    <>
      {allVideos.map(({ node: video }, index) => (
        <Fragment key={video.id}>
          <Title title={video.title} />
          {video.videoId && <YoutubeVideo videoId={video.videoId} />}
        </Fragment>
      ))}
      {areMoreVideos && (
        <Button onClick={() => loadMoreVideos()} disabled={loadingMoreVideos} />
      )}
    </>
  );
}
