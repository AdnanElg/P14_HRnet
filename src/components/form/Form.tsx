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
import { useState } from "react";
import moment from "moment";
import Modale from "../modale/Modale";
import { nanoid } from "nanoid";

const Form = () => {
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);

  const [resetKeys, setResetKeys] = useState({
    dateofbirth: "",
    startdate: "",
    state: "",
    department: "",
  });

  const stateOptions = dataState.map((item) => ({
    label: item.name,
    value: item.abbreviation,
  }));

  const departmenOption = dataDepartment.map((item) => ({
    label: item.name,
    value: item.name,
  }));

  const schema = yup.object().shape({
    firstname: yup
      .string()
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid FirstName")
      .required("FirstName is required"),
    lastname: yup
      .string()
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid LastName")
      .required("LastName is required"),
    dateofbirth: yup
      .string()
      .required("Date of Birth is required")
      .test("Date of Birth", "You must be 18 years or older", function (value) {
        return moment().diff(moment(value, "MM/DD/YYYY"), "years") >= 18;
      }),
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
    state: yup.string().required("State is required"),
    startdate: yup.string().required("Start Date is required"),
    department: yup.string().required("Department is required"),
  });

  const form = useForm<FormType>({
    defaultValues: {
      firstname: "",
      lastname: "",
      dateofbirth: "",
      street: "",
      city: "",
      zipcode: "",
      state: "",
      startdate: "",
      department: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState, control, reset } = form;
  const { errors, isSubmitted } = formState;

  const onSubmit = (data: FormType) => {
    if (isSubmitted) {
      const newUser = {
        id: nanoid(),
        firstname: data.firstname,
        lastname: data.lastname,
        dateofbirth: data.dateofbirth,
        street: data.street,
        city: data.city,
        zipcode: data.zipcode,
        state: data.state,
        startdate: data.startdate,
        department: data.department,
      };
      dispatch(setCreateEmployee(newUser));
      setModalVisible(true);
      reset();
      setResetKeys({
        dateofbirth: new Date().toISOString(),
        startdate: new Date().toISOString(),
        state: Math.random().toString(),
        department: Math.random().toString(),
      });
    }
  };

  const handleClose = () => {
    setModalVisible(false);
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
        <Datepicker
          label="Date of Birth"
          name="dateofbirth"
          error={errors.dateofbirth?.message}
          control={control}
          resetKey={resetKeys.dateofbirth}
        />
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
          <DropDown
            error={errors.state?.message}
            label="State"
            name="state"
            options={stateOptions}
            control={control}
            resetKey={resetKeys.state}
          />
        </fieldset>
        <Datepicker
          label="Start Date"
          name="startdate"
          error={errors.startdate?.message}
          control={control}
          resetKey={resetKeys.startdate}
        />
        <DropDown
          error={errors.department?.message}
          label="Department"
          name="department"
          options={departmenOption}
          control={control}
          resetKey={resetKeys.department}
        />
        <button type="submit" id="btn">
          Save
        </button>
        <Modale visible={isModalVisible} onClose={handleClose} />
      </form>
    </div>
  );
};

export default Form;
