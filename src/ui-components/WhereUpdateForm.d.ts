/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Where } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WhereUpdateFormInputValues = {
    business_name?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    website?: string;
};
export declare type WhereUpdateFormValidationValues = {
    business_name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WhereUpdateFormOverridesProps = {
    WhereUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    business_name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WhereUpdateFormProps = React.PropsWithChildren<{
    overrides?: WhereUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    where?: Where;
    onSubmit?: (fields: WhereUpdateFormInputValues) => WhereUpdateFormInputValues;
    onSuccess?: (fields: WhereUpdateFormInputValues) => void;
    onError?: (fields: WhereUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WhereUpdateFormInputValues) => WhereUpdateFormInputValues;
    onValidate?: WhereUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WhereUpdateForm(props: WhereUpdateFormProps): React.ReactElement;
