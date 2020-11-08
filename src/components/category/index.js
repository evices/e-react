import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllApiCategories } from "../../store/categories";
// import { Link } from "react-router-dom";
import {getPostsByCategory} from '../../store/posts'

function Categories(props) {
  useEffect(() => {
    //   load all posts at loading the page
    props.getAllApiCategories();

  }, []);
  //   console.log('12 prop',props);

  console.log('Categories component', props.categories.Categories);
  return (
    <>
      <section className="sl-main-section">
        <div className="container">
          <div className="sl-category sl-row">

            {props.categories.Categories.map((category, idx) => {
              return (
                <div className="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
                  <div className="sl-category__service">
                    <img
                      src={'images/index/category/img-0' + idx++ + '.jpg'}
                      alt="image Description"
                    />
                    <div className="sl-category__description">
                      <h5>{category}</h5>
                      <span>4,982 خدمة</span>
                    </div>
                    <a  href={"/posts/category/"+category} className="sl-category__icon" >
                      <i className="ti-arrow-right" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  categories: state.categories,
});
const mapDispatchToProps = (dispatch) => ({
  getAllApiCategories: () => dispatch(getAllApiCategories()),
 getPostsByCategory: (category) => dispatch(getPostsByCategory(category)),

});
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
