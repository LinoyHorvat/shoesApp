import React, { Component } from "react";
import "./App.css";
import ShoeCard from "./components/ShoeCard";
import Input from "./components/Input";
import shoesApi from "./api";

class App extends Component {
  state = { data: [], name: "", imgUrl: "" ,update:""};

  async componentDidMount() {
    const { data } = await shoesApi.get("shoesApp");
    this.setState({ data }, () => { 
      console.log(this.state.data)
    this.displayDataFromState()});
  }
  // handleCreate = async () => {
  //   try {
  //     let dataCopy = [...this.state.data];
  //     const newAvatar = {
  //       name: this.state.name,
  //       imgUrl: this.state.imgUrl,
  //     };
  //     await avatarApi.post("/avatars/", newAvatar);
  //     dataCopy.push(newAvatar);
  //     this.setState({ data: dataCopy });
  //   } catch (error) {}
  // };

  // handleDelete = async (id) => {
  //   try {
  //     const dataCopy = [...this.state.data];
  //     const filteredData = dataCopy.filter((obj) => obj.id !== id);
  //     await avatarApi.delete(`/avatars/${id}`);
  //     this.setState({ data: filteredData });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // handleUpdate = async (id, value) => {
  //   const dataCopy = [...this.state.data];
  //   let objIdx = dataCopy.findIndex((element) => {
  //     return element.id === id;
  //   });
  //   const updatedItem = {
  //     ...dataCopy[objIdx],
  //     name: value,
  //   };
  //   dataCopy[objIdx] = updatedItem;
  //   await avatarApi.put(`/avatars/${id}`, updatedItem);
  //   this.setState({ data: dataCopy });
  // };

  // handleInput = (objProp, e) => {
  //   this.setState({ [objProp]: e });
  // };

  displayDataFromState = () => {
    const { data } = this.state;
    return data.map((shoe) => {
      return (
        <div key={shoe.id}>
        {console.log(shoe)}
          <ShoeCard
            name={shoe.name}
            size={shoe.size}
            price={shoe.price}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
      <h1>Shoe App</h1>
      <Input
      onChange={(e) => {this.handleInput("name", e.target.value);}}
      label="name"/>
      <Input
      onChange={(e) => {this.handleInput("price", e.target.value);}}
      label="price"/>
      <Input
      onChange={(e) => {this.handleInput("size", e.target.value);}}
      label="size"/>
      <button onClick={this.handleCreate}>Create</button>
      {this.displayDataFromState()}
      </div>
    );
  }
}

export default App;



// displayDataFromState = () => {
//   const { data } = this.state;
//   return data.map((shoe) => {
//     return (
//       <div key={shoe.id}>
//         <ShoeCard
//           Delete={() => {
//             this.handleDelete(shoe.id);
//           }}
//           Update={() => {
//             this.handleUpdate(shoe.id, this.state.update);
//           }}
//           name={shoe.name}
//           size={shoe.size}
//           price={shoe.price}
//         />
//         <Input
//           onChange={(e) => {
//             this.handleInput("update", e.target.value);
//           }}
//           label="Update"
//         />
//       </div>
//     );
//   });
// };