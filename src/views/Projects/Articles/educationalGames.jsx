import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/UI/ArticleVideoSection";
import Heading from "@/components/UI/Heading";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";

const dependencies = {
  plugins: [
    "Tailwindcss",
  ],
  backend: {
    composerJSON: [
      "Fakerphp/faker",
    ],
    packageJSON: [
     "Axios",
    ]
  },
  frontend: {
    packageJSON: [
      "@tailwindcss/forms",
    ],
  },
};

const educationalGames = {
  Dependencies: () => <DependenciesSection dependencies={dependencies} />,
  Header: () => (
    <h4 className="arrow text-2xl font-semibold mb-5">
      Sistema.
    </h4>
  ),
  ExtendedDescription: () => (
    <>
      <p className="article-description-paragraph">
        Sistema <HighlightText>Herramienta</HighlightText>
      </p>
      <Heading tag="h5">Contribuciones en Backend:</Heading>
      <ul className="article-description-list">
        <li></li>
      </ul>
      <Heading tag="h5">Contribuciones en Frontend:</Heading>
      <ul className="article-description-list">
        <li>.</li>
      </ul>
    </>
  ),
  Features: () => (
    <div className="mb-10">
      <p className="article-description-paragraph underline">
        Los videos a continuación continen efectos de sonido, pero estan desactivados por defecto, para activarlos, haga click en el icono de sonido.
      </p>
      <ArticleVideoSection
        labelledby="tutorial-principal"
        title="Animaciones del menu principal de selección de juegos, niveles desbloqueables, en cada juego se muestra un video educativo referenciado en formato APA:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745393252/manu-tutorial_dvyrxj.mp4"
      />
      <ArticleVideoSection
        labelledby="perder-vidas-y-game-over"
        title="Perder vidas y fin del juego:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745393246/perder-vidas-y-game-over_piagu2.mp4"
      />
      <ArticleVideoSection
        labelledby="juego-pasar-todos-los-niveles"
        title="Pasar todos los niveles de un juego:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745393247/juego-pasar-todos-los-niveles_c0spxh.mp4"
      />
      <ArticleVideoSection
        labelledby="juego-reloj"
        title="Juego de leer el reloj:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745393264/juego-reloj_a4ewjx.mp4"
      />
      <ArticleVideoSection
        labelledby="juego-contar"
        title="Juego de contar:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745393254/juego-contar_zvwtdw.mp4"
      />
      <ArticleVideoSection
        labelledby="juego-sumar-restar"
        title="Juego de sumar y restar:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745393250/juego-sumar-restar_txmblz.mp4"
      />
    </div>
  ),
};

export default educationalGames;
