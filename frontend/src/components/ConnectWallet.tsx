import { ConnectKitButton } from "connectkit";

import styled from "styled-components";
const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 8px 16px;
  color: #ffffff;
  background: #ff7a00;
  font-size: 16px;
  font-weight: 500;
  border-radius: 0.5rem;
  box-shadow: 0 4px 24px -6px #ff7a00;

  transition: 200ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 40px -6px #ff7a00;
  }
  &:active {
    transform: translateY(-3px);
    box-shadow: 0 6px 32px -6px #ff7a00;
  }
`;

export const ConnectWallet = ({ buttonText = "Connect Wallet" }) => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <StyledButton onClick={show}>
            {isConnected ? ensName ?? truncatedAddress : buttonText}
          </StyledButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
