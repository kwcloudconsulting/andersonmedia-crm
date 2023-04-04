/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SwitchField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { What } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function WhatUpdateForm(props) {
  const {
    id: idProp,
    what: whatModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    small_business: false,
    large_business: false,
    government_agency: false,
    non_profit: false,
    lender: false,
    contractor: false,
  };
  const [small_business, setSmall_business] = React.useState(
    initialValues.small_business
  );
  const [large_business, setLarge_business] = React.useState(
    initialValues.large_business
  );
  const [government_agency, setGovernment_agency] = React.useState(
    initialValues.government_agency
  );
  const [non_profit, setNon_profit] = React.useState(initialValues.non_profit);
  const [lender, setLender] = React.useState(initialValues.lender);
  const [contractor, setContractor] = React.useState(initialValues.contractor);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = whatRecord
      ? { ...initialValues, ...whatRecord }
      : initialValues;
    setSmall_business(cleanValues.small_business);
    setLarge_business(cleanValues.large_business);
    setGovernment_agency(cleanValues.government_agency);
    setNon_profit(cleanValues.non_profit);
    setLender(cleanValues.lender);
    setContractor(cleanValues.contractor);
    setErrors({});
  };
  const [whatRecord, setWhatRecord] = React.useState(whatModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(What, idProp)
        : whatModelProp;
      setWhatRecord(record);
    };
    queryData();
  }, [idProp, whatModelProp]);
  React.useEffect(resetStateValues, [whatRecord]);
  const validations = {
    small_business: [{ type: "Required" }],
    large_business: [{ type: "Required" }],
    government_agency: [{ type: "Required" }],
    non_profit: [{ type: "Required" }],
    lender: [{ type: "Required" }],
    contractor: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          small_business,
          large_business,
          government_agency,
          non_profit,
          lender,
          contractor,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            What.copyOf(whatRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "WhatUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Small business"
        defaultChecked={false}
        isDisabled={false}
        isChecked={small_business}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              small_business: value,
              large_business,
              government_agency,
              non_profit,
              lender,
              contractor,
            };
            const result = onChange(modelFields);
            value = result?.small_business ?? value;
          }
          if (errors.small_business?.hasError) {
            runValidationTasks("small_business", value);
          }
          setSmall_business(value);
        }}
        onBlur={() => runValidationTasks("small_business", small_business)}
        errorMessage={errors.small_business?.errorMessage}
        hasError={errors.small_business?.hasError}
        {...getOverrideProps(overrides, "small_business")}
      ></SwitchField>
      <SwitchField
        label="Large business"
        defaultChecked={false}
        isDisabled={false}
        isChecked={large_business}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              small_business,
              large_business: value,
              government_agency,
              non_profit,
              lender,
              contractor,
            };
            const result = onChange(modelFields);
            value = result?.large_business ?? value;
          }
          if (errors.large_business?.hasError) {
            runValidationTasks("large_business", value);
          }
          setLarge_business(value);
        }}
        onBlur={() => runValidationTasks("large_business", large_business)}
        errorMessage={errors.large_business?.errorMessage}
        hasError={errors.large_business?.hasError}
        {...getOverrideProps(overrides, "large_business")}
      ></SwitchField>
      <SwitchField
        label="Government agency"
        defaultChecked={false}
        isDisabled={false}
        isChecked={government_agency}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              small_business,
              large_business,
              government_agency: value,
              non_profit,
              lender,
              contractor,
            };
            const result = onChange(modelFields);
            value = result?.government_agency ?? value;
          }
          if (errors.government_agency?.hasError) {
            runValidationTasks("government_agency", value);
          }
          setGovernment_agency(value);
        }}
        onBlur={() =>
          runValidationTasks("government_agency", government_agency)
        }
        errorMessage={errors.government_agency?.errorMessage}
        hasError={errors.government_agency?.hasError}
        {...getOverrideProps(overrides, "government_agency")}
      ></SwitchField>
      <SwitchField
        label="Non profit"
        defaultChecked={false}
        isDisabled={false}
        isChecked={non_profit}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              small_business,
              large_business,
              government_agency,
              non_profit: value,
              lender,
              contractor,
            };
            const result = onChange(modelFields);
            value = result?.non_profit ?? value;
          }
          if (errors.non_profit?.hasError) {
            runValidationTasks("non_profit", value);
          }
          setNon_profit(value);
        }}
        onBlur={() => runValidationTasks("non_profit", non_profit)}
        errorMessage={errors.non_profit?.errorMessage}
        hasError={errors.non_profit?.hasError}
        {...getOverrideProps(overrides, "non_profit")}
      ></SwitchField>
      <SwitchField
        label="Lender"
        defaultChecked={false}
        isDisabled={false}
        isChecked={lender}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              small_business,
              large_business,
              government_agency,
              non_profit,
              lender: value,
              contractor,
            };
            const result = onChange(modelFields);
            value = result?.lender ?? value;
          }
          if (errors.lender?.hasError) {
            runValidationTasks("lender", value);
          }
          setLender(value);
        }}
        onBlur={() => runValidationTasks("lender", lender)}
        errorMessage={errors.lender?.errorMessage}
        hasError={errors.lender?.hasError}
        {...getOverrideProps(overrides, "lender")}
      ></SwitchField>
      <SwitchField
        label="Contractor"
        defaultChecked={false}
        isDisabled={false}
        isChecked={contractor}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              small_business,
              large_business,
              government_agency,
              non_profit,
              lender,
              contractor: value,
            };
            const result = onChange(modelFields);
            value = result?.contractor ?? value;
          }
          if (errors.contractor?.hasError) {
            runValidationTasks("contractor", value);
          }
          setContractor(value);
        }}
        onBlur={() => runValidationTasks("contractor", contractor)}
        errorMessage={errors.contractor?.errorMessage}
        hasError={errors.contractor?.hasError}
        {...getOverrideProps(overrides, "contractor")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || whatModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || whatModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
