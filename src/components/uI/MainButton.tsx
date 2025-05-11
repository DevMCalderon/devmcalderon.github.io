import { useTranslation } from "react-i18next";

interface MainButtonProps {
  toggleDisplayMore: () => void;
}

const MainButton = ({toggleDisplayMore}: MainButtonProps) => {
  const [ t ] = useTranslation("global");
  
  return(
    <button
    className="button_transparent_rounded shadow-sm shadow-border_color1 hover:shadow-md hover:shadow-neon_color2 flex m-auto
    justify-center mt-6 w-fit border-[1.5px] border-solid border-border_color1 bg-[black] bg-opacity-40"
        onClick={toggleDisplayMore}
        >
        <span className="relative z-[1]">
          {t('TabPanelItem.display_more')}
        </span>
      </button>
  );
};

export default MainButton;