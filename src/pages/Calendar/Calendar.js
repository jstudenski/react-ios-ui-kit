import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';
import List from '../../components/List';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [
        { title: "Fruit", items: ["A", "B", "C", "D", "E"]},
        { title: "Vegtables", items: ["A1", "B2", "C3", "D4", "E5"]},
        { items: ["%A", "X",]},
        { items: ["@", "#", "^", "@E", "!"]},
      ],
      items: [],
    };
    this.onChange = this.onChange.bind(this);
  }


  componentWillMount() {
    this.setState({items: this.state.initialItems})
  }

  onChange(event) {
    let list = this.state.initialItems;
    let tempArr = [];
    Object.keys(list).forEach(function(key){
      list[key].items.forEach(function(item){
        tempArr.push(item);
      });
    })
    let updatedList = tempArr;

    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
      event.target.value.toLowerCase()) !== -1;
    });
    console.log({items: updatedList})
    console.log(this.state.initialItems);
    this.setState({
      items: [{ items: updatedList}]
    });
  }

  render() {
    return (
      <div>
        <Header
          title="Calendar"
          secondary
          search
          onChange={this.onChange}
        />
        <List items={this.state.items} />
      </div>
    );
  }
}

export default Calendar;
