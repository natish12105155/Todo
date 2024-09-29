const Item2 = ({ name, dat }) => {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            {name}
          </div>
          <div className="col-4">
            {dat}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete Me
            </button>
          </div>
        </div>
      </div>
    );
};

export default Item2;