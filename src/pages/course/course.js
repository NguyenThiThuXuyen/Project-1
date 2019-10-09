import React from 'react'
import './course.scss'
import SlideItem from '../../components/slide/item/item';
import SlideItems from '../../components/slide/slide';
const Courses = [
   'Tiếng Nhật',
   'Tiếng Hàn',
   'Tiếng Anh',
   'Web Design',
   'FullStack',
   'Mobile Developer',
   'Tiếng Hoa'
]
class Course extends React.Component{
   render(){
       return(
           <React.Fragment>
               <SlideItems items={Courses} product={true}></SlideItems>
           </React.Fragment>
       )
   }
}
export default Course