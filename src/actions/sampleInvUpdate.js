

const SampleInvUpdate = (operation, index) => {
    // console.log(operation, index);
  return {
    type: "Update Sample",
    payload: {
        operation,
        index
    }
  }
}

export default SampleInvUpdate