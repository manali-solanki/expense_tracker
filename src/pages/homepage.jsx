import ExpenseList from "../components/ExpenseList";
import Navbar from "../components/Navbar";

 function Homepage(){
    const expense=[
        {
    amount: "2,000",
    shopping:"greocery shopping",
    date:"17 Nov 2026",
    category : "food"
},
{
    amount:"1,500",
    shopping:"cloths shopping",
    date:"16 Nov 2026",
    category:"shopping"
},
{
    amount:"800",
    shopping:"vegetable shopping",
    date:"15 Nov 2026",
    category:"fast-food"
},
]

    return(
        <>
        <Navbar/>
        <ExpenseList expenses={expense}/>
        </>
    );
}
export default Homepage;