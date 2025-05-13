import clsx from "clsx";

interface MainButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

const MainButton = ({onClick, text, className}: MainButtonProps) => {
  
  return(
    <button
      className={clsx("button_transparent_rounded", className)}
      onClick={onClick}
      type="button"
    >
      <span className="relative z-[1]">
        { text }
      </span>
    </button>
  );
};

export default MainButton;