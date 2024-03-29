import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { Circles } from "react-loader-spinner";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n";
import NestedApp from "layouts/NestedApp";
import ScrollToTop from "Components/ScrollToTop ";
import OneSignal from "react-onesignal";

function App() {
  const [loading, setLoading] = useState(true);
  // const { open } = useWeb3Modal();
  // const defaultProvider = new ethers.providers.JsonRpcProvider(RPCUrl);
  // const { data: signer, isError, isLoading } = useSigner();
  // const myProvider = useProvider();
  // const provider = getProvider();
  // const { address: account } = useAccount();
  // const [contracts, setContracts] = useState({});


  // console.log("provider 😀😀😀");
  // console.log(provider);

  // useEffect(() => {
  //   if (!signer?.provider) return;
  //   const contracts = {};

  //   for (const [token, address] of Object.entries(ContractAddr)) {
  //     contracts[token] = new ethers.Contract(
  //       address,
  //       token === "Main" ? BigNFTABI : BEP20ABI,
  //       signer
  //     );
  //   }
  //   setContracts(contracts);
  // }, [signer]);

  // useEffect(() => {
  //   if (account) {
  //     if (!signer) {
  //       contracts.Main = new ethers.Contract(
  //         ContractAddr.Main,
  //         BigNFTABI
  //         // provider
  //       );
  //       contracts["USDT"] = new ethers.Contract(
  //         ContractAddr.USDT,
  //         BEP20ABI
  //         // provider
  //       );
  //     } else {
  //       contracts.Main = new ethers.Contract(
  //         ContractAddr.Main,
  //         BigNFTABI,
  //         signer
  //       );
  //       contracts["USDT"] = new ethers.Contract(
  //         ContractAddr.USDT,
  //         BEP20ABI,
  //         signer
  //       );
  //     }
  //   } else {
  //     contracts.Main = new ethers.Contract(
  //       ContractAddr.Main,
  //       BigNFTABI,
  //       provider
  //     );
  //   }
  // }, [account, signer, provider]);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect (() => {
    OneSignal.init({
      // appId: "4adb1626-9939-4d4c-8f5c-92cce7be454a",
      appId: "4adb1626-9939-4d4c-8f5c-92cce7be454a",
    
    });
  })


  if (loading) {
    return (
      <div className="-app-loader">
        <Circles height="80" width="80" color="#00a652" />
        <h2 className="green-light weight-700">DeeLance</h2>
      </div>
    );
  }

  return (
    <>
      {/* <UserContext.Provider
        value={{
          provider,
          account,
          contracts,
          connectWallet: open,
          disconnectWallet: open,
        }}
      > */}
      {/* <Router basename="/DeeLance-WalletConnect-v2"> */}
      <I18nextProvider i18n={i18next}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Navigate to="/en" />} />
            <Route path="/:locale/*" element={<NestedApp />} />
          </Routes>
        </Router>
      </I18nextProvider>
      {/* </UserContext.Provider> */}
    </>
  );
}

export default App;
