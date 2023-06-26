import img1 from "./../assets/eat.png"

const benefitsCard = [
  {
    id: 0,
    name: "Еда намного вкуснее",
    description: "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
    image: img1,
    feature: "farm"
  },
  {
    id: 1,
    name: "Просроченные продукты",
    description: "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
    image: "../assets/garbage.svg",
    feature: "store"
  },
  {
    id: 2,
    name: "Натуральные продукты",
    description: "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
    image: "../assets/sprout.svg",
    feature: "farm"
  },
  {
    id: 3,
    name: "Некачественное мясо",
    description: "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
    image: "../assets/no-meat.svg",
    feature: "store"
  },
];

export default benefitsCard;