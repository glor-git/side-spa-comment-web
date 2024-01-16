export const fetchApisByGet = (url: string) => {
  return fetch(url).then(res => res.json());
}

export const fetchApisByPost = (url: string, data: any) => {
  return fetch(url, {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}