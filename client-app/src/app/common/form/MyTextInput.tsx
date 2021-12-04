import React from 'react';
import { useField } from 'formik';
import { Form, Label } from 'semantic-ui-react';

interface Props {
    name: string;
    placeholder: string;
    type?: string;
    label?: string;
}

const MyTextIput = (props: Props) => {
    const [field, meta] = useField(props.name);

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <input {...props} {...field} />
            {
                meta.touched && meta.error ? (
                    <Label basic color="red">{meta.error}</Label>
                ) : null
            }
        </Form.Field>
    );
};

export default MyTextIput;