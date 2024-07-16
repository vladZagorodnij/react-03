import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result({userData}) {
    const resultData = calculateInvestmentResults(userData),
        initiaInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

    console.log(resultData);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((yearData) => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initiaInvestment,
                          totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}