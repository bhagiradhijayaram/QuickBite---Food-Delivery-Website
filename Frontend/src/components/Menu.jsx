const Menu = ({ menuDetails, filterByCategory }) => {
  const { id, name } = menuDetails;
  // const clickActiveTab = (id) => {
  //   filterByCategory(id);
  // };
  return (
    <>
      <button
        type="button"
        className="bg-[#f1f1f1] w-[100px] p-2 rounded"
        onClick={() => filterByCategory(name)}
      >
        {name}
      </button>
    </>
  );
};

export default Menu;
