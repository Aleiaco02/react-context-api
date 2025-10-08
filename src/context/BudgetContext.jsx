import { createContext, useContext, useState, useEffect } from 'react';

const BudgetContext = createContext();


const BudgetProvider = ({ children }) => {

    const [budgetMode, setBudgetMode] = useState();

    return (
        <div>BudgetContext</div>
    )
}

export default BudgetContext