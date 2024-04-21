// Import modules :
import "./Form.scss";
import addUser from "../../assets/svg/addUser.svg";
import Datepicker from "../datepicker/Datepicker";
import DropDown from "../dropdown/DropDown";
import Input from "../input/Input";
import { dataState, dataDepartment } from "../../data/MockUpHome.json";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormType } from "./Form.types";
import { useDispatch } from "react-redux";
import { setCreateEmployee } from "../../services/features/FormSlice";
import { useState } from "react";
import moment from "moment";
import Modale from "modale-adn33";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

/**
 * Components Form :
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element}
 */
const Form = (): JSX.Element => {
  // Initialisation de useDispatch pour envoyer des actions au store Redux
  const dispatch = useDispatch();

  // État pour contrôler la visibilité de la modale
  const [isModalVisible, setModalVisible] = useState(false);

  // État pour gérer les clés de réinitialisation des champs
  const [resetKeys, setResetKeys] = useState({
    dateofbirth: "",
    startdate: "",
    state: "",
    department: "",
  });

  // Options de l'état
  const stateOptions = dataState.map((item) => ({
    label: item.name,
    value: item.abbreviation,
  }));

  // Options du département
  const departmenOption = dataDepartment.map((item) => ({
    label: item.name,
    value: item.name,
  }));

  // Schéma de validation des données du formulaire
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
      .matches(/^\d{5}$/, "Invalid ZipCode. Please enter only numbers.")
      .required("ZipCode is required"),
    state: yup.string().required("State is required"),
    startdate: yup.string(),
    department: yup.string().required("Department is required"),
  });

  // Initialisation du formulaire avec React Hook Form
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
    // Utilisation du résolveur yup pour la validation du formulaire
    resolver: yupResolver(schema) as Resolver<FormType>,
  });

  // Extraction des méthodes et des états de React Hook Form
  const { register, handleSubmit, formState, control, reset } = form;
  const { errors, isSubmitted } = formState;

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit = (data: FormType) => {
    if (isSubmitted) {
      // Création d'un nouvel utilisateur avec les données du formulaire
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

  // Fonction appelée pour fermer la modale
  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <div className="form" data-testid="form">
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <img id="img" src={addUser} alt="icône addUser" />
        <Input
          label="First Name"
          name="firstname"
          register={{ ...register("firstname") }}
          error={errors.firstname?.message}
          type="text"
          dataTestId="inputFirstName"
        />
        <Input
          label="Last Name"
          name="lastname"
          register={{ ...register("lastname") }}
          error={errors.lastname?.message}
          type="text"
          dataTestId="inputLastName"
        />
        <Datepicker
          label="Date of Birth"
          name="dateofbirth"
          error={errors.dateofbirth?.message}
          control={control}
          resetKey={resetKeys.dateofbirth}
          dataTestId="datePickerDateOfBirth"
        />
        <fieldset>
          <legend>Address</legend>
          <Input
            label="Street"
            name="street"
            register={{ ...register("street") }}
            error={errors.street?.message}
            type="text"
            dataTestId="inputStreet"
          />
          <Input
            label="City"
            name="city"
            register={{ ...register("city") }}
            error={errors.city?.message}
            type="text"
            dataTestId="inputCity"
          />
          <Input
            label="ZipCode"
            name="zipcode"
            register={{ ...register("zipcode") }}
            error={errors.zipcode?.message}
            type="number"
            dataTestId="inputZipCode"
          />
          <DropDown
            error={errors.state?.message}
            label="State"
            name="state"
            options={stateOptions}
            control={control}
            resetKey={resetKeys.state}
            dataTestId="dropDownState"
          />
        </fieldset>
        <Datepicker
          label="Start Date"
          name="startdate"
          control={control}
          resetKey={resetKeys.startdate}
          dataTestId="datePickerStartDate"
        />
        <DropDown
          error={errors.department?.message}
          label="Department"
          name="department"
          options={departmenOption}
          control={control}
          resetKey={resetKeys.department}
          dataTestId="dropDownDepartment"
        />
        <button type="submit" id="btn">
          Save
        </button>
      </form>
      <Modale
        visible={isModalVisible}
        onClose={handleClose}
        data-testid="modale"
      >
        <div className="form__modale__content1">
          <p>New collaborator</p>
          <p>Successfully registered</p>
          <hr></hr>
        </div>
        <div className="form__modale__content2">
          <button onClick={handleClose}>Add new employée</button>
          <NavLink to="/employees">
            <button>Employées List</button>
          </NavLink>
        </div>
      </Modale>
    </div>
  );
};

// Export Form
export default Form;
