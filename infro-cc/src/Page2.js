import './App.css';
import Section from './component/Section';
import Template from './component/Template';
import Content from './component/Content';
import Pic1 from './component/Pic1';
import Footer from './component/Footer';
import Gallery from './component/Gallery';
import Image4 from './component/Image4';



function Page2() {
  const textinput = <input type='text'/>
  return (
    <div className="App">
      
        <Template/>
        <Section heading='เริ่มแล้ว! ตลาดนัดชุมชนเทคโน'/>
        <Pic1/>
        <Content 
        mainHeading="เริ่มแล้ว! ตลาดนัดชุมชนเทคโน  ณ​  ถนนทางลงหาดพระจอม​ ทุกวันพุธสามารถมาเดินซื้อ   ฟังเพลงชิลๆกันได้น้าา"
        />
        <Gallery/>
        <Image4/>
        <Footer/>
      
      
    </div>
  );
}

export default Page2;
