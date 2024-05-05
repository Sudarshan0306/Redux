
const SecondInvUpdate = (qChange, index) => {
    // console.log('Updating Second Inventory');
  return {
    type: "Updating Second Inventory",
    payload: {
      qChange,
      index
    }
  }
}

export default SecondInvUpdate;