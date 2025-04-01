import { StyledForm } from "./Form.styles";
import { FormProps } from "./Form.types";

export default function Form({ ...props }: FormProps) {
  return <StyledForm {...props}>{props.children}</StyledForm>;
}
