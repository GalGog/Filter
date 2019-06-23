import React from 'react';
import SelectionBox from './SelectionBox';
import TableDisplay from './TableDisplay';
import Filter from './Filter';
class TableDisplayContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: 'all' // use this as default
        }
    }

    handleOnChange(e) {
        console.log(e.target.value);
        this.setState({
            selectValue: e.target.value
        });

    }

    render() {

        return (
            <div>
                <TableDisplay />
                <SelectionBox
                    handleOnChange={this.handleOnChange.bind(this)}
                />
                <Filter />
            </div>
        )
    }
}
export default TableDisplayContainer;