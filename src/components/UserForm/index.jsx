import { useInputValue } from "../../hooks/useInputValue";
import { Button, Input, Form } from "./styles";
import { FormLogo } from "./FormLogo";

const UserForm = ({ title }) => {
  const { valuesForm, handlerInput } = useInputValue();

  const handlerSubmit = () => {
    console.log(valuesForm);
  };

  return (
    <Form>
      <FormLogo />
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
      <Button type="button" onClick={handlerSubmit}>
        {title}
      </Button>
    </Form>
  );
};

export { UserForm };
