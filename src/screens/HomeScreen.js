import React, { Component } from "react";
import { SectionList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import {
  SearchBox,
  SwitchWithText,
  Item,
  SectionHeading,
  ItemSeparator,
} from "../components";

class HomeScreen extends Component {
  state = {
    isOnlyInStock: false,
  };

  componentDidMount = () => {
    this.props
      .fetchProducts()
      .then((s) => console.log(s))
      .catch((e) => console.log(e));
  };

  toggleOnlyInStock = () => {
    this.setState(({ isOnlyInStock }) => ({
      isOnlyInStock: !isOnlyInStock,
    }));
  };

  render() {
    const { data, isOnlyInStock, searchText } = this.state;

    return (
      <ScrollView style={styles.container}>
        <SearchBox value={searchText} onChangeText={this.updateSeachText} />
        <SwitchWithText
          value={isOnlyInStock}
          onChange={this.toggleOnlyInStock}
          text="Only show products in stock"
        />

        <Item property="Name" value="Price" heading />
        <ItemSeparator />
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) =>
            isOnlyInStock ? (
              item.stocked && <Item property={item.name} value={item.price} />
            ) : (
              <Item
                property={item.name}
                value={item.price}
                redProperty={!item.stocked}
              />
            )
          }
          renderSectionHeader={({ section: { category } }) => (
            <SectionHeading text={category} />
          )}
          contentContainerStyle={{ flexGrow: 1 }}
          refreshing={this.state.loading}
          onRefresh={this.fetchData}
          ItemSeparatorComponent={() => <ItemSeparator />}
          SectionSeparatorComponent={() => <ItemSeparator />}
        />
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 10,
    padding: 20,
  },
  itemSeprator: {
    height: 4,
  },
};

const mapStateToProps = (state) => {
  const { searchText, data, loading } = state.product;
  return { searchText, data, loading };
};

export default connect(mapStateToProps, { fetchProducts })(HomeScreen);
