import './App.css';
import Section from './component/Section';
import Template from './component/Template';
import Content from './component/Content';
import Pic from './component/Pic';
import Buttonn from './component/Buttonn';
import Footer from './component/Footer';



function Page1() {
  return (
    <div className="App">
        lylylyll
        <Template/>
        <Section heading='จัดแข่งเกม Tournament Valorant เงินรางวัลมูลค่ารวม 3,000 บาท'/>
        <Pic/> 
        <Content 
        mainHeading="พี่ๆน้องๆคนไหนสนใจเกี่ยวกับเกม Esport รบกวนทำแบบสอบถามของทางชุมนุมให้หน่อยนะครับ แล้วพบกันเร็วๆนี้ รอติดตามได้เลยค้าบบ"
        subHeading1="เงื่อนไขเพิ่มเติม"
        subHeading2="1) จัดหา Team นักเเข่ง 5-6 คน"
        subHeading3="2) มีเงินรางวัลให้กับผู้ชนะมูลค่ารวม 3000 บาท"
        subHeading4="3) เข้ารวมฟรี"
        subHeading5="4) สามารถนำอุปกรณ์ส่วนตัวเข้ามาใช้รวมการเเข่งได้"
        subHeading6="5) กำหนดล็อคเฟรมเรทในเกมอยู่ที่ไม่เกิน 200 FPS"
        />
        <Buttonn/>
        <Footer/>
      
      
    </div>
  );
}

export default Page1;
