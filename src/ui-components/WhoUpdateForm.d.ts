/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Who } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WhoUpdateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    website?: string;
};
export declare type WhoUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WhoUpdateFormOverridesProps = {
    WhoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WhoUpdateFormProps = React.PropsWithChildren<{
    overrides?: WhoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    who?: Who;
    onSubmit?: (fields: WhoUpdateFormInputValues) => WhoUpdateFormInputValues;
    onSuccess?: (fields: WhoUpdateFormInputValues) => void;
    onError?: (fields: WhoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WhoUpdateFormInputValues) => WhoUpdateFormInputValues;
    onValidate?: WhoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WhoUpdateForm(props: WhoUpdateFormProps): React.ReactElement;
