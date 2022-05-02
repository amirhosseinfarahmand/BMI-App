const Input = ({ formik, name, label, type }) => {
  return (
    <div className="" style={{ marginTop: "10px" }}>
      <div>
        <label htmlFor={name} style={{ marginTop: "1px" }}>
          {label}
        </label>
        <br />
        <input
          className=" bg-transparent p-1 outline-none"
          style={{
            width: "300px",
            backgroundColor: "transparent",
            borderBottom: "1px solid #435160",
            height: "20px",
          }}
          name={name}
          id={name}
          type={type}
          {...formik.getFieldProps(name)}
        />
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div style={{ color: "#EF4444" }}>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
