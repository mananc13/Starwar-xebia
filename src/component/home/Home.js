import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Search from "../search/Search";
import Detail from "../detail/Detail";
import Error from "./../error/Error";
import homeActions from "../../action/home/homeAction";

import "./home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerSize: 210,
      countFunction: 0,
      seconds: 60,
      inputSearchValue: false,
    };
  }

  getPopulationWiseContainerSize = (population) => {
    const numberReg = /^[0-9]+$/;
    if (numberReg.test(population)) {
      this.setState({ containerSize: 210 + 20 * population.length });
    }
  };

  render() {
    const {
      searchList,
      getSearchList,
      resetCount,
      loader,
      count,
      setSelectedItem,
      selectedItem,
      error,
    } = this.props;
    const { containerSize } = this.state;

    const { inputSearchValue } = this.state;

    return (
      <div className="container box">
        <div className="row search">
          {error && <Error error={error} />}
          <div className="col-sm-4">
            <h3>Search Planet</h3>
            <Search
              onChange={(a) => {
                if (!a) {
                  setSelectedItem({});
                }
                if (this.state.countFunction < 1) {
                  this.setState({ countFunction: 1 });
                  setInterval(() => {
                    this.setState(({ seconds }) => ({
                      seconds: seconds - 1,
                    }));

                    if (this.state.seconds === 0) {
                      this.setState({ countFunction: 0, seconds: 60 });
                      resetCount();
                    }
                  }, 1000);
                }
                this.setState({ inputSearchValue: a });
                getSearchList(a, count, this.state.countFunction);
              }}
              list={searchList}
              loader={loader}
              onSelect={(item) => {
                setSelectedItem(item);
                this.setState({ inputSearchValue: selectedItem });
              }}
              getPopulationWiseContainerSize={
                this.getPopulationWiseContainerSize
              }
            />
          </div>
          {inputSearchValue &&
          searchList.length &&
          Object.keys(selectedItem).length !== 0 ? (
            <div className="col-sm-8">
              <div style={{ height: containerSize }} className="detail">
                <Detail {...selectedItem} />
              </div>
            </div>
          ) : !loader && inputSearchValue && !searchList.length ? (
            <div className="col-sm-8">
              <div style={{ height: "100px", padding: "20px" }}>
                <h2>No Result Found</h2>
              </div>
            </div>
          ) : (
            <div className="col-sm-8">
              <div style={{ height: "100px", padding: "20px" }}>
                <h2>Planet Details To Be Displayed</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  error: "",
  searchList: [],
};

Home.propTypes = {
  searchList: PropTypes.array.isRequired,
  getSearchList: PropTypes.func,
  loader: PropTypes.bool.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.object.isRequired,
  searchCounter: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = ({ home, auth }) => ({
  searchList: home.searchList,
  loader: home.loader,
  error: home.error,
  selectedItem: home.selectedItem,
  searchCounter: home.searchCounter,
  count: home.count,
  username: auth.username,
});

export default connect(mapStateToProps, homeActions)(Home);
