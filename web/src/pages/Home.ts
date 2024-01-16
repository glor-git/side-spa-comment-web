import Title  from '../components/title/Title'

type HomePropsType = { pushState: (route: string) => void }

export default function Home(props: HomePropsType) {
  const button = document.createElement('button');
  button.appendChild(document.createTextNode('댓글 보러가기'));
  button.addEventListener('click', () => {
    props.pushState('/comments');
  })

  const home = document.createElement('div');
  home.classList.add('home');
  home.appendChild(Title('댓글 게시판 홈'))
  home.appendChild(button);


  return home
}