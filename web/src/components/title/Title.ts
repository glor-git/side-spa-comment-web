import styles from './Title.module.css';


const createTitle = (title: string) => {
  const titleWrapper = document.createElement('div')
  titleWrapper.classList.add(styles.title);
  titleWrapper.appendChild(document.createTextNode(title))

  return titleWrapper
}

const Title = (title: string) => {
  return createTitle(title);
}

export default Title