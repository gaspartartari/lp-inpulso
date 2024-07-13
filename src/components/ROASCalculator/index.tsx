import React, { useState, ChangeEvent, FormEvent } from 'react';
import './styles.css';

const ROASCalculator: React.FC = () => {
    const [revenue, setRevenue] = useState<string>('');
    const [fixedCosts, setFixedCosts] = useState<string>('');
    const [variableCosts, setVariableCosts] = useState<string>('');
    const [roas, setRoas] = useState<number | null>(null);

    const calculateROAS = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const revenueNum = parseFloat(revenue);
        const fixedCostsNum = parseFloat(fixedCosts);
        const variableCostsNum = parseFloat(variableCosts);

        if (isNaN(revenueNum) || isNaN(fixedCostsNum) || isNaN(variableCostsNum)) {
            alert("Por favor, insira números válidos.");
            return;
        }

        const result = revenueNum / (revenueNum - fixedCostsNum - variableCostsNum);
        setRoas(parseFloat(result.toFixed(2)));
    };

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    };

    return (
        <div className="lp-container">
            <div className="roas-calculator ">
                <h2>Calculadora de ROAS</h2>
                <p>
                    <span>ROAS (Return on Ad Spend) mede a eficácia das campanhas de marketing digital.
                        Mostra a receita gerada por cada unidade monetária gasta em anúncios.</span> <br />
                    <span>Nosso cálculo de <strong>ROAS de equilíbrio</strong> indica qual o mínimo de retorno necessário para sair no empate.</span><br />
                    <span><strong>Qualquer valor acima</strong> do ROAS de equilíbrio é lucro, e <strong>qualquer valor abaixo</strong> é prejuízo.</span>
                </p>
                <form onSubmit={calculateROAS}>
                    <div className="form-group">
                        <label>Receita:</label>
                        <input
                            type="number"
                            value={revenue}
                            onChange={handleInputChange(setRevenue)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Custos Fixos:</label>
                        <input
                            type="number"
                            value={fixedCosts}
                            onChange={handleInputChange(setFixedCosts)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Custos Variáveis:</label>
                        <input
                            type="number"
                            value={variableCosts}
                            onChange={handleInputChange(setVariableCosts)}
                            required
                        />
                    </div>
                    <button className='lp-roas-calculator-button' type="submit">Calcular ROAS</button>
                </form>
                {roas !== null && (
                    <div className="result">
                        <h3>ROAS: {roas}</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ROASCalculator;
