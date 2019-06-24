import React from 'react';


class Table extends React.Component {
    render() {
        const { header, data } = this.props;
        return (
            <div className="wrapper">
                <header>{header}</header>
                    <table>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Skills</td>
                        </tr>
                        {Object.keys(data).map(function(key) {
                            return (
                                <tr key={key}>
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