import "./experiences.scss";

export interface ExperiencesInt {
  company: {
    name: string;
    logo: string;
    link: string;
  };
  type: string;
  date: string;
  location: string;
  text: string;
}

export function Experiences({
  company,
  type,
  date,
  location,
  text,
}: ExperiencesInt) {
  return (
    <div className="experience">
      <header>
        <a className="logo" href={company.link}>
          <img src={company.logo} />
        </a>
        <div className="heading">
          <label>{company.name.toUpperCase()}</label>

          <div className="info">
            {type && <HeadingInfo info={type} logo="suitcase.svg" />}

            {location && <HeadingInfo info={location} logo="location.svg" />}

            {date && <HeadingInfo info={date} logo="calendar.svg" />}
          </div>

          <p>{text}</p>
        </div>
      </header>
    </div>
  );
}

function HeadingInfo({ logo, info }: { logo: string; info: string }) {
  return (
    <div className="heading-type">
      <img src={`./assets/${logo}`} alt="icon" />

      <span>{info}</span>
    </div>
  );
}
