import { useInputValue } from "../../hooks/useInputValue";
import { Button, Input, Form } from "./styles";
import { FormLogo } from "./FormLogo";
import { ErrorForm } from "../ErrorForm/index";

const UserForm = ({
  onClick,
  loading,
  error,
  typeForm,
  setTypeForm,
  title,
  toggleMessage,
  setLogged,
  keyForm,
}) => {
  const { valuesForm, handlerInput } = useInputValue();

  const handlerClick = async () => {
    try {
      const req = await onClick({ variables: { input: valuesForm } });
      const token = await req.data[keyForm];
      sessionStorage.setItem("token", token);
      setLogged(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form>
      <FormLogo />
      {error && <ErrorForm message={error.message} />}
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <>
          <h2>{title}</h2>
          <Input
            type="email"
            name="email"
            placeholder="email"
            onChange={handlerInput}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={handlerInput}
          />
          <p onClick={() => setTypeForm(!typeForm)}>{toggleMessage}</p>
          <Button type="button" onClick={handlerClick}>
            {title}
          </Button>
        </>
      )}
    </Form>
  );
};

export { UserForm };
