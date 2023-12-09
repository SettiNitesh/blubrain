import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

import { IFields } from "../../interfaces";
import { BluBrainTextField } from "../shared";
import { signUpFieldsData } from "./SignUpFields";

const SignUpForm = () => {
  return (
    <div className="grid w-full">
      {Object.values(signUpFieldsData).map((field: IFields, index: number) => {
        return (
          <div className="mt-5">
            {field.type === "text" || field.type === "password" ? (
              <BluBrainTextField
                variant={"outlined"}
                type={field.type}
                placeHolder={field.placeHolder ?? ""}
                required={field.isRequired}
                label={field.label}
                styles={{
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "red",
                  },
                }}
              />
            ) : (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="success" />}
                  label={<span className="text-sm">{field.label}</span>}
                />
              </FormGroup>
            )}
          </div>
        );
      })}
      <div className="grid mt-4">
        <Button variant="contained" color="success">
          SignUp
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
