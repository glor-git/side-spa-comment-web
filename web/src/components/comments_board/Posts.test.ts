import { fireEvent } from "@testing-library/dom";

const posts = () => {
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
      nameInput.value = '';
      contentsInput.value = '';
    }
  })

  const postsWrapper = document.createElement('form');
  postsWrapper.appendChild(nameWrapper);
  postsWrapper.appendChild(contentsWrapper);
  postsWrapper.appendChild(submitButton);
  return postsWrapper;
}

describe('댓글 작성 테스트', () => {
  test('작성 버튼 클릭 시 이름과 본문이 지워진다.', async () => {
    // Arrange
    const container = posts();
    const submitButton = container.getElementsByTagName('button')[0];
    const nameInput = container.getElementsByTagName('input')[0];
    const contentInput = container.getElementsByTagName('input')[1];

    // Act
    fireEvent.change(nameInput, { target: { value: '신영광' } });
    fireEvent.change(contentInput, { target: { value: '10자리 이상의 텍스트 입력' } });
    expect(nameInput.value).toBe('신영광')
    expect(contentInput.value).toBe('10자리 이상의 텍스트 입력')
    fireEvent.click(submitButton);

    // Assert
    expect(nameInput.value).toBe('')
    expect(contentInput.value).toBe('')
  })

  test('이름은 1자 내용은 10자 이상 입력하지 않으면 얼럿이 발생한다.', async () => {
    // Arrange
    const container = posts();
    const submitButton = container.getElementsByTagName('button')[0];
    const nameInput = container.getElementsByTagName('input')[0];
    const contentInput = container.getElementsByTagName('input')[1];
    const nameAleat = container.getElementsByTagName('span')[0];
    const contentAleat = container.getElementsByTagName('span')[1];

    // Act
    fireEvent.click(submitButton);

    // Assert, 얼럿 발생하는지 테스트
    expect(nameAleat.innerHTML).toBe('이름은 1자 이상이어야 합니다.')
    expect(contentAleat.innerHTML).toBe('내용은 10자 이상이어야 합니다.')

    // Act
    fireEvent.change(nameInput, { target: { value: '신영광' } });
    fireEvent.change(contentInput, { target: { value: '10자리 이상의 텍스트 입력' } });
    fireEvent.click(submitButton);

    // Assert, 발생한 얼럿이 사라지는지 테스트
    expect(nameAleat.innerHTML).toBe('')
    expect(contentAleat.innerHTML).toBe('')
  })
})