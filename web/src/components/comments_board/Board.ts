import { getComments } from "../../apis/comments";
import style from './Board.module.css'
import Comment from './Comment';
import Posts from "./Posts";
import ToolBox from "./ToolBox";

export type BoardPropsType = {
  goToPage: (pageNumber: number) => void;
}

const createBoard = (props: BoardPropsType) => {
  const boardList = document.createElement('ul');
  boardList.id = 'board';
  boardList.classList.add(style.boardList);

  getComments().then((res)=> {
    res.forEach((comment) => {
      boardList.appendChild(Comment(comment))
    })
  });

    const boardWrapper = document.createElement('div');
    boardWrapper.classList.add(style.board);
    boardWrapper.appendChild(boardList);
    boardWrapper.appendChild(ToolBox(props));
    boardWrapper.appendChild(Posts(props));
  return boardWrapper
}

const Board = (props: BoardPropsType) => {
  return createBoard(props);
}

export default Board