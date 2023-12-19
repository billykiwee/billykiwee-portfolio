import { Block } from "./components/Block/Block.js";
import {
  Experiences,
  ExperiencesInt,
} from "./components/Experience/Experience.js";
import "./scss/App.scss";

import Tabs from "./components/Tabs/Tabs.js";
import { useEffect, useState } from "react";
import { Game } from "./game/game.js";

export default function App() {
  const xps: ExperiencesInt[] = [
    {
      company: {
        name: "Kiwee",
        logo: "https://kiwee.site/wp-content/uploads/2022/05/Group-8800-1.png",
        link: "https://kiwee.site/",
      },
      type: "Freelance",
      date: "4 ans",
      location: "Valence",
      text: "Développement full stack sur différents projets clients.",
    },
    {
      company: {
        name: "Floa Bank",
        logo: "https://kiwee.site/wp-content/uploads/2023/12/image-32.png",
        link: "https://www.floa.com/",
      },
      type: "Freelance",
      date: "4 mois",
      location: "Bordeaux",
      text: "Déploiement de la solution Basikon pour les services de Floa bank.",
    },
    {
      company: {
        name: "Amiltone",
        logo: "https://medinjob.io/wp-content/uploads/2021/03/Logo-Amiltone-Mini-Color-1.png",
        link: "https://www.amiltone.com/",
      },
      type: "CDI",
      date: "1 an",
      location: "Lyon",
      text: "Consultant full stack TS/JS et intervention sur des projets internes.",
    },
    {
      company: {
        name: "Athena",
        logo: "https://kiwee.site/wp-content/uploads/2023/02/athena.png",
        link: "https://www.athena-co.io/",
      },
      type: "Freelance",
      date: "4 mois",
      location: "Bordeaux",
      text: "Consultant full stack TS/JS et intervention sur des projets internes.",
    },
  ];

  const contact = [
    {
      label: "social-media",
      icons: ["github.png", "linkedin.png"],
      value: "BillyKiwee",
    },
    {
      label: "mail",
      icons: ["mail.png"],
      value: "billyturpin642@gmail.com",
    },
    {
      label: "phone",
      icons: ["phone.png"],
      value: "0768 53 80 89",
    },
    {
      label: "location",
      icons: ["location.svg"],
      value: "Valence, 26000",
    },
  ];

  const degree = [
    {
      company: {
        name: "Linkedin",
        logo: "https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png",
        link: "https://kiwee.site/",
      },
      type: "Certification",
      date: "2020",
      location: "",
      text: "Évaluation des compétences ",
    },
    {
      company: {
        name: "CCI De la reunion",
        logo: "https://kiwee.site/wp-content/uploads/2023/12/Logo_CCI_Ile_de_la_Reunion-1.png",
        link: "https://kiwee.site/",
      },
      type: "Certification",
      date: "2019",
      location: "Saint-Louis, Réunion",
      text: "BAC+2 TSMEL",
    },
  ];

  const [mainDiv, setMainDiv] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMainDiv(document.querySelector("main") as HTMLElement);
  }, []);

  const [gameON, setGameON] = useState(false);

  const [playerState, setPlayerState] = useState("normal");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setPlayerState("jump");

        setTimeout(() => {
          setPlayerState("normal");
        }, 400);
      }
      if (e.key === "ArrowDown") {
        setPlayerState("croup");

        setTimeout(() => {
          setPlayerState("normal");
        }, 400);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const skin: { [key: string]: string } = {
    jump: "perso-jump.png",
    croup: "perso-croup.png",
    normal: "perso-face.png",
    move: "perso-move.gif",
  };

  useEffect(() => {
    window.addEventListener("keydown", () => {
      const html = document.querySelector("html") as HTMLElement;

      if (html) html.style.overflow = "hidden";
    });
  });

  const [run, setRun] = useState(0);
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!gameON) return;

    if (run < 100) {
      intervalId = setInterval(() => {
        setRun((prevRun) => prevRun + 10);
      }, 300);
    } else {
      const decor = document.querySelector("#decor");

      if (decor) {
        decor.remove();
      }
    }

    // Nettoyage de l'intervalle lorsque le composant est démonté ou lorsque gameON devient false
    return () => {
      clearInterval(intervalId);
    };
  }, [gameON, run]);

  return (
    <>
      <main>
        <section
          className="profile"
          style={{ marginTop: gameON ? "80%" : "0%" }}
        >
          <div className="left">
            {!gameON ? (
              <div
                className="img"
                onClick={() => setGameON((on) => (!on ? true : false))}
              >
                <img src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/332726398_786714823027082_5430338818790538215_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=3z0PglwEf1cAX9Yo7P0&_nc_ht=scontent-cdg4-2.xx&oh=00_AfCA4V4JeNOqzV-sCCdQ2gcCNpjKoBNKIbWUWZYqNECgAQ&oe=6584FC3F" />
              </div>
            ) : (
              <div className="game">
                <div id="decor" style={{ marginLeft: `-${run}%` }}>
                  <img id="virus" src="./assets/virus.png" />
                </div>

                <img
                  id="perso"
                  src={"./assets/" + skin[playerState]}
                  onClick={() => setGameON((on) => (!on ? true : false))}
                />
              </div>
            )}

            <div className="heading">
              <h1>Billy Turpin</h1>
              <h2>Développeur full stack confirmé</h2>
            </div>
          </div>

          <button className="cta">Prendre rendez-vous</button>
        </section>

        <section className="blocks">
          <Block label="Contact">
            {contact.map((list, key) => {
              return (
                <div className="contact-list-item" key={key}>
                  <div className="list-icons">
                    {list.icons.map((icon, key) =>
                      icon ? (
                        <div className="icon" key={key}>
                          <img src={"./assets/" + icon} alt={list.label} />
                        </div>
                      ) : null
                    )}
                  </div>
                  <span>{list.value}</span>
                </div>
              );
            })}
          </Block>
          <Block label="Formations">
            {degree.map((experience, key) => (
              <Experiences {...experience} key={key} />
            ))}
          </Block>

          <Block label="Compétences">{contact.toLocaleString()}</Block>

          <Block label="Expériences Professionnelles">
            {xps.map((experience, key) => (
              <Experiences {...experience} key={key} />
            ))}
          </Block>

          <Block label="Compétences">
            <Tabs />
          </Block>
        </section>
        {/*  {bubble(mainDiv)} */}
      </main>
    </>
  );
}

/* const bubble = (mainDiv: HTMLElement | null) => {
  if (!mainDiv) return;

  return Array(4)
    .fill("")
    .map((_, index) => (
      <svg
        key={index}
        className="bubble"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 288 288"
        style={{
          width: Math.floor(Math.random() * 400) + "px",
          height: Math.floor(Math.random() * 400) + "px",
          top: Math.floor(Math.random() * mainDiv.clientHeight) + "px",
          left: Math.floor(Math.random() * mainDiv.clientWidth) + "px",
        }}
      >
        <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
          <stop offset="0%" stop-color="rgb(95,54,152)" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(247,109,138)" stop-opacity="1" />
        </linearGradient>
        <path
          fill={
            ["orange", "var(--blue)", "var(--blue)", "yellow", "green"][
              Math.floor(Math.random() * 5)
            ]
          }
        >
          <animate
            id="animation-to-check"
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="5s"
            values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
    c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
    c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
    c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
    
    
    M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
    c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
    c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
    C48.9,198.6,57.8,191,51,171.3z;
    
    M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
    c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
    c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
    c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z    "
          />
        </path>
      </svg>
    ));
};
 */
