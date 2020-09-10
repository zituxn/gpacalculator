import React from 'react';

class Course extends React.Component{

    handleGradeChange(event){
        this.props.handleChange(this.props.index, {grade: Number(event.target.value)});
    }
    handleCreditChange(event){
        this.props.handleChange(this.props.index, {credit: Number(event.target.value)});
    }

    render() {
        return(
            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    <div className="select">
                        <select onChange={this.handleCreditChange.bind(this)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4" selected>4</option>
                        </select>
                    </div>
                </div>

                <div className="control">
                    <div className="select">
                        <select onChange={this.handleGradeChange.bind(this)}>
                            <option value="4">A+</option>
                            <option value="3.75">A</option>
                            <option value="3.5">A-</option>
                            <option value="3.25">B+</option>
                            <option value="3" selected>B</option>
                            <option value="2.75">B-</option>
                            <option value="2.5">C+</option>
                            <option value="2.25">C</option>
                            <option value="2">D</option>
                        </select>
                    </div>
                </div>
            </div>




        )
    }
}

export default Course;
