"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Choice = {
  value: string;
  title: string;
};

type FluxChoiceProps = {
  name: string;
  defaultValue: string;
  choices: Choice[];
};

export function FluxChoice({
  name,
  defaultValue,
  choices,
}: FluxChoiceProps) {
  return (
    <RadioGroup name={name} defaultValue={defaultValue} className="grid-cols-3">
      {choices.map((choice) => {
        const id = `${name}-${choice.value}`;

        return (
          <FieldLabel key={choice.value} htmlFor={id}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>{choice.title}</FieldTitle>
              </FieldContent>
              <RadioGroupItem value={choice.value} id={id} />
            </Field>
          </FieldLabel>
        );
      })}
    </RadioGroup>
  );
}