interface MainButtonProps {
  toggleDisplayMore: () => void;
  text: string;
}

const MainButton = ({toggleDisplayMore, text}: MainButtonProps) => {
  
  return(
    <button
      className="button_transparent_rounded"
      onClick={toggleDisplayMore}
      type="button"
    >
      <span className="relative z-[1]">
        { text }
      </span>
    </button>
  );
};

export default MainButton;