import React, { useState } from "react";

const AddYojna = () => {
  const [yojna, setYojna] = useState({
    yojnaid: "",
    yojnaname: "",
    yojnainfo: "",
    benifits: "",
    docsreq: "",
    applicationreq: "",
    annualincome: 0,
    age: 0,
    marraigeverification: false,
    employedverification: false,
    locality: "",
    caste: "",
    centreforapplication: "",
    address: "",
    district: "",
    pincode: "",
    heademail: "",
    headpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "marraigeverification") {
      if (value === "Married") setYojna({ ...yojna, [name]: true });
      else setYojna({ ...yojna, [name]: false });
    } else if (name === "employedverification") {
      if (value === "Employed") setYojna({ ...yojna, [name]: true });
      else setYojna({ ...yojna, [name]: false });
    } else {
      setYojna({ ...yojna, [name]: value });
    }
  };
  const sendToDatabase = async (e) => {
    e.preventDefault();
    const {
      yojnaid,
      yojnaname,
      yojnainfo,
      benifits,
      docsreq,
      applicationreq,
      annualincome,
      age,
      marraigeverification,
      employedverification,
      locality,
      caste,
      centreforapplication,
      address,
      district,
      pincode,
      heademail,
      headpassword
    } = yojna;

    const res = await fetch("http://localhost:5000/addyojna",{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            yojnaid,
            yojnaname,
            yojnainfo,
            benifits,
            docsreq,
            applicationreq,
            annualincome,
            age,
            marraigeverification,
            employedverification,
            locality,
            caste,
            centreforapplication,
            address,
            district,
            pincode,
            heademail,
            headpassword
        })
      });
      const data = await res.json();
      console.log(data);

      if(data.status === 500 || !data){
        window.alert("invalid registration");
      }else{
        window.alert("registration successfull");
      }



  };
  return (
    <div className="container">
      <h1 className="mt-5">Add Yojna :</h1>
      <form
        className=" px-3 rounded"
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          border: "2px dotted black",
        }}
      >
        <div className="form-row">
          <div className="form-group my-5">
            <label htmlFor="inputEmail4">Yojana Id</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              name="yojnaid"
              placeholder="Enter Yojana id"
              onChange={handleInputs}
            />
          </div>
          <div className="form-group my-5">
            <label htmlFor="inputPassword4">Yojana Name</label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name="yojnaname"
              placeholder="Enter yojana name"
              onChange={handleInputs}
            />
          </div>
        </div>
        <div className="form-group my-5">
          <label htmlFor="inputAddress">Yojana Information</label>
          <textarea
            type="textarea"
            className="form-control"
            id="inputAddress"
            name="yojnainfo"
            placeholder="Enter the yojana information"
            onChange={handleInputs}
          />
        </div>
        <div className="form-group my-5">
          <label htmlFor="inputAddress2">Benifits</label>
          <textarea
            type="text"
            className="form-control"
            id="inputAddress2"
            name="benifits"
            placeholder="Enter the Yojana Benifits"
            onChange={handleInputs}
          />
        </div>
        <div className="form-group my-5">
          <label htmlFor="inputAddress2">Documents Require</label>
          <textarea
            type="text"
            className="form-control"
            id="inputAddress2"
            name="docsreq"
            placeholder="Enter the Documents Require for the yojana"
            onChange={handleInputs}
          />
        </div>
        <div className="form-group my-5">
          <label htmlFor="inputAddress2">Application Required</label>
          <textarea
            type="text"
            className="form-control"
            id="inputAddress2"
            name="applicationreq"
            placeholder="Enter the Application Require for the yojana :"
            onChange={handleInputs}
          />
          <hr />
          <div className="form-group">
            <label htmlFor="inputPassword4" className="my-4">
              Eligibility Criteria :
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              name="annualincome"
              placeholder="Annual Income"
              onChange={handleInputs}
            />
            <input
              type="text"
              className="form-control my-2"
              id="inputPassword4"
              placeholder="Age"
              name="age"
              onChange={handleInputs}
            />
          </div>

          <fieldset className="inputMaritalStatus">
            <br />
            <legend>Marital Status:</legend>
            <input
              type="radio"
              id="inputMarital1"
              name="marraigeverification"
              value="Married"
              className="mx-1"
              onChange={handleInputs}
            />

            <label htmlFor="contactChoice1" className="mx-1">
              Married
            </label>

            <input
              type="radio"
              id="inputMarital2"
              name="marraigeverification"
              value="UnMarried"
              className="mx-1"
              onChange={handleInputs}
            />
            <label htmlFor="contactChoice2" className="mx-1">
              Unmarried
            </label>
          </fieldset>

          <fieldset className="inputEmployment">
            <legend>Employment:</legend>
            <input
              type="radio"
              id="inputEmployee1"
              name="employedverification"
              value="Employed"
              className="mx-1"
              onChange={handleInputs}
            />
            <label htmlFor="contactChoice1" className="mx-1">
              Employed
            </label>

            <input
              type="radio"
              id="inputEmployed2"
              name="employedverification"
              value="UnEmployed"
              className="mx-1"
              onChange={handleInputs}
            />
            <label htmlFor="contactChoice2" className="mx-1">
              UnEmployed
            </label>
          </fieldset>
          <hr />
        </div>
        <div className="form-group">
          <label
            htmlFor="inputLocality"
            className="my-2"
            style={{ fontSize: "25px" }}
          >
            Locality :
          </label>
          <textarea
            className="form-control"
            id="inputLocality"
            rows="3"
            name="locality"
            placeholder="Enter Locality"
            onChange={handleInputs}
          ></textarea>
          <hr />
        </div>

        <fieldset className="inputEmployment">
          <legend>Caste :</legend>
          <input
            type="radio"
            id="inputCaste1"
            name="caste"
            value="open"
            onChange={handleInputs}
          />
          <label htmlFor="contactChoice1" className="mx-1">
            Open
          </label>
          <input
            type="radio"
            id="inputCaste2"
            name="caste"
            value="obc"
            className="mx-1"
            onChange={handleInputs}
          />
          <label htmlFor="contactChoice1" className="mx-1">
            OBC
          </label>
          {/* do changes to have more tha one item . */}
          <input
            type="radio"
            id="inputCaste3"
            name="caste"
            value="sc"
            className="mx-1"
            onChange={handleInputs}
          />
          <label htmlFor="contactChoice2" className="mx-1">
            SC
          </label>

          <input
            type="radio"
            id="inputCaste4"
            name="caste"
            value="st"
            className="mx-1"
            onChange={handleInputs}
          />
          <label htmlFor="contactChoice2">ST</label>
          <hr />
        </fieldset>
        {/* <div className="form-group my-5">
          <label htmlFor="myfile" className="me-4">
            Yojna related images:{" "}
          </label>
          <input type="file" id="myfile" name="myfile" onChange={handleInputs} />
          <hr />
        </div> */}

        <div className="form-group">
          <label htmlFor="inputCentres" style={{ fontSize: "25px" }}>
            Centres For Application:
          </label>
          <input
            type="textarea"
            className="form-control my-4"
            id="inputCentres"
            name="centreforapplication"
            placeholder="Yojna Centres"
            onChange={handleInputs}
          />
          <hr />
        </div>
        <div className="">
          <legend> Address: </legend>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1" className="mb-2">
              Department Address
            </label>
            <textarea
              name="address"
              className="form-control"
              onChange={handleInputs}
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1" className="mb-2">
              District
            </label>
            <input
              type="text"
              name="district"
              onChange={handleInputs}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1" className="mb-2">
              Pincode
            </label>
            <input
              type="number"
              name="pincode"
              onChange={handleInputs}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></input>
          </div>
          <hr />
          <legend>Authentification for Head of Department</legend>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="mb-2">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="heademail"
              onChange={handleInputs}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="mb-2">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="headpassword"
              onChange={handleInputs}
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={sendToDatabase}
          className="btn btn-primary w-100 my-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddYojna;
