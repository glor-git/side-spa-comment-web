import style from './Toolbox.module.css';
import { BoardPropsType } from "./Board";
import { currentPage } from "../../pages/Comments";

const createToolBox = ({ goToPage }: BoardPropsType) => {

  // 이전 버튼
  const prevButton = document.createElement('button');
  prevButton.appendChild(document.createTextNode('이전'));
  prevButton.addEventListener('click', () => {
    goToPage(currentPage - 1)
  });

  const currentPageWrapper = document.createElement('span');
  currentPageWrapper.id = 'currentPageId';
  currentPageWrapper.innerHTML = currentPage.toString();

  // 다음 버튼
  const nextButton = document.createElement('button');
  nextButton.appendChild(document.createTextNode('다음'));
  nextButton.addEventListener('click', () => {
    goToPage(currentPage + 1)
  });

  // 툴박스
  const toolBoxWrapper = document.createElement('div');
  toolBoxWrapper.classList.add(style.toolBoxWrapper);
  toolBoxWrapper.appendChild(prevButton);
  toolBoxWrapper.appendChild(currentPageWrapper);
  toolBoxWrapper.appendChild(nextButton);

  return toolBoxWrapper
}

const Toolbox = (props: BoardPropsType) => {
  return createToolBox(props);
}

export default Toolbox