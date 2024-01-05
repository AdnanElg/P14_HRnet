import "./Form.scss";
import addUser from "../../assets/svg/addUser.svg";
import Datepicker from "../datepicker/Datepicker";
import DropDown from "../dropdown/DropDown";
import Input from "../input/Input";
import { dataState, dataDepartment } from "../../data/MockUpHome.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormType } from "../../types/components/form/FormType";
import { useDispatch } from "react-redux";
import { setCreateEmployee } from "../../services/features/FormSlice";

const Form = () => {
  const dispatch = useDispatch();

  const stateOptions = dataState.map((item) => ({
    label: item.name,
    value: item.abbreviation,
  }));

  const departmenOption = dataDepartment.map((item) => ({
    label: item.name,
  }));

  const schema = yup.object({
    firstname: yup
      .string()
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid FirstName")
      .required("FirstName is required"),
    lastname: yup
      .string()
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid LastName")
      .required("LastName is required"),
    street: yup
      .string()
      .matches(/^[a-zA-Z0-9À-ÖØ-öø-ÿ\s'-]+$/, "Invalid Street")
      .required("Street is required"),
    city: yup
      .string()
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid City")
      .required("City is required"),
    zipcode: yup
      .string()
      .matches(/^[0-9]+$/, "Invalid ZipCode. Please enter only numbers.")
      .required("ZipCode is required"),
  });

  const form = useForm<FormType>({
    defaultValues: {
      firstname: "",
      lastname: "",
      street: "",
      city: "",
      zipcode: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitted } = formState;

  const onSubmit = (data: FormType) => {
    if (isSubmitted) {
      // appeler la modale
      dispatch(setCreateEmployee(data));
      reset();
    }
  };

  return (
    <div className="form">
      <form action="#" id="new-employee" onSubmit={handleSubmit(onSubmit)}>
        <img id="img" src={addUser} alt="icône addUser" />

        <Input
          label="First Name"
          name="firstname"
          register={{ ...register("firstname") }}
          error={errors.firstname?.message}
          type="text"
        />
        <Input
          label="Last Name"
          name="lastname"
          register={{ ...register("lastname") }}
          error={errors.lastname?.message}
          type="text"
        />
        <Datepicker label="Date of Birth" name="dateofbirth" />
        <fieldset>
          <legend>Address</legend>
          <Input
            label="Street"
            name="street"
            register={{ ...register("street") }}
            error={errors.street?.message}
            type="text"
          />
          <Input
            label="City"
            name="city"
            register={{ ...register("city") }}
            error={errors.city?.message}
            type="text"
          />
          <Input
            label="ZipCode"
            name="zipcode"
            register={{ ...register("zipcode") }}
            error={errors.zipcode?.message}
            type="number"
          />
          <DropDown label="State" name="state" options={stateOptions} />
        </fieldset>
        <Datepicker label="Start Date" name="startdate" />
        <DropDown
          label="Department"
          name="department"
          options={departmenOption}
        />

        <button type="submit" id="btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
