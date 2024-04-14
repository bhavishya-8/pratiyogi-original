import AdmitCardsTop from "../admitCardandExam/admitCardExamTopSection";
import Nav from "../common/nav"
import Footer from "../common/footer"
import Header from "../common/head";
import ExamSection from "../admitCardandExam/ExamSection";
import AdmitMonthDropdown from "../admitCardandExam/admitMonthDropdown";
function AdmitCardPage(){
    return(<>
        <Nav/>
        <Header/>
        <AdmitCardsTop/>
        <AdmitMonthDropdown/>
        {/* <ExamSection/> */}
        <Footer/>
        </>
    );
}

export default AdmitCardPage;