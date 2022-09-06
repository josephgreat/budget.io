import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../firebase";

const db = getFirestore(app);

// let updateData = (data, payload) => {
//     data = "10";
// }
let reducer = (data, action) => {
    let {type, payload} = action;
    switch (type) {
        case "createBudget":
            data = {...data, ...payload};
            let budget = collection(db, "budgets");
            let budgetRef = addDoc(budget, data);
            console.log(budgetRef, budget);
            console.log(data);            
            break;
        case "addExpense":
            data.expenses = [...data.expenses, payload];
            console.log(data);

            break;
    
        default:
            // data = data;
            break;
    }
    // return data;
}

export default reducer;