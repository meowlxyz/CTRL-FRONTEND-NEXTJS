import { ConnectButton } from "@rainbow-me/rainbowkit";

import React from "react";
const WalletConnectButton = () => {
  return (
    <ConnectButton
      label="Connect Wallet"
      accountStatus="avatar"
      chainStatus="icon"
    />
  );
};

export default WalletConnectButton;
