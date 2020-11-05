import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllApiCategories } from "../../store/categories";
// import { Link } from "react-router-dom";

function Categories(props) {
  useEffect(() => {
    //   load all posts at loading the page
    props.getAllApiCategories();

  }, []);
//   console.log('12 prop',props);

  console.log('Categories component',props.categories.Categories);
  return (
    <>
    {props.categories.Categories.map((category,idx)=>{
        return(
            <div key={idx}>
                <h3>{category}</h3>

            </div>
        )
    })}
    </>
  );
}
const mapStateToProps = (state) => ({
    categories: state.categories,
});
const mapDispatchToProps = (dispatch) => ({
    getAllApiCategories: () => dispatch(getAllApiCategories()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
