import { createContext, useContext, useState } from 'react';

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

const useBudget = () => useContext(BudgetContext);

export { BudgetProvider, useBudget }

