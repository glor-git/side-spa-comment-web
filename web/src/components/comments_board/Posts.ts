import { postComment } from "../../apis/comments";
import { BoardPropsType } from "./Board";
import style from './Posts.module.css'
import { currentPage } from "../../pages/Comments";

const createPosts = ({ goToPage }: BoardPropsType) => {
  const nameAlert = document.createElement('span');
  const contentsAlert = document.createElement('span');

  const nameInput = document.createElement('input');
  const contentsInput = document.createElement('input');

  const nameWrapper = document.createElement('div');
  nameWrapper.appendChild(document.createTextNode('이름: '));
  nameWrapper.appendChild(nameInput);
  nameWrapper.appendChild(nameAlert);

  const contentsWrapper = document.createElement('div');
  contentsWrapper.appendChild(document.createTextNode('본문: '));
  contentsWrapper.appendChild(contentsInput);
  contentsWrapper.appendChild(contentsAlert);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.appendChild(document.createTextNode('작성'));

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (nameInput.value.length < 1) {
      nameAlert.innerHTML = '이름은 1자 이상이어야 합니다.';
    } else {
      nameAlert.innerHTML = '';
    }
    if (contentsInput.value.length < 10) {
      contentsAlert.innerHTML = '내용은 10자 이상이어야 합니다.';
    } else {
      contentsAlert.innerHTML = '';
    }
    if (nameInput.value.length >= 1 && contentsInput.value.length >= 10) {
      postComment(nameInput.value, contentsInput.value).then(() => {
          nameInput.value = '';
          contentsInput.value = '';
          goToPage(currentPage);
      })
    }
  })

  const postsWrapper = document.createElement('form');
  postsWrapper.appendChild(nameWrapper);
  postsWrapper.appendChild(contentsWrapper);
  postsWrapper.appendChild(submitButton);
  postsWrapper.classList.add(style.postsWrapper);
  return postsWrapper;
}

export const Posts = (props: BoardPropsType) => {
  return createPosts(props);
}

export default Posts;