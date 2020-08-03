import URL from '../config';

export default {
  getAllWithVideos() {
    fetch(URL)
      .then(async (respostaDoServer) => {
        const resposta = await respostaDoServer.json();
      });
  },
};
