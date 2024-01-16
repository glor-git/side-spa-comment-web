import Title  from '../components/title/Title'
import Board from '../components/comments_board/Board';
import { getCommentsByPage } from "../apis/comments";
import Comment from "../components/comments_board/Comment";

type CommentsPropsType = { pushState: (route: string) => void }

export default function Comments(props: CommentsPropsType) {
  const button = document.createElement('button');
  button.appendChild(document.createTextNode('홈으로'));
  button.addEventListener('click', () => {
    props.pushState('/');
  })

  const Comment = document.createElement('div');
  Comment.classList.add('comment');
  Comment.appendChild(Title('댓글 게시판'))
  Comment.appendChild(button);
  Comment.appendChild(Board({ goToPage }));

  return Comment
}

// 현재 페이지
export let currentPage = 1;

// 댓글 페이징
const goToPage = (pageNumber: number): void => {
  if (pageNumber < 1) {
    return;
  }

  getCommentsByPage(pageNumber).then(res => {
    if (res.length !== 0) {
      const boardWrapper = document.querySelector('#board');
      const pageNumberWrapper = document.querySelector('#currentPageId');
      if (boardWrapper) {
        boardWrapper.innerHTML = ''

        res.forEach(comment => {
          boardWrapper && boardWrapper.appendChild(Comment(comment));
        })
      }
      currentPage = pageNumber;

      if (pageNumberWrapper) {
        pageNumberWrapper.innerHTML = currentPage.toString();
      }
    }
  });
}