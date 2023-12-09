import { SxProps, TextField, TextFieldVariants, Theme } from "@mui/material";

interface ITextFieldProps {
  variant: TextFieldVariants;
  required: boolean;
  label: string;
  placeHolder: string;
  type: string;
  styles?: SxProps<Theme> | undefined;
}

const BluBrainTextField = ({
  variant,
  label,
  required = false,
  styles,
  type,
  placeHolder,
  ...rest
}: ITextFieldProps) => {
  return (
    <TextField
      fullWidth
      type={type}
      placeholder={placeHolder}
      variant={variant}
      required={required}
      label={label}
      color="success"
      sx={styles}
      {...rest}
    />
  );
};

export default BluBrainTextField;
