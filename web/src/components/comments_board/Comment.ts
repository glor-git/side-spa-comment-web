import { CommentType } from "../../apis/comments";
import style from './Comment.module.css';
import {convertTimestampToDateString} from "../../utils/time_util";

const createComment = ({author, comment, id}: CommentType) => {
  // 댓글 내용
  const content = document.createElement('p');
  content.classList.add(style.content);

  // 댓글 정보
  const infoWrapper = createInfoWrapper({ author, id });
  content.appendChild(document.createTextNode(comment));

  // 댓글 박스
  const commentWrapper = document.createElement('li');
  commentWrapper.classList.add(style.comment);
  commentWrapper.appendChild(content);
  commentWrapper.appendChild(infoWrapper);

  return commentWrapper
}

const createInfoWrapper = ({ author, id }: Omit<CommentType, 'comment'>) => {
  // 댓글 작성자
  const name = document.createElement('p');
  name.classList.add(style.name);
  name.appendChild(document.createTextNode(author));

  // 선
  const line = document.createElement('p');
  line.appendChild(document.createTextNode('|'));
  line.classList.add(style.line);

  // 시간
  const date = document.createElement('p');
  date.classList.add(style.date);
  date.appendChild(document.createTextNode(convertTimestampToDateString(id).toString()));


  // 댓글 정보
  const infoWrapper = document.createElement('div');
  infoWrapper.classList.add(style.infoWrapper);
  infoWrapper.appendChild(name);
  infoWrapper.appendChild(line);
  infoWrapper.appendChild(date);

  return infoWrapper
}

const Comment = (props: CommentType) => {
  return createComment(props);
}

export default Comment