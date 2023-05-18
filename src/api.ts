export const withBase = (path: string) => {
  let base: string = import.meta.env.VITE_API_BASE ?? '';
  if (base.endsWith('/')) {
    base = base.slice(0, -1);
  }
  return `${base}/${path}`;
};

export const getStatus = async () => {
  return await fetch(withBase('status')).then(resp => resp.json());
};

export interface Command {
  x: number;
  turn: number;
};

export const move = async (command: Command) => {
  // should return 204 with no content, thus do not use resp.json()
  return await fetch(withBase('move'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command), 
  });
};