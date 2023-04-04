/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WhereCreateFormInputValues = {
    business_name?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    website?: string;
};
export declare type WhereCreateFormValidationValues = {
    business_name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WhereCreateFormOverridesProps = {
    WhereCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    business_name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WhereCreateFormProps = React.PropsWithChildren<{
    overrides?: WhereCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WhereCreateFormInputValues) => WhereCreateFormInputValues;
    onSuccess?: (fields: WhereCreateFormInputValues) => void;
    onError?: (fields: WhereCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WhereCreateFormInputValues) => WhereCreateFormInputValues;
    onValidate?: WhereCreateFormValidationValues;
} & React.CSSProperties>;
export default function WhereCreateForm(props: WhereCreateFormProps): React.ReactElement;
