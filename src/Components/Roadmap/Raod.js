import "./Road.css";
import { GoPrimitiveDot } from "react-icons/go";
import DashImg from "../../assets/dash.svg";
import RoadMobile from "./RoadMobile";
import RoadLine from "../../assets/backline.svg";
import DotLine from "../../assets/dot1.svg";
import { useTranslation } from "react-i18next";
import TitleDash from "Components/TitleDash";

const data = [
  {
    className: "box-road-1",
    question: "Q4 2022",
    duration: "Nov - Dec",
    showInDesktop: true,
    points: [
      "Initial Project Plan",
      "Website Design",
      "Website Live",
      "Initial smart contracts deployment",
    ],
  },
  {
    className: "box-road-2",
    question: "Q1 2023",
    duration: "Jan - Mar",
    showInDesktop: true,
    points: [
      "Presale Sale",
      "Contract Testing",
      "Project Prototype",
      "Metaverse Demo (Alpha)",
    ],
  },
  {
    className: "box-road-3",
    question: "Q2 2023",
    duration: "April - June",
    showInDesktop: true,
    points: [
      "Pre-Listing CMC and CG Listing",
      "Token Launch",
      "Dex Listing NFT Launch",
      "Main Listing CMC & CG",
      "Exchanges Listing",
      "Metaverse Development",
    ],
  },
  {
    className: "box-road-4",
    question: "Q3 2023",
    duration: "July - Sep",
    showInDesktop: true,
    points: [
      "NFT Launch",
      "Freelance Platform Launch ( Beta Version )",
      "NFT MarketPlace",
      "Marketing to reach vider Audiences",
      "Partnerships ",
    ],
  },
  {
    className: "box-road-4",
    question: "Q4 2023",
    duration: "Oct - Dec",

    showInDesktop: false,
    points: [
      "App development",
      "Metaverse Integration ( Beta version )",
      "Further Development",
    ],
  },
];

export default function Raod() {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="roadmap">
        <div className="container">
          <TitleDash title={t("Roadmap")} className="text-center" />

          <div className="road-slide">
            <img src={RoadLine} alt="" />
          </div>

          <div className="grid-road">
            {data.map(
              (item, i) =>
                item.showInDesktop && (
                  <div className={item.className} key={i}>
                    <div className="text-center rb-img">
                      <img src={DotLine} alt="" style={{ width: "auto" }} />
                    </div>
                    <div className="text-center">
                      <h1>{t(item.question)}</h1>
                      <p>({t(item.duration)})</p>
                    </div>

                    <div className="rd-b">
                      {item.points.map((point, i) => (
                        <p key={i}>
                          <GoPrimitiveDot /> {t(point)}{" "}
                        </p>
                      ))}
                    </div>
                  </div>
                )
            )}

            {/* <div className="box-road-2">
              <div className="text-center rb-img">
                <img src={DotLine} alt="" style={{ width: "auto" }} />
              </div>
              <div className="text-center">
                <h1>{t("Q1 2023")}</h1>
                <p>({t("Jan - Mar")})</p>
              </div>

              <div className="rd-b">
                <p>
                  <GoPrimitiveDot /> {t("PreSale")}{" "}
                </p>
                <p>
                  <GoPrimitiveDot /> {t("Contract Testing")}{" "}
                </p>
                <p>
                  <GoPrimitiveDot /> {t("Project Prototype")}{" "}
                </p>

                <p>
                  <GoPrimitiveDot /> {t("Metaverse Demo(Alpha)")}{" "}
                </p>
                <p>
                  <GoPrimitiveDot /> {t("CMC and CG Listing")}{" "}
                </p>
              </div>
            </div>

            <div className="box-road-3">
              <div className="text-center rb-img">
                <img src={DotLine} alt="" style={{ width: "auto" }} />
              </div>
              <div className="text-center">
                <h1>{t("Q2 2023")}</h1>
                <p>({t("April - June")})</p>
              </div>

              <div className="rd-b">
                <p>
                  <GoPrimitiveDot /> {t("Token Launch")}{" "}
                </p>
                <p>
                  <GoPrimitiveDot /> {t("NFT Launch")}{" "}
                </p>
                <p>
                  <GoPrimitiveDot /> {t("NFT MarketPlace")}{" "}
                </p>

                <p>
                  <GoPrimitiveDot />{" "}
                  {t("Freelance Platform Launch(Beta Version)")}{" "}
                </p>
                <p>
                  <GoPrimitiveDot /> {t("Exchanges Listing")}{" "}
                </p>
                <p>
                  <GoPrimitiveDot /> {t("Metaverse Development")}{" "}
                </p>
              </div>
            </div>

            <div className="box-road-4">
              <div className="text-center rb-img">
                <img src={DotLine} alt="" style={{ width: "auto" }} />
              </div>
              <div className="text-center">
                <h1>{t("Q3 2023")}</h1>
                <p>({t("May - June")})</p>
              </div>

              <div className="rd-b">
                <p>
                  <GoPrimitiveDot /> {t("App Development")}{" "}
                </p>
                <p>
                  <GoPrimitiveDot /> {t("Metaverse Integration(Beta version)")}{" "}
                </p>
                <p>
                  <GoPrimitiveDot /> {t("Further Development")}{" "}
                </p>
              </div>
            </div> */}
          </div>

          <RoadMobile data={data} />
        </div>
      </section>
    </>
  );
}
