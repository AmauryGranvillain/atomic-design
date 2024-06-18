import './buttonSearch.css';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const ButtonSearch = ({
  label,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button-search button--${size || "medium"}`}
      {...props}
    >
      {label}
    </button>
  );
};
