import './App.css';
import Section from './component/Section';
import Template from './component/Template';
import Content from './component/Content';
import Pic2 from './component/Pic2';
import Footer from './component/Footer';

function Page3() {
  const textinput = <input type='text'/>
  return (
    <div className="App">
      
        <Template/>
        <Section heading='กิจกรรมเปิดโลกชุมนุม Activity Festival 2023'/>
        <Pic2/> 
        <Content 
          mainHeading="เชิญชวนน้องๆปี1เข้าร่วมกิจกรรมเปิดโลกชุมนุม Activity Festival 2023 ในวันเสาร์ที่ 7 ตุลาคมนี้"    
          mainHeading1="เวลา 8:30-12:00 น. ณ ลานวัฒนธรรม ฝากชุมนุมคอมพิวเตอร์ไว้ในอ้อมอกอ้อมใจด้วยนะคะ"
        />
        
        <Footer/>
      
      
    </div>
  );
}

export default Page3;
