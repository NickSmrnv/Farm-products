import "./style.css";

export const BenefitFeature = {
  FARM: "farm",
  STORE: "store"
};

function BenefitIcon({ className = "", feature }) {
  let options;

  switch (feature) {
    case BenefitFeature.FARM:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88AA4D"
      };
      break;
    case BenefitFeature.STORE:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531"
      };
      break
    default:
      options = {
        text: "",
        bgColor: "#000"
      };
      break;
  }

  return options.text ? (
    <span 
      className={`benefits-icon ${className}`}
      style={{ backgroundColor: options.bgColor }}
    >
      {options.text}
    </span>
  ) : null;
}

export default BenefitIcon;