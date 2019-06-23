import React from 'react';

class Table extends React.Component {
    render() {
        const { label, data } = this.props;
        return (
            <div className="wrapper">
                <label>{label}</label>
                    <table>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Skills</td>
                        </tr>
                        {Object.keys(data).map(function(key) {
                            return (
                                <tr>
                                    <td>{data[key].name}</td>
                                    <td>{data[key].skills.join(', ')}</td>
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