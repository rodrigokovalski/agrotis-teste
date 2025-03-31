import { StyledHeader } from "./Header.styles";
import AgrotisLogo from "/agrotis-logo.webp";

export default function Header() {
  return (
    <StyledHeader>
      <img src={AgrotisLogo} alt="Agrotis" />
    </StyledHeader>
  );
}
