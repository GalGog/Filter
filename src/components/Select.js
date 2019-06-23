import React from 'react';

class Select extends React.Component {
    static renderSelect(options, className, onChange) {
        const MakeItem = function (X) {
            return <option key={X}>{X}</option>;
        };
        return <select
            defaultValue={'Select value'}
            className = {className}
            onChange = {onChange}
        >
            <option disabled >Select value</option>
            {options.map(MakeItem)}
        </select>;
    };

    render() {
        const { options, className, onChange } = this.props;
        return options.length ? <div className="filter">
            <label>Filter by Skills
                {Select.renderSelect(options, className, onChange)}
            </label>
        </div> : null
    }
}

export default Select;