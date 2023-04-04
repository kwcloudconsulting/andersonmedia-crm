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
export declare type WhoCreateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    website?: string;
};
export declare type WhoCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WhoCreateFormOverridesProps = {
    WhoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WhoCreateFormProps = React.PropsWithChildren<{
    overrides?: WhoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WhoCreateFormInputValues) => WhoCreateFormInputValues;
    onSuccess?: (fields: WhoCreateFormInputValues) => void;
    onError?: (fields: WhoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WhoCreateFormInputValues) => WhoCreateFormInputValues;
    onValidate?: WhoCreateFormValidationValues;
} & React.CSSProperties>;
export default function WhoCreateForm(props: WhoCreateFormProps): React.ReactElement;
