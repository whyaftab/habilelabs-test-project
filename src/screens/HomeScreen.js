import React, { Component } from "react";
import { View, SectionList, Text, Switch, ScrollView } from "react-native";
import { RefactorDataObj } from "../constant";
import {
  SearchBox,
  SwitchWithText,
  Item,
  SectionHeading,
  ItemSeparator,
} from "../components";

const Url =
  "http://my-json-server.typicode.com/habilelabs/fake-products/products";

export default class HomeScreen extends Component {
  state = {
    rowData: [],
    data: [],
    isOnlyInStock: false,
    searchText: "",
    loading: false,
  };

  toggleOnlyInStock = () => {
    this.setState(({ isOnlyInStock }) => ({
      isOnlyInStock: !isOnlyInStock,
    }));
  };

  componentDidMount = () => this.fetchData();

  fetchData = () => {
    this.setState({
      loading: true,
    });

    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        const newData = RefactorDataObj(data);

        this.setState({
          searchText: "",
          data: newData,
          rowData: data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  updateSeachText = (text) => {
    const filteredObj = this.state.rowData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    const newData = RefactorDataObj(filteredObj);

    this.setState({
      data: newData,
      searchText: text,
    });
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
