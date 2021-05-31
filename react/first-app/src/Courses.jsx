import React, { Component } from "react";
import './toggle.css'

export default class Courses extends Component {
  state = {
    courses: [
      {
        id: 1,
        name: "learn react from scratch",
        price: 30, //dollar
        category: "IT & technology",
        creator: "MAX MILIAN SHWARZMOLLER",
        rate: 4.5,
        date: "12/12/2020",
        hours: 10,
        isActive:true,
        isShow:false
      },
      {
        id: 2,
        name: "javascript fundamentals before learning react",
        price: 12, //dollar
        category: "IT & technology",
        creator: "BRAD TRAVERSY",
        rate: 4.5,
        date: "05/05/2020",
        hours: 20,
        isActive:true,
        isShow:true
      },

      {
        id: 3,
        name: "nodejs from 0 to hero",
        price: 15, //dollar
        category: "IT & technology",
        creator: "DEV ED",
        rate: 4.5,
        date: "09/05/2020",
        hours: 40,
        isActive:true,
        isShow:true
      },
      {
        id: 4,
        name: "MERN STACK FOR ADVANCED",
        price: 12, //dollar
        category: "IT & technology",
        creator: "BRAD traversy",
        rate: 4.5,
        date: "05/22/2020",
        hours: 50,
        isActive:true,
        isShow:true
      },
      {
        id: 5,
        name: "LEARN ANGULAR 10 WITH FIREBASE",
        price: 18, //dollar
        category: "IT & technology",
        creator: "YOHA DOE",
        rate: 4,
        date: "06/06/2019",
        hours: 35,
        isActive:true,
        isShow:true
      },
      {
        id: 6,
        name: "LARAVEL 8 LAST UPDATE",
        price: 18, //dollar
        category: "IT & technology",
        creator: "THE NET NINJA",
        rate: 4,
        date: "08/06/2016",
        hours: 30,
        isActive:true,
        isShow:true
      },
    ],
  };
  render() {
    const { courses } = this.state;

    const primary='list-group-item active'
    const secondary='list-group-item bg-secondary'

    const deleteCourse = (id) => {
      this.setState({
        courses: this.state.courses.filter((course) => course.id != id),
      });
    };

    const changeColor=(id)=>{

        const newTable=courses

        for (let i = 0; i < newTable.length; i++) {
              
            if(newTable[i].id==id)
            {
                newTable[i].isActive=!newTable[i].isActive
            }   
        }
            this.setState({
                courses:newTable
            })
    }

    const showHideList=(id)=>{
      const newTable=courses
      for (let i = 0; i < newTable.length; i++) {
        if(newTable[i].id==id)
        {
            newTable[i].isShow=!newTable[i].isShow
        }
      }
      this.setState({
        courses:newTable
      })
    }


    return (
      <div className="container mt-5">
        <div className="row">
          {courses.map((course) => (
            <ul className="list-group col-md-4 mt-2">
              <li className={course.isActive==true? primary : secondary}>

                <label className="switch">
                  <input onClick={changeColor.bind(this,course.id)}  type="checkbox" defaultChecked />
                  <span className="slider round" />
                </label>

                <br />

                <strong >{course.name}</strong>

                <br />

                <button className='btn btn-primary' onClick={showHideList.bind(this,course.id)}> 
                <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </button>


              </li>

              <div className={course.isShow==false?'d-none' : 'd-block'}>
                <li className="list-group-item">{course.price}</li>
                <li className="list-group-item">{course.creator}</li>
                <li className="list-group-item">{course.hours}</li>
                <li className="list-group-item">{course.rate}</li>
                <li className="list-group-item">{course.date}</li>
                <li className="list-group-item">
                  <button
                    onClick={deleteCourse.bind(this, course.id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </li>
              </div>


            </ul>
          ))}
        </div>
      </div>
    );
  }
}
