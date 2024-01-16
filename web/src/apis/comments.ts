import { fetchApisByGet, fetchApisByPost } from "./api_util";

export type CommentType = {
  author: string;
  comment: string;
  id: string;
}

export const getComments = (): Promise<CommentType[]> => {
  return fetchApisByGet('api/comments/');
}

export const getCommentsByPage = (pageNumber: number): Promise<CommentType[]> => {
  return fetchApisByGet(`api/comments/page/${pageNumber}`);
}

export const postComment = (author: string, comment: string) => {
  return fetchApisByPost(`api/comments/`, { author, comment });
}