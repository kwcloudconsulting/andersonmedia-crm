/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { What } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WhatUpdateFormInputValues = {
    small_business?: boolean;
    large_business?: boolean;
    government_agency?: boolean;
    non_profit?: boolean;
    lender?: boolean;
    contractor?: boolean;
};
export declare type WhatUpdateFormValidationValues = {
    small_business?: ValidationFunction<boolean>;
    large_business?: ValidationFunction<boolean>;
    government_agency?: ValidationFunction<boolean>;
    non_profit?: ValidationFunction<boolean>;
    lender?: ValidationFunction<boolean>;
    contractor?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WhatUpdateFormOverridesProps = {
    WhatUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    small_business?: PrimitiveOverrideProps<SwitchFieldProps>;
    large_business?: PrimitiveOverrideProps<SwitchFieldProps>;
    government_agency?: PrimitiveOverrideProps<SwitchFieldProps>;
    non_profit?: PrimitiveOverrideProps<SwitchFieldProps>;
    lender?: PrimitiveOverrideProps<SwitchFieldProps>;
    contractor?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type WhatUpdateFormProps = React.PropsWithChildren<{
    overrides?: WhatUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    what?: What;
    onSubmit?: (fields: WhatUpdateFormInputValues) => WhatUpdateFormInputValues;
    onSuccess?: (fields: WhatUpdateFormInputValues) => void;
    onError?: (fields: WhatUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WhatUpdateFormInputValues) => WhatUpdateFormInputValues;
    onValidate?: WhatUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WhatUpdateForm(props: WhatUpdateFormProps): React.ReactElement;
