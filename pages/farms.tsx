import { FC } from "react";
import { Page, Note } from "@geist-ui/react";
import Link from "next/link";
import { TopBar } from "../features/TopBar/TopBar";
import { Footer } from "../features/Footer/Footer";
import { GaugeList } from "../features/Gauges/GaugeList";
import { MiniFarmList } from "../features/MiniFarms/MiniFarmList";
import { Connection } from "../containers/Connection";
import { NETWORK_NAMES } from "containers/config";

const Gauges: FC = () => {
  const { chainName } = Connection.useContainer();

  return (
    <>
      <TopBar />
      <Page>
        <Page.Content>
          {chainName != NETWORK_NAMES.POLY && (
            <Note
              label={false}
              style={{ textAlign: "center", fontSize: "15px" }}
            >
              Welcome to cucumber farms! There are no farms on main net yet, for our farms please switch to the polygon network.
            </Note>
          )}
          <h1 style={{ fontSize: `2rem`, fontFamily: `Source Code Pro` }}>
            Farms
          </h1>
          {chainName === NETWORK_NAMES.POLY ? (
            <MiniFarmList />
          ) : (
            // <GaugeList />
            <p>There are no farms on ETH Main net at current.</p>
          )}
        </Page.Content>
        <Footer />
      </Page>
    </>
  );
};

export default Gauges;
