import routes from './routes/router';
import './app.css'
// 페이지 렌더링
function renderPage(page: HTMLDivElement) {
  const app = document.querySelector('.App') as Element;
  app.innerHTML = '';
  app.appendChild(page)
}

// SPA 라우팅 함수
function navigateTo(route: string) {
  const page = routes({ path: route, props: { pushState } });
  renderPage(page);

}

// 브라우저 히스토리 추가
function pushState(route: string) {
  window.history.pushState({ route }, '', route);
  navigateTo(route);
}

// 초기 페이지 로딩
window.onload = function () {
  navigateTo('/');
};

// 브라우저(뒤로가기, 앞으로가기)
window.onpopstate = (event) => {
  const route = event.state ? event.state.route : '/';
  navigateTo(route);
}