import React from 'react';
import { newCandidates } from '../data';

class TableDisplay extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <label>Demo Table Of Candidates</label>
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
                                    <td>{newCandidates[key].skills}</td>
                                </tr>
                            );

                        })}
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default TableDisplay;