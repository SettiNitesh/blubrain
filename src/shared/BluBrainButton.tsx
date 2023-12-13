import { Button } from '@mui/material';

interface IButtonProps {
  title: string;
  variant?: 'text' | 'outlined' | 'contained';
  isDisabled?: boolean;
  href?: string;
  disableElevation?: boolean;
  onClick: () => void;
  color?: 'success' | 'error' | 'warning';
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  styles?: string;
}

const BluBrainButton = ({
  title,
  variant = 'contained',
  isDisabled = false,
  href,
  disableElevation,
  onClick,
  color = 'success',
  size = 'medium',
  startIcon,
  endIcon,
  styles,
}: IButtonProps) => {
  return (
    <Button
      variant={variant}
      disabled={isDisabled}
      href={href}
      disableElevation={disableElevation}
      onClick={onClick}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      className={styles}
    >
      {title}
    </Button>
  );
};

export default BluBrainButton;
