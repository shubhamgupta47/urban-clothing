import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import "./shop.scss";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

class ShopPage extends Component {
  /*****____Not needed because of 'thunk____*****/
  // state = {
  //   loading: true,
  // };
  //unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
    /*****____Not needed because of 'thunk____*****/
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    /**
     * This is REST API call
     */
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/urbn-clothing-db/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log("kk", collections));
    /**
     * This is Promise based. The method .get() makes
     * API call to fetch data associated with 'collectionRef'.
     */
    // collectionRef.get().then((snapshot) => {
    //   const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });
    /**
     * This is observable pattern, which supports live reloading
     */
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //     updateCollections(collectionMap);
    //     this.setState({ loading: false });
    //   }
    // );
  }

  render() {
    const { match } = this.props;

    /*****____Not needed because of 'thunk____*****/
    // const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
