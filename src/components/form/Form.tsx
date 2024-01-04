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

const Form = () => {
  const stateOptions = dataState.map((item) => ({
    label: item.name,
    value: item.abbreviation,
  }));

  const departmenOption = dataDepartment.map((item) => ({
    label: item.name,
  }));

  const schema = yup.object({
    FirstName: yup
      .string()
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid FirstName")
      .required("FirstName is required"),
    LastName: yup
      .string()
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid LastName")
      .required("LastName is required"),
    Street: yup
      .string()
      .matches(/^[a-zA-Z0-9À-ÖØ-öø-ÿ\s'-]+$/, "Invalid Street")
      .required("Street is required"),
    City: yup
      .string()
      .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid City")
      .required("City is required"),
    ZipCode: yup
      .string()
      .matches(/^[0-9]+$/, "Invalid ZipCode. Please enter only numbers.")
      .required("ZipCode is required"),
    State: yup.string().required("State is required"),
    Department: yup.string().required("Department is required"),
  });

  const form = useForm<FormType>({
    defaultValues: {
      FirstName: "",
      LastName: "",
      Street: "",
      City: "",
      ZipCode: "",
      State: "",
      Department: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: FormType) => {
    console.log("Form submitted", data);
    if (isSubmitSuccessful) {
      alert("vous avez remplie tout les champ");
      reset();
    }
  };

  return (
    <div className="form">
      <form action="#" id="new-employee" onSubmit={handleSubmit(onSubmit)}>
        <img src={addUser} alt="icône addUser" />

        <Input
          name="FirstName"
          register={{ ...register("FirstName") }}
          error={errors.FirstName?.message}
          type="text"
        />
        <Input
          name="LastName"
          register={{ ...register("LastName") }}
          error={errors.LastName?.message}
          type="text"
        />
        <Datepicker label="Date of Birth" />
        <fieldset>
          <legend>Address</legend>
          <Input
            name="Street"
            register={{ ...register("Street") }}
            error={errors.Street?.message}
            type="text"
          />
          <Input
            name="City"
            register={{ ...register("City") }}
            error={errors.City?.message}
            type="text"
          />
          <Input
            name="ZipCode"
            register={{ ...register("ZipCode") }}
            error={errors.ZipCode?.message}
            type="number"
          />
          <DropDown
            label="State"
            options={stateOptions}
            register={{ ...register("State") }}
            error={errors.State?.message}
          />
        </fieldset>
        <Datepicker label="Start Date" />
        <DropDown
          label="Department"
          options={departmenOption}
          register={{ ...register("Department") }}
          error={errors.Department?.message}
        />

        <button type="submit" id="btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
