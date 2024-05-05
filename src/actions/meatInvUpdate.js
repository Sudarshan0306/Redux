
const MeatInvUpdate = (operation, index) => {
    // console.log('Updating Meat Inventory');
    return {

        type: "updateMeat",
        payload: {
            operation,
            index
        }
    }
}


export default MeatInvUpdate