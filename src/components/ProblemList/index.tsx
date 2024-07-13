import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faChartLine, faShoppingCart, faBullhorn, faCommentDots, faCogs } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export default function ProblemsList() {
  const problems = [
    { text: "Baixa visibilidade online", icon: faEye, highlight: "visibilidade online" },
    { text: "Dificuldade em gerar vendas", icon: faChartLine, highlight: "gerar vendas" },
    { text: "Migração ", icon: faShoppingCart, highlight: "plataforma de ecommerce" },
    { text: "Campanhas de marketing ineficazes", icon: faBullhorn, highlight: "marketing ineficazes" },
    { text: "Não tenho feedbacks sobre a conta", icon: faCommentDots, highlight: "feedbacks sobre a conta" },
    { text: "Pixel de  ", icon: faCogs, highlight: "rastreamento bugado" }
  ];

  return (
    <section className="problems-section lp-container">
      <h2>Procurando resolver problemas como estes?</h2>
      <ul className="problems-list">
        {problems.map((problem, index) => (
          <li key={index} className="problem-item">
            <FontAwesomeIcon icon={problem.icon} className="problem-icon" />
            <span>
              {problem.text.split(problem.highlight)[0]}
              <strong>{problem.highlight}</strong>
              {problem.text.split(problem.highlight)[1]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
