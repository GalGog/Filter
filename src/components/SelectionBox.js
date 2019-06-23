import React from 'react';
import {newCandidates} from '../data';

class SelectionBox extends React.Component {

    getSkills() {
        let skills = [];
        newCandidates.filter(function (candidate) {
            candidate.skills.filter(function (skill) {
                if (!skills.includes(skill)) {
                    skills.push(skill);
                }
            });
        });
        return skills
    }

    renderSelect() {
        this.getSkills();

        const MakeItem = function (X) {
            return <option key={X}>{X}</option>;
        };
        return <select
            className="list"
            onChange={this.props.handleOnChange}
        >
            {this.getSkills().map(MakeItem)}
        </select>;
    };

    render() {
        return (
            <div className="filter">
                <label>Filter by Skills
                    {this.renderSelect()}
                </label>
            </div>
        );
    }
}

export default SelectionBox;