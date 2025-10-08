import { createContext, useContext, useState, useEffect } from 'react';

const BudgetContext = createContext();


const BudgetProvider = ({ children }) => {

    const [budgetMode, setBudgetMode] = useState(false);

    const toggleBudgetMode = () => {
        if (budgetMode === true) {
            setBudgetMode(false);
        } else {
            setBudgetMode(true);
        }
    };

    return (
        <BudgetContext.Provider value={{ budgetMode, toggleBudgetMode }}>
            {children}
        </BudgetContext.Provider>
    )
}

export default BudgetContext