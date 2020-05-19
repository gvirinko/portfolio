import React, { useEffect, useState } from "react";

import { CommitsList } from "../CommitsList";

import {
  CommitsComponent,
  CommitsTitle,
  CommitsHeader,
  Commit,
  RepoName,
  CommitDate,
  CommitMessage,
  // MoreButton,
} from "./elements";

const GIT_API = "https://api.github.com/users/gvirinko/events";

export const Commits = () => {
  const [events, setEvents] = useState([]);
  // const renderIndex = 0;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(GIT_API);
      const data = await response.json();
      //Why 15??
      setEvents(data.slice(0, 15));
    }
    fetchData();
  }, []);

  // const renderCommits = () => {
  //   for (let i = 0; i < events.length; i++) {
  //     return <div>Rendered{i}</div>;
  //   }
  // };

  return (
    <CommitsComponent>
      <CommitsTitle>My Latest Commits on GitHub</CommitsTitle>
      <CommitsHeader>
        <CommitDate>Date</CommitDate>
        <RepoName>Repository</RepoName>
        <CommitMessage>Message</CommitMessage>
      </CommitsHeader>
      <CommitsList>
        {events.map(
          (item) =>
            item.type === "PushEvent" &&
            item.payload.commits.map((c) => (
              <Commit key={c.url}>
                <CommitDate>{item.created_at.slice(0, 10)}</CommitDate>
                <RepoName>{item.repo.name.slice(9)}</RepoName>
                <CommitMessage>{c.message}</CommitMessage>
              </Commit>
            ))
        )}
      </CommitsList>
      {/* <MoreButton onClick={renderCommits}>Show More</MoreButton> */}
    </CommitsComponent>
  );
};
