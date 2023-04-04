/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WhatCreateFormInputValues = {
    small_business?: boolean;
    large_business?: boolean;
    government_agency?: boolean;
    non_profit?: boolean;
    lender?: boolean;
    contractor?: boolean;
};
export declare type WhatCreateFormValidationValues = {
    small_business?: ValidationFunction<boolean>;
    large_business?: ValidationFunction<boolean>;
    government_agency?: ValidationFunction<boolean>;
    non_profit?: ValidationFunction<boolean>;
    lender?: ValidationFunction<boolean>;
    contractor?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WhatCreateFormOverridesProps = {
    WhatCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    small_business?: PrimitiveOverrideProps<SwitchFieldProps>;
    large_business?: PrimitiveOverrideProps<SwitchFieldProps>;
    government_agency?: PrimitiveOverrideProps<SwitchFieldProps>;
    non_profit?: PrimitiveOverrideProps<SwitchFieldProps>;
    lender?: PrimitiveOverrideProps<SwitchFieldProps>;
    contractor?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type WhatCreateFormProps = React.PropsWithChildren<{
    overrides?: WhatCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WhatCreateFormInputValues) => WhatCreateFormInputValues;
    onSuccess?: (fields: WhatCreateFormInputValues) => void;
    onError?: (fields: WhatCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WhatCreateFormInputValues) => WhatCreateFormInputValues;
    onValidate?: WhatCreateFormValidationValues;
} & React.CSSProperties>;
export default function WhatCreateForm(props: WhatCreateFormProps): React.ReactElement;
