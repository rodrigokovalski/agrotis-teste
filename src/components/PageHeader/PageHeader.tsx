import { StyledPageHeader } from "./PageHeader.styles";
import { PageHeaderProps } from "./PageHeader.types";

export default function PageHeader({ ...props }: PageHeaderProps) {
  return <StyledPageHeader>{props.children}</StyledPageHeader>;
}
