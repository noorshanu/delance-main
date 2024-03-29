import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./boilerplate.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet } from "wagmi/chains";
import { Web3Modal } from "@web3modal/react";
import { EthereumClient, w3mConnectors } from "@web3modal/ethereum";
import { infuraProvider } from "wagmi/providers/infura";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const chains = [mainnet];
//console.log(chains[0])
const PROJECT_ID = "4ff178b5adf37e8779469102693e824b";
// Wagmi client
const { provider } = configureChains(
  [mainnet],
  [
    infuraProvider({ apiKey: "7b50cd907db34540b993f3209ba55488" }),
    publicProvider(),
  ]
);

//console.log("provider", provider)
const wagmiClient = createClient({
  autoConnect: true,

  connectors: w3mConnectors({
    projectId: PROJECT_ID,
    version: "2", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <App />
    </WagmiConfig>
    <Web3Modal
      themeVariables={{ "--w3m-z-index": 1000000000000 }}
      projectId={PROJECT_ID}
      ethereumClient={ethereumClient}
    />
    <ToastContainer
      style={{ zIndex: 100000000000000 }}
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
