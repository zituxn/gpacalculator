import React from 'react';
import Course from "./Course";

class App extends React.Component{

    constructor() {
        super();

        this.state = {
            courses: [{ credit: 4.0, grade: 3 }, { credit: 4.0, grade: 3 }]
        };
    }

    handleChange(i, change){
        const courses = this.state.courses.slice();
        courses[i] = { ...courses[i], ...change }
        this.setState({
            courses: courses
        })
    }

    addCourse(){
        this.setState({
            courses: [ ...this.state.courses, { credit: 4.0, grade: 3 }]
        })
    }

    render() {
        let totalCredit = 0, totalGrade = 0;
        const courses = this.state.courses.map((course, i) => {
            totalCredit += course.credit;
            totalGrade += course.grade * course.credit;
            return <Course index={i} handleChange={this.handleChange.bind(this)} />
        });

        return(
            <div>
                <p className="title has-text-grey">GPA Calculator</p>
                { courses }
                <button className="button is-primary is-rounded" onClick={this.addCourse.bind(this)}> + </button>
                <div className="control is-centered">
                    <div className="gpa tags has-addons">
                        <span className="tag is-dark">GPA</span>
                        <span className="tag is-info">{(totalGrade /totalCredit).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
