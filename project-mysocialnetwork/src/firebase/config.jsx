// importa a função para inicializar o firebase
import { initializeApp } from "firebase/app";
//firestore é o banco de dados em tempo real do firebase, funçao para acessar o firestore
import { getFirestore}  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjKFpTvSIbpr24Acr6bcbYX07KQecGzT0", //chave api para solicitar as autenticaçoes para o firebase
  authDomain: "projetomypost.firebaseapp.com", //dominio para a autenticação firebase
  projectId: "projetomypost", //id do meu projeto
  storageBucket: "projetomypost.appspot.com", //para armazenar os arquivos
  messagingSenderId: "584746031067", //id do remetente das mensagens, usado para notificações
  appId: "1:584746031067:web:9668e3978796bec2cc79fe" //id unico para o meu aplicativo
};

//chama o pacote firebase e passa as keys e dominios que a gente utiliza
const app = initializeApp(firebaseConfig);

//inicializando o bando de dados da firestore, relacionando o banco de dados com o app que é o firebase inicializado
//posso usar esta instancia para interagir com o banco de dados
const db = getFirestore(app)

export { db };