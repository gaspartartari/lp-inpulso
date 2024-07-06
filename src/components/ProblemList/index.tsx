import './styles.css';

export default function ProblemsList() {
  const problems = [
    "Baixa visibilidade online",
    "Dificuldade em gerar vendas",
    "Insatisfeito com a plataforma de ecommerce",
    "Campanhas de marketing ineficazes",
    "Não tenho feedbacks sobre a conta",
    "Gestão de anúncios complicada"
  ];

  return (
    <section className="problems-section lp-container">
      <h2>Procurando resolver problemas como estes?</h2>
      <ul className="problems-list">
        {problems.map((problem, index) => (
          <li key={index} className="problem-item">
            {problem}
          </li>
        ))}
      </ul>
    </section>
  );
}
