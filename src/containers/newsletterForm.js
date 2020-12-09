import { useFormik } from "formik";
import * as Yup from "yup";

const NewsletterForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(3, "Name must be of mininum 3 characters")
        .max(200, "Name cannot be greater than 200 characters")
        .required("Please enter Full Name"),
      email: Yup.string()
        .email("Please enter correct email address")
        .required("Please enter your email address"),
    }),
    onSubmit: (values) => {},
  });

  return (
    <div className="newsletter-form-outter-container">
      <div className="newsletter-form-container">
        <h3>Subscribe to our Newsletter</h3>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="custom-input"
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.fullname && formik.touched.fullname ? (
            <div className="error-message">{formik.errors.fullname}</div>
          ) : null}
          <input
            className="custom-input"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
          <br />
          <button type="submit" className="btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
