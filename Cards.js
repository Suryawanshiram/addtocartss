import React from "react";

//create and export cards component
const Cards = (props) => {
  //function to return numbers of stars based on the input
  const printStars = (count) => {
    const starList = [];

    for (let i = 0; i < count; i++) {
      starList.push(<div className="bi-star-fill" key={i}></div>);
    }
    return starList;
  };

  //create card components
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {props.data.map((card, i) => (
            <div className="col mb-5" key={i}>
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  {props.data[i].sale}
                </div>
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="product"
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{props.data[i].itemType}</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      {printStars(props.data[i].starCount)}
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      {props.data[i].price.oldPrice}
                    </span>
                    {props.data[i].price.newPrice}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center flex-column">
                  <div className="text-center">
                    <button
                      className="btn btn-primary mt-auto"
                      onClick={props.manageItems}
                    >
                      {props.data[i].buttonName}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
