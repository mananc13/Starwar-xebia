import React from "react";
import PropTypes from "prop-types";

import "./search.scss";

class Search extends React.Component {
  state = { value: "", showList: false };

  /**
   * @description to get dropdown list
   */

  getList = (e) => {
    const { onChange } = this.props;
    onChange(e.target.value);
    this.changeInput(e.target.value);
  };

  /**
   * @description it changes the value of autocomplete
   */
  changeInput = (value) => {
    const { name, population } = value;
    const { getPopulationWiseContainerSize } = this.props;
    this.setState({ value: name });
    getPopulationWiseContainerSize(population);
  };

  /**
   * @description show and hide list
   */
  toggleList = (showList) => {
    this.setState({ showList });
  };

  /**
   * @description return font size according to population
   */
  getPopulationWiseFont = (population) => {
    const numberReg = /^[0-9]+$/;
    if (numberReg.test(population)) {
      return 12 + 3 * population.length;
    }
    return 12;
  };

  render() {
    const { list, loader, onSelect } = this.props;
    const { showList } = this.state;
    return (
      <div className="col-sm-12 autocomplete">
        {loader && <span className="loader" />}
        <input
          type="search"
          className="form-control mdb-autocomplete"
          onChange={this.getList}
          onFocus={() => this.toggleList(true)}
          placeholder="search"
        />
        {!loader && showList && list.length > 0 && (
          <div className="searchBox">
            {list.map((row) => (
              <div
                onClick={() => {
                  this.changeInput(row);
                  this.toggleList(false);
                  onSelect(row);
                }}
                style={{
                  fontSize: this.getPopulationWiseFont(row.population),
                }}
                key={row.name}
              >
                {row.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Search.defaultProps = {
  list: [],
  loader: false,
};

Search.propTypes = {
  list: PropTypes.array,
  loader: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

export default Search;
