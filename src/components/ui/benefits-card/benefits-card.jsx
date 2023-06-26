import Title, { TitleSize } from "../title/title";
import BenefitIcon from "../benefits-icon/benefits-icon";
import "./style.css";

function BenefitsCard({
  name, // Заголовок карточки
  description, // Описание карточки
  image, // Иконка
  feature // Особенность (фермерские продукты/магазинный продукт)
}) {

  return (
    <article  className={`benefits-card benefits-card--${feature ? feature : null}`}>
      <header className="benefits-card__header">
        <img 
          src={image}
          width={56}
          height={56}
          alt={name}
        />
        <div className="benefits-card__title">
          <BenefitIcon className="benefits-card__icon" feature={feature} />
          <Title size={TitleSize.SMALL}>{name}</Title>
        </div>
      </header>
      <p 
        className="benefits-card__text"
        dangerouslySetInnerHTML={{ __html: description }} />
    </article>
  );
}

export default BenefitsCard;