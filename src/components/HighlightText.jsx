import clsx from "clsx";

const HighlightText = ({ className="text-blue-50", children }) => (
  <strong className={clsx('italic', className)}>{children}</strong>
);

export default HighlightText;