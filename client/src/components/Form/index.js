import React from "react";

// create a react component called Form and pass in props that are used in the Form

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    // create a form element
    <form>
      <div className="form-group">
        {/* setup a label from the book input fields */}
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        {/* add an onchange prop to the input that when text is added it triggers the handleInputChange function. Make the input field required */}
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      {/* create a submit button that when clicked it triggers the handleFormSubmit function */}
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

// export the form component
export default Form;
