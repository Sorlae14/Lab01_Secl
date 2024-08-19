import { useState } from "react";
const todos =[
    {
        id: '100',
        title :'จิตวิทยาสายดาร์ก',
        author:'Dr.Hiro',
        cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202304/577274/1000260516_front_XXL.jpg?imgname=%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%81",
        category:'จิตวิทยาการพัฒนาตัวเอง,การพัฒนาตัวเอง how to',
        description:'Dr.Hiroเคยเป็นนักขายที่ล้มเหลวขายอะไรก็ไม่มีใครซื้อแต่แล้ววันหนึ่งขณะกำลังดูข่าวเขาก็นึกขึ้นได้ว่า“ในโลกเรามีลัทธิที่ขายของไม่น่าเชื่อถือได้ในราคาแพงลิ่วแถมยังทำให้สาวกยอมทุ่มบริจาคทรัพย์สินจนหมดตัวแล้วทำไมผมถึงขายไม่ออกล่ะ?”เขาจึงเริ่มศึกษาเทคนิคเหล่านั้นอย่างจริงจังอ่านหนังสือทุกเล่มเกี่ยวกับการล้างสมองที่มีในท้องตลาดแล้วเอาไปปรับใช้จนกลายเป็นนักขายระดับท็อปของญี่ปุ่นนั่นคือที่มาของ “จิตวิทยาสายดาร์ก”พบกับเทคนิคทางจิตวิทยาที่ช่วยให้คุณใช้คำพูดควบคุมจิตใจคนทำให้พวกเขาคล้อยตามและทำอย่างที่คุณต้องการโดยไม่รู้ตัว',
        price:'250 บาท',
        url:'https://www.naiin.com/product/detail/577274',
        Bestseller: true,
        Suggestions:false
        
      
    },
    {
        id: '200',
        title :'Why Has Nobody Told Me This Before? วิชาสำคัญที่คุณควรรู้ก่อนที่ชีวิตจะสอนคุณ',
        author:'Dr.Julie Smith',
        cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202401/600920/1000268401_front_XXL.jpg?imgname=Why-Has-Nobody-Told-Me-This-Before?-%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%88%E0%B8%B0%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B8%84%E0%B8%B8%E0%B8%93",
        category:'จิตวิทยาการพัฒนาตัวเอง,การพัฒนาตัวเอง how to',
        description:'มองโลกผ่านมุมจิตวิทยาเพื่อตั้งรับและก้าวผ่านปัญหาในวันที่ชีวิตโยนบททดสอบอันหนักหนามาให้หนังสือเล่มนี้ได้รวบรวบชุดเครื่องมือที่ใช้กันโดยจิตแพทย์และนักจิตบำบัดแต่มันไม่ใช่ทักษะสำหรับผู้ป่วยเท่านั้นทว่าเป็นทักษะชีวิตที่จะช่วยนำทางพวกเราทุกคนให้ก้าวผ่านช่วงเวลาอันยากลำบาก เมื่อเราเข้าใจกลไกการทำงานของจิตใจและเรียนรู้วิธีที่เหมาะสมในการจัดการกับอารมณ์ความรู้สึกเราไม่เพียงสร้างเบาะไว้รองรับจิตใจในวันที่พายุถาโถมเข้าใส่แต่ยังสามารถเติบโตและรับมือกับโลกได้ดีขึ้นในทุก ๆ วัน',
        price:'325 บาท',
        url:'https://www.naiin.com/product/detail/600920',
        Bestseller:true,
        Suggestions:false
        
    },
    {
        id: '300',
        title :'โกคุราคุไก สุขาวดีสีเลือด เล่ม 3 (Mg)',
        author:'ยูโตะ ซาโนะ',
        cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202407/617103/1000273434_front_XXL.jpg?imgname=%E0%B9%82%E0%B8%81%E0%B8%84%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B8%E0%B9%84%E0%B8%81-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%94%E0%B8%B5%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%94-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-3-(Mg)",
        category:'การ์ตูน, การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
        description:'คานาตะถูกตามจับในฐานะผู้ต้องสงสัยคดีฆาตกรรมกินคน...ขณะที่อัลมาวิ่งวุ่นไปทั่วโกคุราคุไกยามราตรี เพื่อช่วย ‘มากะ’ อย่างคานาตะในฐานะเพื่อน—แต่แล้วคานาตะทนต่อสัญชาตญาณไม่ไหวจนออกอาละวาด ระหว่างที่อัลมาพยายามโน้มน้าวอย่างเอาเป็นเอาตายคนที่ปรากฏกายต่อหน้าทั้งสองกลับมอบ ‘ความสิ้นหวัง’ ยิ่งกว่าให้...!?',
        price:'175 บาท',
        url:'https://www.naiin.com/product/detail/617103',
        Bestseller:true,
        Suggestions:false
    },
    {
      id: '400',
      title :'บ้านวิกล เล่ม 1 ',
      author:'อุเก็ตสึ',
      cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202407/617112/1000273441_front_XXL.jpg?imgname=%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%81%E0%B8%A5-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1--1-(Mg)",
      category:'การ์ตูน, การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
      description:'“ตอนเห็นผังบ้านครั้งแรก ผมคิดว่าบ้านหลังนี้แปลกมาก”‘ฉัน’ เป็นนักเขียนอิสระที่เชี่ยวชาญเรื่องลี้ลับ คนรู้จักนำผังบ้านหลังหนึ่งมาให้ฉันดูโดยบอกว่าบ้านนั้นมี ‘พื้นที่ปริศนา’ อันลึกลับอยู่ฉันลองไปขอความคิดเห็นจากนักออกแบบบ้านชื่อคุณคุริฮาระแล้วเขาก็เริ่มชี้ให้เห็นความประหลาดของบ้านหลังนั้นจุดแล้วจุดเล่า…!!',
      price:'175 บาท',
      url:'https://www.naiin.com/product/detail/617112',
      Bestseller:false,
      Suggestions:true
  },
  {
    id: '500',
    title :'ใช้คลื่นพลังบวกดึงดูดพลังสุข',
    author:'เว็กซ์ คิงส์',
    cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202109/533411/1000243428_front_XXL.jpg?imgname=%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%84%E0%B8%A5%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%9A%E0%B8%A7%E0%B8%81%E0%B8%94%E0%B8%B6%E0%B8%87%E0%B8%94%E0%B8%B9%E0%B8%94%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B8%E0%B8%82",
    category:'จิตวิทยาการพัฒนาตัวเอง,การพัฒนาตัวเอง',
    description:'ความลับของการบรรลุในสิ่งยิ่งใหญ่คือการเข้าใจ กฎแห่งแรงสั่นสะเทือนที่กล่าวว่าทุกอย่างในจักรวาลล้วนเกิดจากแรงสั่นสะเทือนทุกแรงสั่นสะเทือนที่มีความถี่ตรงกันสามารถดึงดูดกันได้ อย่าเผลอไผลไปตามสมองที่ติดนิสัยชอบผลักไสโชคและสิ่งดีๆด้วยพลังลบยิ่งคุณส่งคลื่นพลังบวกออกสู่ภายนอก จักรวาลจะยิ่งสะท้อนคลื่นความสุขกลับมาเท่าทวีคูณ ทุกคำพูด อารมณ์ และการกระทำของคุณเปลี่ยนชีวิตคุณได้ทันที เว็กซ์ คิงส์ ผู้ได้รับการยกย่องว่าเป็นผู้นำทางจิตวิญญาณแก่คนรุ่นใหม่จะเปลี่ยนคลื่นความถี่ทางอารมณ์ของคุณให้ตรงกับพลังงานบวกทั้งหลาย เพื่อดึงดูดความสุขและความสำเร็จอย่างที่คุณอาจไม่เคยคิดฝัน เราจะเรียนรู้วิธีรักตัวเองอย่างแท้จริงได้อย่างไร จะเปลี่ยนอารมณ์ลบไปเป็นด้านบวกได้อย่างไร แล้วการมองหาความสุขที่ยั่งยืนนั้นเป็นไปได้จริงไหม เว็กซ์ คิง อินฟลูเอนเซอร์ จะตอบคำถามเกี่ยวกับการใช้ชีวิตที่คนส่วนใหญ่สงสัย นำเสนอในภาษาที่อ่านง่าย ย่อยเป็นหัวข้อสั้นๆ มีภาพประกอบและแทรก Quote เป็นแรงบันดาลใจ',
    price:'245 บาท',
    url:'https://www.naiin.com/product/detail/617103',
    Bestseller:false,
    Suggestions:true  
}
  
];

function CheckBestsell ({Bestseller}){
  if(Bestseller)
      return (
     <>
       <h1 className="text-red-900 font-bold text-5xl mb-2 text-center">ขายดี!!!!!</h1> 
       </>
     );
  else
      return(
     <>

       </>
     ); 
}
function CheckSuggestions ({Suggestions}){
  if(Suggestions)
      return (
     <>
        <h1 className="text-green-500 font-bold text-5xl mb-2 text-center">แนะนำ!!!!!</h1> 
       </>
     );
  else
      return(
     <>

       </>
     ); 
}

function Items({id,title,author,cover,category,description,price,url,Bestseller,Suggestions}:{ id:string,
    title:String,author:String,cover:String,category:String,description:String,price:String,url:String,Bestseller:Boolean,Suggestions:Boolean}){
    console.log("Key:",id);
    const [like,setLike] = useState(false);

    function handleClickLike(){
        if(like)
            setLike(false);
        else
            setLike(true);
    }
        return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <CheckBestsell Bestseller={Bestseller} />
        <CheckSuggestions Suggestions={Suggestions} />
      </p>
      
      <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
      <h1>{author}</h1>
      <img className="w-100 h-300" src={cover} />
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Natthasit Srikaeo</p>
        <p className="text-gray-600">ซอและบอกต่อ</p>
      </div>
    </div>
  </div>
</div>

    )
}


export default function ToDoLists(){
    const enrIitems = todos.filter(subject =>
            subject.Suggestions===true||
            subject.Suggestions===false
            
    );
    const items = enrIitems.map(Bookitem =>
    <Items id={Bookitem.id} title ={Bookitem.title} author={Bookitem.author} cover={Bookitem.cover} category={Bookitem.category} description={Bookitem.description} price={Bookitem.price} url={Bookitem.url} Bestseller={Bookitem.Bestseller} Suggestions={Bookitem.Suggestions}/>
    );

    return(
        <div className="p-5  bg-sky-300">
        <center><h1 className="text-xl font-bold">หนังสือที่น่าติดตาม</h1></center>
        <ul>{items}</ul>
        </div>
    )
}