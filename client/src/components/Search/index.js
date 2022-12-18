import React from "react";
import { useState } from "react";

import image from "../../images/BMI.webp"


const Search = () => {
  const [product, setProduct] = useState({
    productId: 0,
    productName: "",
    productCategory: "",
    productPrice: 0,
  });

  const save = () => {
    // This would be call on onClick of Save button
    console.log(`Values from product is: `);
    console.log(
      `ProductId: ${product.productId} ProductName: ${product.productName} Product Category: ${product.productCategory} ProductPrice: ${product.productPrice}`
    );
  };
  return (
    <div className="space">
      <div className="main-Container">
        <div className="about-Container">
          <div className="headingGitFit">
            <h2>How GitFit Works</h2>
          </div>
          <div className="howContainer">
            <div className="container1">
              <div className="text2">Pick your muscle </div>
            </div>
            <div className="arrow">➪</div>
            <div className="container1">
              <div className="text2">Chose your favorite excercises</div>
            </div>
            <div className="arrow">➪</div>
            <div className="container1">
              <div className="text2">
                Create workouts with excercises of your choosing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-Container">
        <div className="searchContainer">
          <div className="search-Menu">
            <div className="form-group">
              <label htmlFor="">Pick Muscle Group</label>
              <select
                className="sign-up-btn"
                value={product.productCategory}
                onChange={(evt) =>
                  setProduct({ ...product, productCategory: evt.target.value })
                }
              >
                <option >Abdominals</option>
                <option >Abductors</option>
                <option >Adductors</option>
                <option >Biceps</option>
                <option >Calves</option>
                <option >Chest</option>
                <option >Forearms</option>
                <option >Glutes</option>
                <option >Hamstrings</option>
                <option >Lats</option>
                <option >Lowerback</option>
                <option >Middleback</option>
                <option >Neck</option>
                <option >Quadriceps</option>
                <option >Traps</option>
                <option >Triceps</option>
              </select>
              <div className="form-group">
              <label htmlFor="">Product Category</label>
              <select
                className="sign-up-btn"
                value={product.productCategory}
                onChange={(evt) =>
                  setProduct({ ...product, productCategory: evt.target.value })
                }
              >
                <option >Beginner</option>
                <option >Intermetiate</option>
                <option >Extreme</option>
                <option >Mobile</option>
              </select>
            </div>
          </div>
          </div>
          <div className="searchInfo">
            <div className="information">
              This is going to be where the information displays
            </div>
            <div className="video">Youtube video</div>
          </div>
        </div>
      </div>


      <section className="main-Container">
        <div className="bmiExample">
          <div>
            {/* Imported image */}
            <img className="image-Container" src={image}></img>
          </div>
          <div className="bmiTextBox">
            <div className="bmiText">
            <h1>Body Mass Index (BMI)</h1>
            <p className="bmiTextP">A person's body mass index (BMI) is an estimate of their body fat based on their height and weight.</p>
            <p className="bmiTextP"> Doctors use BMI to assess an adult's health status and potential health risks. People with higher BMIs are more likely to develop chronic diseases like heart disease and diabetes.</p>
            </div>
          </div>
        </div>
      </section>

</div>
  );
};

export default Search;
