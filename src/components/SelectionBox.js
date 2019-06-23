import React from 'react';
import {newCandidates} from '../data';

class SelectionBox extends React.Component {

    getSkills() {
        let uniqueSkills = [];
        // eslint-disable-next-line array-callback-return
        newCandidates.filter(function (candidate) {
            // eslint-disable-next-line array-callback-return
            candidate.skills.filter(function (skill) {
                if (!uniqueSkills.includes(skill)) {
                    uniqueSkills.push(skill);
                }
            });
        });
        return uniqueSkills
    }

    static renderSelect(options, className, onChange) {

        const MakeItem = function (X) {
            return <option key={X}>{X}</option>;
        };
        return <select
            className = {className}
            onChange = {onChange}
        >
            {options.map(MakeItem)}
        </select>;
    };

    render() {
        return (
            <div className="filter">
                <label>Filter by Skills
                    {SelectionBox.renderSelect(this.getSkills(), 'list', this.props.handleOnChange)}
                </label>
            </div>
        );
    }
}

export default SelectionBox;