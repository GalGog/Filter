//Import libraries
import React from 'react';

//Import components
import Select from '../components/Select';
import Table from '../components/Table';
import Filter from '../components/Filter';

// Import data
import {newCandidates} from '../data';

class TableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: false,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        this.setState(
            {
                filteredData: Filter(newCandidates, e.target.value),
            }
        )
    }
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

    render() {

        return (
            <div>
                <Table
                    label='Demo Table'
                    data = {newCandidates}
                />
                <Select
                    options={this.getSkills()}
                    className={'list'}
                    onChange={this.handleOnChange}
                />
                { this.state.filteredData ?
                    <Table
                        label='Rendered Table'
                        data = {this.state.filteredData}
                    /> : null
                }
            </div>
        )
    }
}
export default TableContainer;