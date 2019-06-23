import React from 'react';
import { newCandidates } from '../data';

class Table extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <label>{this.props.label}</label>
                    <table>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Skills</td>
                        </tr>
                        {Object.keys(newCandidates).map(function(key) {
                            return (
                                <tr>
                                    <td>{newCandidates[key].name}</td>
                                    <td>{newCandidates[key].skills.join(', ')}</td>
                                </tr>
                            );

                        })}
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default Table;