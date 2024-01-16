import Home from '../pages/Home';
import Comments from '../pages/Comments';

type RoutesParameterType = {
  path: string
  props: {
    pushState: (route: string) => void;
  }
}

const routes = ({ path, props }: RoutesParameterType) => {
  switch (path) {
    case '/':
      return Home(props);
    case '/comments':
      return Comments(props)
    default:
      return Home(props);
  }
};

export default routes
