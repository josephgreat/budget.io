import BarChartImg from "../../assets/JsxImgs/BarChartImg";
import CalculatorImg from "../../assets/JsxImgs/CalculatorImg";
import EditImg from "../../assets/JsxImgs/EditImg";
import ExcelImg from "../../assets/JsxImgs/ExcelImg";
import JpgImg from "../../assets/JsxImgs/JpgImg";
import Padlock from "../../assets/JsxImgs/Padlock"
import PieChartImg from "../../assets/JsxImgs/PieChartImg";
import World from "../../assets/JsxImgs/World";

let features = [
    {
        title: 'Easily Accessible',
        description: "It's built uniquely to be accessed on any device once logged in.",
        img: <World />         
    },
    {
        title: 'Calculator',
        description: 'Contains a calculator to help users calculate their budget easily. Eliminate time wasted in finding an external calculator.',
        img: <CalculatorImg />       
    },
    {
        title: 'Charts',
        description: "Budget.io employs the use of chart to give a graphical representation of a user's budget and expense.",
        img: [<PieChartImg />, <BarChartImg />]      
    },
    {
        title: 'Secure',
        description: "Equipped with a good security system to ensure that user's budgets and data are encrypted.",
        img: <Padlock />    
    },
    {
        title: 'Editable',
        description: "Budget.io also uses the CRUD system - giving users the opportunity to create, read, update and delete budgets.",
        img: <EditImg />      
    },
    {
        title: 'Downloadable',
        description: "Budgets are downloadable in excel and jpg formats.",
        img: [<JpgImg />, <ExcelImg />]   
    },
];

export default features