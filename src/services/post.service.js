export function createUser(body) {
  const res = fetch("", {
    body: body,
  });

  return res;
}
