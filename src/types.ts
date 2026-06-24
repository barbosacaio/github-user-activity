export type Repo = {
  id: number;
  name: string;
};

export type PushPayLoad = {
  repository_id: number;
};

export type IssuesPayLoad = {
  action: string;
};

export type PullRequestPayLoad = {
  action: string;
  number: number;
};

export type PayLoad = PushPayLoad | IssuesPayLoad | PullRequestPayLoad;

export type GitHubEvent = {
  id: string;
  type: string;
  repo: Repo;
  payload: PayLoad;
};
