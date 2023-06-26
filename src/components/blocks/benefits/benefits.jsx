import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import BenefitsCard from "../../ui/benefits-card/benefits-card";
import "./style.css";

function Benefits({ benefits }) {
  return (
    <section className="benefits">
      {benefits?.length ? (
        <>
          <Title>Почему фермерские продукты лучше?</Title>
          <ul className="benefits__list">
            {benefits.map((benefit) => (
              <li className="benefits__item" key={benefit.id}>
                <BenefitsCard {...benefit} />
              </li>
            ))}
          </ul>
          <Button>Купить</Button>
        </>
      ) : null}
    </section>
  );
}

export default Benefits;