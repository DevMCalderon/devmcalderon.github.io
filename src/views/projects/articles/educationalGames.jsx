import { useTranslation } from "react-i18next";

import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/uI/ArticleVideoSection";
import Heading from "@/components/uI/Heading";
import DependenciesSection from "@/components/projects/article/DependenciesSection";
import ExternalLink from "@/components/uI/ExternalLink";
import { IconGitHub } from "@/components/uI/Icons";

const dependencies = {hasDependencies: false};

const educationalGames = {
  Dependencies: () => <DependenciesSection dependencies={dependencies} />,
  Links: () => {
    const [t] = useTranslation("global");
    return (
      <ExternalLink
        icon={<IconGitHub />}
        text={t(`projectDetail.repository_link_text`)}
        href={import.meta.env.VITE_EDUCATIONAL_GAMES_REPOSITORY_URL}
      />
    )
  },
  ExtendedDescription: () => {
    const [t] = useTranslation("global");
    
    return (
      <>
        <Heading tag="h4" className="text-2xl font-semibold mb-5 text-white">Sitio web de videojuegos educativos.</Heading>
        <p className="article-description-paragraph">
          Desarrollado en mis primeros años de estudiante universitario, utilizando <HighlightText>JavaScript</HighlightText> y <HighlightText>PHP</HighlightText>. Dirigido a niños de nivel primaria, enfocado en reforzar habilidades matemáticas fundamentales mediante mini-juegos interactivos. La plataforma ofrece una experiencia lúdica, accesible y progresiva, abordando temas como suma, resta, secuencias numéricas, reconocimiento de patrones y lectura de reloj analógico. Implementé una mecánica de vidas persistentes mediante localStorage, niveles desbloqueables con dificultad creciente y arquitectura basada en componentes reutilizables. Toda la información del contenido se gestiona dinámicamente desde archivos JSON para mantener un código limpio y modular.
        </p>
        <Heading tag="h5">Contribuciones en Frontend:</Heading>
        <ul className="article-description-list">
          <li>Desarrollo de interfaz intuitiva y responsiva.</li>
          <li>Diseño e implementación de componentes reutilizables.</li>
          <li>Integración dinámica de datos con JSON.</li>
          <li>Lógica de niveles y vidas en la experiencia de usuario.</li>
        </ul>
        <Heading tag="h5">Contribuciones en Backend:</Heading>
        <p className="article-description-paragraph">
          No aplica. El proyecto fue construido en frontend con organización de vistas mediante PHP require, sin lógica de servidor ni persistencia externa.
        </p>
      </>
    )
  },
  Features: () => (
    <>
      <p className="article-description-paragraph underline">
        Los videos a continuación continen efectos de sonido, pero estan desactivados por defecto, para activarlos, haga click en el icono de sonido.
      </p>
      <ArticleVideoSection
        labelledby="main-menu"
        title="Animaciones del menu principal de selección de juego:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1746473793/main-menu_eevwk1.mp4"
      />
      <ArticleVideoSection
        labelledby="game-levels"
        title="Niveles bloqueados al inicio y desbloqueables al jugar:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1746473841/game-levels_maiibo.mp4"
      />
      <ArticleVideoSection
        labelledby="tutorial-principal"
        title="En cada juego se muestra un video tutorial educativo referenciado en formato APA:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1746473864/introduction-video_mdw60z.mp4"
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
    </>
  ),
};

export default educationalGames;
