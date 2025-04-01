export const getProperties = async () => {
  const url = new URL(
    "https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/propriedades.json"
  );

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
